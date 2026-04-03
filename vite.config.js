import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { createClient } from '@supabase/supabase-js';
import { createHash } from 'crypto';
import { parse as parseUrl } from 'url';

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function sha256(str) {
  return createHash('sha256').update(str).digest('hex');
}

function readBody(req) {
  return new Promise((resolve) => {
    let raw = '';
    req.on('data', (chunk) => (raw += chunk));
    req.on('end', () => {
      try { resolve(JSON.parse(raw)); } catch { resolve({}); }
    });
  });
}

function json(res, status, data) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}

// ─────────────────────────────────────────────────────────────────────────────
// /api/admin handler  (mirrors api/admin.js for local dev)
// ─────────────────────────────────────────────────────────────────────────────

async function handleAdminApi(req, res, env) {
  const { pathname, query: q } = parseUrl(req.url, true);
  const action = q.action;
  const id = q.id;
  const filename = q.filename;

  const SUPABASE_URL = env.SUPABASE_URL;
  const SERVICE_ROLE_KEY = env.SUPABASE_SERVICE_ROLE_KEY;
  const ADMIN_PASSWORD_HASH = env.ADMIN_PASSWORD_HASH;

  function getSupabase() {
    return createClient(SUPABASE_URL, SERVICE_ROLE_KEY);
  }

  function verifyAuth() {
    const auth = req.headers['authorization'] || '';
    if (!auth.startsWith('Bearer ')) return false;
    return sha256(auth.slice(7)) === ADMIN_PASSWORD_HASH;
  }

  const method = req.method.toUpperCase();

  // ── Verify password ─────────────────────────────────────────────────────
  if (method === 'POST' && action === 'verify') {
    const body = await readBody(req);
    if (!body.password || sha256(body.password) !== ADMIN_PASSWORD_HASH) {
      return json(res, 401, { error: 'Invalid password' });
    }
    return json(res, 200, { success: true });
  }

  // ── Auth guard ──────────────────────────────────────────────────────────
  if (!verifyAuth()) return json(res, 401, { error: 'Unauthorized' });

  const supabase = getSupabase();

  // ── List all posts ──────────────────────────────────────────────────────
  if (method === 'GET' && action === 'list') {
    const { data, error } = await supabase
      .from('blogs')
      .select('id, title, slug, excerpt, cover_image_url, is_published, created_at, updated_at, author')
      .order('created_at', { ascending: false });
    if (error) return json(res, 500, { error: error.message });
    return json(res, 200, data);
  }

  // ── Get single post ─────────────────────────────────────────────────────
  if (method === 'GET' && action === 'get' && id) {
    const { data, error } = await supabase.from('blogs').select('*').eq('id', id).single();
    if (error) return json(res, 500, { error: error.message });
    return json(res, 200, data);
  }

  // ── Create post ─────────────────────────────────────────────────────────
  if (method === 'POST' && action === 'create') {
    const body = await readBody(req);
    const { data, error } = await supabase.from('blogs').insert([body]).select().single();
    if (error) return json(res, 500, { error: error.message });
    return json(res, 200, data);
  }

  // ── Update post ─────────────────────────────────────────────────────────
  if (method === 'POST' && action === 'update') {
    const body = await readBody(req);
    const { id: postId, ...fields } = body;
    const { data, error } = await supabase.from('blogs').update(fields).eq('id', postId).select().single();
    if (error) return json(res, 500, { error: error.message });
    return json(res, 200, data);
  }

  // ── Delete post ─────────────────────────────────────────────────────────
  if (method === 'DELETE' && action === 'delete' && id) {
    const { error } = await supabase.from('blogs').delete().eq('id', id);
    if (error) return json(res, 500, { error: error.message });
    return json(res, 200, { success: true });
  }

  // ── Toggle publish ──────────────────────────────────────────────────────
  if (method === 'POST' && action === 'toggle-publish') {
    const body = await readBody(req);
    const { id: postId, is_published } = body;
    const { data, error } = await supabase
      .from('blogs').update({ is_published }).eq('id', postId).select('id, is_published').single();
    if (error) return json(res, 500, { error: error.message });
    return json(res, 200, data);
  }

  // ── Signed upload URL ───────────────────────────────────────────────────
  if (method === 'GET' && action === 'upload-url' && filename) {
    const ext = filename.split('.').pop()?.toLowerCase() || 'jpg';
    const safeName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const path = `uploads/${safeName}`;
    const { data, error } = await supabase.storage.from('blog-images').createSignedUploadUrl(path);
    if (error) return json(res, 500, { error: error.message });
    const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/blog-images/${path}`;
    return json(res, 200, { signedUrl: data.signedUrl, path, publicUrl });
  }

  return json(res, 400, { error: 'Invalid action or method' });
}

// ─────────────────────────────────────────────────────────────────────────────
// /api/og/:slug handler  (mirrors api/og/[slug].js for local dev)
// ─────────────────────────────────────────────────────────────────────────────

async function handleOgApi(req, res, env, slug) {
  const SUPABASE_URL = env.SUPABASE_URL || env.VITE_SUPABASE_URL;
  const SUPABASE_ANON_KEY = env.VITE_SUPABASE_ANON_KEY;

  function escape(str) {
    return String(str || '')
      .replace(/&/g, '&amp;').replace(/"/g, '&quot;')
      .replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  try {
    const apiRes = await fetch(
      `${SUPABASE_URL}/rest/v1/blogs?slug=eq.${encodeURIComponent(slug)}&is_published=eq.true&select=title,excerpt,cover_image_url,author,created_at`,
      { headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` } }
    );
    const blogs = await apiRes.json();
    const blog = blogs?.[0];
    if (!blog) { res.statusCode = 404; res.end('Not found'); return; }

    const host = req.headers.host || 'localhost:5173';
    const blogUrl = `http://${host}/blog/${slug}`;
    const html = `<!DOCTYPE html><html><head>
<meta property="og:title" content="${escape(blog.title)}" />
<meta property="og:description" content="${escape(blog.excerpt)}" />
<meta property="og:image" content="${blog.cover_image_url || ''}" />
<meta property="og:url" content="${blogUrl}" />
<meta property="og:type" content="article" />
<meta http-equiv="refresh" content="0; url=${blogUrl}" />
</head><body><a href="${blogUrl}">${escape(blog.title)}</a></body></html>`;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(html);
  } catch (e) {
    res.statusCode = 500; res.end('Error');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Vite config
// ─────────────────────────────────────────────────────────────────────────────

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'local-api',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            const url = req.url || '';

            // Route: /api/admin
            if (url.startsWith('/api/admin')) {
              try { await handleAdminApi(req, res, env); } catch (e) { json(res, 500, { error: e.message }); }
              return;
            }

            // Route: /api/og/:slug
            const ogMatch = url.match(/^\/api\/og\/([^/?]+)/);
            if (ogMatch) {
              try { await handleOgApi(req, res, env, ogMatch[1]); } catch (e) { res.statusCode = 500; res.end('Error'); }
              return;
            }

            next();
          });
        },
      },
    ],
  };
});
