import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang, blogListingTranslations } from '../context/LanguageContext';
import { getBlogsForLang } from '../data/staticBlogs';

// ─── Font Scale (matches Home exactly) ───────────────────────────────────────
// label    → text-xs                           (12px) — badges, eyebrow, meta
// body     → text-sm sm:text-base              (14→16px) — paragraphs, descriptions
// subhead  → text-xl sm:text-2xl               (20→24px) — card titles            → font-subheading
// heading  → text-3xl sm:text-4xl lg:text-5xl  (36→40→48px) — section headings    → font-heading
// hero     → text-4xl sm:text-5xl lg:text-7xl  (36→48→72px) — hero H1             → font-heading

const FontStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@800&family=Host+Grotesk:wght@400&display=swap');
    .font-heading    { font-family: 'Raleway', sans-serif;      font-weight: 800; }
    .font-subheading { font-family: 'Host Grotesk', sans-serif; font-weight: 400; }
  `}</style>
);

function formatDate(d) {
  return new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(d));
}

function readTime(content, minReadLabel) {
  if (!content) return null;
  const words = (content || '').replace(/<[^>]+>/g, '').split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} ${minReadLabel}`;
}

/* ── Featured Card (first article, full-width horizontal) ── */
function FeaturedCard({ blog, t }) {
  const [imgErr, setImgErr] = useState(false);
  return (
    <Link to={`/blog/${blog.slug}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden border border-surface-container-high shadow-[0_4px_24px_rgba(20,37,136,0.06)] hover:shadow-[0_8px_40px_rgba(20,37,136,0.12)] transition-all duration-300 grid lg:grid-cols-2">
        {/* Image */}
        <div className="relative overflow-hidden" style={{ minHeight: '360px' }}>
          {blog.cover_image_url && !imgErr ? (
            <img
              src={blog.cover_image_url}
              alt={blog.title}
              onError={() => setImgErr(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-primary-fixed text-7xl opacity-40">article</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
          {/* Featured badge */}
          <div className="absolute top-5 left-5">
            {/* label */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-on-tertiary-container text-tertiary text-xs font-black uppercase tracking-wider rounded-full shadow-md">
              <span className="material-symbols-outlined text-sm">star</span>
              {t.featuredBadge}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 lg:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            {/* label */}
            <span className="text-xs font-bold text-primary uppercase tracking-[0.15em] bg-primary/8 px-3 py-1 rounded-full border border-primary/15">
              {t.healthArticleBadge}
            </span>
          </div>

          {/* subhead → Raleway */}
          <h2 className="font-heading text-xl sm:text-2xl text-primary leading-tight mb-4 group-hover:text-primary-container transition-colors">
            {blog.title}
          </h2>

          {blog.excerpt && (
            /* body */
            <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
              {blog.excerpt}
            </p>
          )}

          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-primary text-base">person</span>
            </div>
            <div>
              {/* body */}
              <p className="text-sm sm:text-base font-bold text-on-surface">{blog.author || 'JP Neuro Spine Hospital and Pain Management Centre'}</p>
              {/* label */}
              <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                <time dateTime={blog.created_at}>{formatDate(blog.created_at)}</time>
                {blog.content && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-outline-variant inline-block" />
                    <span>{readTime(blog.content, t.minRead)}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* label-style link */}
          <div className="flex items-center gap-2 text-primary font-bold text-sm sm:text-base group-hover:gap-3 transition-all">
            {t.readFullArticle}
            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ── Regular Article Card ── */
function ArticleCard({ blog, t }) {
  const [imgErr, setImgErr] = useState(false);
  return (
    <Link to={`/blog/${blog.slug}`} className="group block h-full">
      <article className="bg-white rounded-2xl overflow-hidden border border-surface-container-high shadow-[0_2px_16px_rgba(20,37,136,0.04)] hover:shadow-[0_8px_32px_rgba(20,37,136,0.10)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[16/9] flex-shrink-0 bg-primary/5">
          {blog.cover_image_url && !imgErr ? (
            <img
              src={blog.cover_image_url}
              alt={blog.title}
              loading="lazy"
              onError={() => setImgErr(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary-container/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary/30 text-5xl">article</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3">
            {/* label */}
            <span className="text-xs font-black uppercase tracking-wider text-white bg-primary/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
              {t.healthArticleBadge}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 flex flex-col flex-grow">
          {/* subhead → Raleway */}
          <h3 className="font-heading text-xl sm:text-2xl text-primary leading-snug mb-3 line-clamp-2 group-hover:text-primary-container transition-colors">
            {blog.title}
          </h3>

          {blog.excerpt && (
            /* body */
            <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed line-clamp-2 mb-4 flex-grow">
              {blog.excerpt}
            </p>
          )}

          {/* Divider */}
          <div className="border-t border-outline-variant/20 pt-4 mt-auto flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-xs">person</span>
              </div>
              <div className="min-w-0">
                {/* label */}
                <p className="text-xs font-bold text-on-surface truncate">{blog.author || 'JP Neuro Spine Hospital and Pain Management Centre'}</p>
                <p className="text-xs text-on-surface-variant">{formatDate(blog.created_at)}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-primary flex-shrink-0">
              <span className="text-xs font-bold">{t.readLink}</span>
              <span className="material-symbols-outlined text-base group-hover:translate-x-0.5 transition-transform">chevron_right</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

/* ── Main Page ── */
export default function BlogListing() {
  const { lang } = useLang();
  const t = blogListingTranslations[lang];
  const blogs = getBlogsForLang(lang);

  const featured = blogs[0];
  const rest = blogs.slice(1);

  return (
    <main className="bg-surface text-on-surface font-body min-h-screen pt-16 sm:pt-20">
      <FontStyle />

      {/* ── Hero Banner ── */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0d1a6b] via-primary to-primary-container">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-white/5 rounded-full" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-on-tertiary-container/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5"
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 64" className="w-full fill-surface" preserveAspectRatio="none" style={{ display: 'block' }}>
            <path d="M0,64 L0,32 Q360,0 720,32 Q1080,64 1440,32 L1440,64 Z" />
          </svg>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 py-20 sm:py-28">
          <div className="max-w-2xl">
            {/* Breadcrumb — label */}
            <div className="flex items-center gap-2 text-primary-fixed/50 text-xs mb-6">
              <Link to="/" className="hover:text-primary-fixed transition-colors">{t.breadcrumbHome}</Link>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
              <span className="text-primary-fixed/80 font-medium">{t.breadcrumbCurrent}</span>
            </div>

            {/* Badge — label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-on-tertiary-container/20 border border-on-tertiary-container/30 text-on-tertiary-container rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <span className="material-symbols-outlined text-sm">local_hospital</span>
              {t.heroBadge}
            </div>

            {/* hero heading → Raleway ExtraBold */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl text-on-primary leading-[1.1] tracking-tight mb-5">
              {t.heroHeading1}<br />
              <span className="text-on-tertiary-container">{t.heroHeading2}</span>
            </h1>
            {/* body */}
            <p className="text-primary-fixed/70 text-sm sm:text-base leading-relaxed max-w-xl">
              {t.heroBody}
            </p>

            <div className="flex items-center gap-6 mt-8">
              {/* label */}
              <div className="flex items-center gap-2 text-primary-fixed/60 text-xs">
                <span className="material-symbols-outlined text-base">article</span>
                <span>
                  <strong className="text-primary-fixed font-black">{blogs.length}</strong>{' '}
                  {blogs.length !== 1 ? t.articlePlural : t.articleSingular} {t.published}
                </span>
              </div>
              <div className="w-px h-4 bg-primary-fixed/20" />
              {/* label */}
              <div className="flex items-center gap-2 text-primary-fixed/60 text-xs">
                <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse inline-block" />
                <span className="text-primary-fixed/60">{t.updatedRegularly}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content area ── */}
      <div className="w-full px-4 sm:px-6 lg:px-12 pb-24">

        {/* Section label */}
        <div className="flex items-center justify-between pt-12 pb-8">
          <div>
            {/* label */}
            <p className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-1">{t.fromSpecialists}</p>
            {/* heading → Raleway ExtraBold */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-primary">{t.latestArticles}</h2>
          </div>
          {/* label */}
          <span className="hidden sm:block text-on-surface-variant text-xs font-medium bg-surface-container px-3 py-1.5 rounded-full">
            {blogs.length} {blogs.length !== 1 ? t.articlePlural : t.articleSingular}
          </span>
        </div>

        {/* Featured article */}
        {featured && (
          <div className="mb-10">
            <FeaturedCard blog={featured} t={t} />
          </div>
        )}

        {/* Divider with label */}
        {rest.length > 0 && (
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-outline-variant/30" />
            {/* label */}
            <span className="text-xs font-black text-on-surface-variant uppercase tracking-widest px-3">{t.allArticlesLabel}</span>
            <div className="flex-1 h-px bg-outline-variant/30" />
          </div>
        )}

        {/* Article grid */}
        {rest.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {rest.map((blog) => (
              <ArticleCard key={blog.id} blog={blog} t={t} />
            ))}
          </div>
        )}
      </div>

      {/* ── CTA Banner ── */}
      <section className="relative w-full overflow-hidden bg-surface-container-low border-t border-outline-variant/15">
        <div className="w-full px-4 sm:px-6 lg:px-12 py-16 sm:py-20">
          <div className="relative bg-gradient-to-br from-primary to-primary-container rounded-3xl overflow-hidden">
            {/* Decoration */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-on-tertiary-container/10 rounded-full blur-2xl" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-8 sm:p-12">
              <div className="lg:flex-1 text-center lg:text-left">
                {/* label */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-on-tertiary-container text-xs font-black uppercase tracking-widest mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container animate-pulse" />
                  {t.ctaBadge}
                </div>
                {/* heading → Raleway ExtraBold */}
                <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-on-primary mb-3 leading-tight">
                  {t.ctaHeading}
                </h3>
                {/* body */}
                <p className="text-primary-fixed/70 text-sm sm:text-base leading-relaxed max-w-md">
                  {t.ctaBody}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-on-primary px-7 py-3.5 rounded-md font-bold text-sm sm:text-base border border-white/25 hover:bg-white/20 transition-all"
                >
                  {t.ctaContact}
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
