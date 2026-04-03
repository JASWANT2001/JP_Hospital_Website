/**
 * Vercel Edge Middleware — Social Bot OG Tag Injection
 *
 * When LinkedIn, Twitter, Facebook etc. crawlers request a blog URL,
 * this middleware rewrites the request to /api/og/[slug] which returns
 * a minimal HTML page with proper Open Graph meta tags.
 *
 * Regular browser visits pass through to the React SPA as normal.
 */

const SOCIAL_BOTS = [
  'linkedinbot',
  'facebookexternalhit',
  'twitterbot',
  'slackbot',
  'telegrambot',
  'whatsapp',
  'discordbot',
  'pinterest',
  'ia_archiver',
];

export const config = {
  matcher: ['/blog/:slug*'],
};

export default function middleware(request) {
  const { pathname } = new URL(request.url);
  const userAgent = (request.headers.get('user-agent') || '').toLowerCase();

  // Never intercept the admin route
  if (pathname.includes('admin-prasanna')) {
    return;
  }

  // Only rewrite for social media bot crawlers
  const isSocialBot = SOCIAL_BOTS.some((bot) => userAgent.includes(bot));
  if (!isSocialBot) return;

  // Extract slug from /blog/:slug
  const slug = pathname.replace(/^\/blog\//, '').split('/')[0];
  if (!slug) return;

  // Rewrite to the OG serverless function
  const url = new URL(request.url);
  url.pathname = `/api/og/${slug}`;
  return Response.redirect(url.toString(), 302);
}
