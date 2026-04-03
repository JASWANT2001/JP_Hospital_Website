/**
 * Vercel Serverless Function — OG Meta Tags
 *
 * Called directly by the Edge Middleware (middleware.js) when a social
 * media bot requests a blog URL. Returns a minimal HTML page with proper
 * Open Graph tags so LinkedIn, Twitter, etc. show rich preview cards.
 */

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY;

function escape(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export default async function handler(req, res) {
  const { slug } = req.query;

  if (!slug) {
    return res.status(400).send('Missing slug');
  }

  try {
    const apiRes = await fetch(
      `${SUPABASE_URL}/rest/v1/blogs?slug=eq.${encodeURIComponent(slug)}&is_published=eq.true&select=title,excerpt,cover_image_url,author,created_at`,
      {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
      }
    );

    const blogs = await apiRes.json();
    const blog = blogs?.[0];

    if (!blog) {
      return res.status(404).send('Not found');
    }

    const siteUrl = `https://${req.headers.host}`;
    const blogUrl = `${siteUrl}/blog/${slug}`;
    const title = escape(blog.title);
    const description = escape(blog.excerpt || '');
    const image = blog.cover_image_url || `${siteUrl}/og-default.jpg`;
    const author = escape(blog.author || 'Dr. Prasanna');

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${title}</title>

  <!-- Open Graph (LinkedIn, Facebook) -->
  <meta property="og:type" content="article" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${image}" />
  <meta property="og:url" content="${blogUrl}" />
  <meta property="og:site_name" content="JP Neuro-Spine Hospital" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${image}" />

  <!-- Article metadata -->
  <meta property="article:author" content="${author}" />
  <meta property="article:published_time" content="${blog.created_at}" />

  <!-- Redirect real browsers to the React SPA -->
  <meta http-equiv="refresh" content="0; url=${blogUrl}" />
</head>
<body>
  <p>Redirecting to <a href="${blogUrl}">${title}</a>...</p>
</body>
</html>`;

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    return res.status(200).send(html);
  } catch (err) {
    console.error('OG function error:', err);
    return res.status(500).send('Internal error');
  }
}
