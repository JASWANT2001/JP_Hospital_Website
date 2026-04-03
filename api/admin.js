/**
 * Vercel Serverless Function — Admin Blog API
 *
 * All write operations (create, update, delete) and admin reads use the
 * Supabase SERVICE ROLE KEY which is stored server-side only (no VITE_ prefix).
 *
 * Password is verified by SHA-256 hashing the submitted value and comparing
 * against ADMIN_PASSWORD_HASH — the plaintext password is never stored.
 *
 * Endpoints (all via this single handler):
 *   POST ?action=verify         — check admin password, no auth header needed
 *   GET  ?action=list           — list all posts (published + drafts)
 *   GET  ?action=get&id=X       — get single post for editing
 *   POST ?action=create         — create new post
 *   POST ?action=update         — update existing post
 *   DELETE ?action=delete&id=X  — delete post
 *   POST ?action=toggle-publish — toggle published state
 *   GET  ?action=upload-url&filename=X  — get signed upload URL for storage
 */

import { createClient } from '@supabase/supabase-js';
import { createHash } from 'crypto';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH;

function sha256(str) {
  return createHash('sha256').update(str).digest('hex');
}

function getSupabase() {
  return createClient(SUPABASE_URL, SERVICE_ROLE_KEY);
}

function verifyAuth(req) {
  const auth = req.headers['authorization'];
  if (!auth || !auth.startsWith('Bearer ')) return false;
  const token = auth.slice(7);
  return sha256(token) === ADMIN_PASSWORD_HASH;
}

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

export default async function handler(req, res) {
  setCors(res);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { action, id, filename } = req.query;

  // ── Verify password (no auth header required) ───────────────────────────────
  if (req.method === 'POST' && action === 'verify') {
    const { password } = req.body;
    if (!password || sha256(password) !== ADMIN_PASSWORD_HASH) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    return res.status(200).json({ success: true });
  }

  // ── All other actions require valid auth ────────────────────────────────────
  if (!verifyAuth(req)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const supabase = getSupabase();

  // ── List all posts ──────────────────────────────────────────────────────────
  if (req.method === 'GET' && action === 'list') {
    const { data, error } = await supabase
      .from('blogs')
      .select('id, title, slug, excerpt, cover_image_url, is_published, created_at, updated_at, author')
      .order('created_at', { ascending: false });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  // ── Get single post for editing ─────────────────────────────────────────────
  if (req.method === 'GET' && action === 'get' && id) {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('id', id)
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  // ── Create post ─────────────────────────────────────────────────────────────
  if (req.method === 'POST' && action === 'create') {
    const { data, error } = await supabase
      .from('blogs')
      .insert([req.body])
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  // ── Update post ─────────────────────────────────────────────────────────────
  if (req.method === 'POST' && action === 'update') {
    const { id: postId, ...fields } = req.body;
    const { data, error } = await supabase
      .from('blogs')
      .update(fields)
      .eq('id', postId)
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  // ── Delete post ─────────────────────────────────────────────────────────────
  if (req.method === 'DELETE' && action === 'delete' && id) {
    const { error } = await supabase.from('blogs').delete().eq('id', id);
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ success: true });
  }

  // ── Toggle publish ──────────────────────────────────────────────────────────
  if (req.method === 'POST' && action === 'toggle-publish') {
    const { id: postId, is_published } = req.body;
    const { data, error } = await supabase
      .from('blogs')
      .update({ is_published })
      .eq('id', postId)
      .select('id, is_published')
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  // ── Get signed upload URL for Supabase Storage ──────────────────────────────
  if (req.method === 'GET' && action === 'upload-url' && filename) {
    const ext = filename.split('.').pop()?.toLowerCase() || 'jpg';
    const safeName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const path = `uploads/${safeName}`;

    const { data, error } = await supabase.storage
      .from('blog-images')
      .createSignedUploadUrl(path);

    if (error) return res.status(500).json({ error: error.message });

    const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/blog-images/${path}`;
    return res.status(200).json({ signedUrl: data.signedUrl, path, publicUrl });
  }

  return res.status(400).json({ error: 'Invalid action or method' });
}
