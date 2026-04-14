import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import ShareButtons from '../components/blog/ShareButtons';
import { useLang, blogDetailTranslations } from '../context/LanguageContext';
import { getBlogBySlug } from '../data/staticBlogs';

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
  return new Intl.DateTimeFormat('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(d));
}

function readTime(content, minReadLabel) {
  if (!content) return null;
  const words = content.replace(/<[^>]+>/g, '').split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} ${minReadLabel}`;
}

/* ── Reading progress bar ── */
function ReadingProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setPct(h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent">
      <div className="h-full bg-on-tertiary-container transition-[width] duration-75" style={{ width: `${pct}%` }} />
    </div>
  );
}

/* ── Not found ── */
function NotFound({ t }) {
  return (
    <main className="min-h-screen bg-surface flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-sm">
        <div className="w-24 h-24 bg-primary/8 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-primary text-5xl">article</span>
        </div>
        {/* heading → Raleway ExtraBold */}
        <h1 className="font-heading text-3xl sm:text-4xl text-primary mb-3">{t.notFoundHeading}</h1>
        {/* body */}
        <p className="text-on-surface-variant text-sm sm:text-base mb-8 leading-relaxed">{t.notFoundBody}</p>
        {/* label-style button */}
        <Link to="/blog" className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-md font-bold text-sm sm:text-base hover:bg-on-primary-fixed-variant transition-all shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-base">arrow_back</span>
          {t.backToAllArticles}
        </Link>
      </div>
    </main>
  );
}

export default function BlogDetail() {
  const { slug } = useParams();
  const { lang } = useLang();
  const t = blogDetailTranslations[lang];
  const blog = getBlogBySlug(slug, lang);
  const blogUrl = typeof window !== 'undefined' ? window.location.href : '';
  const [heroImgErr, setHeroImgErr] = useState(false);

  useEffect(() => {
    if (!blog) return;
    document.title = `${blog.title} — JP Neuro Spine Hospital and Pain Management Centre Hospital`;
  }, [blog]);

  if (!blog) return <NotFound t={t} />;

  const cleanContent = DOMPurify.sanitize(blog.content, {
    ALLOWED_TAGS: ['p','br','strong','em','s','u','h1','h2','h3','h4','ul','ol','li','blockquote','a','img','figure','figcaption','code','pre','hr'],
    ALLOWED_ATTR: ['href','src','alt','class','target','rel'],
  });

  const mins = readTime(blog.content, t.minRead);

  return (
    <>
      <FontStyle />
      <ReadingProgress />
      <main className="bg-surface text-on-surface font-body min-h-screen">

        {/* ══ HERO ══ */}
        {blog.cover_image_url && !heroImgErr ? (
          <div className="relative w-full overflow-hidden pt-16 sm:pt-20" style={{ height: 'min(70vh, 560px)', minHeight: '300px' }}>
            <img src={blog.cover_image_url} alt={blog.title} onError={() => setHeroImgErr(true)} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1050]/92 via-[#0a1050]/45 to-[#0a1050]/15" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1050]/25 to-transparent" />

            {/* Back */}
            <div className="absolute top-20 sm:top-24 left-4 sm:left-8 z-10">
              {/* label */}
              <Link to="/blog" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-md text-on-primary text-xs font-semibold rounded-md border border-white/25 hover:bg-white/25 transition-all">
                <span className="material-symbols-outlined text-base">arrow_back</span>
                {t.allArticles}
              </Link>
            </div>

            {/* Hero text */}
            <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-12 pb-10 sm:pb-14 z-10">
              <div className="max-w-7xl mx-auto">
                {/* label row */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-on-tertiary-container text-tertiary text-xs font-black uppercase tracking-wider rounded-full">
                    <span className="material-symbols-outlined text-sm">local_hospital</span>
                    {t.healthArticleBadge}
                  </span>
                  <span className="text-white/50 text-xs">•</span>
                  <span className="text-white/75 text-xs font-medium">{blog.author || 'JP Neuro Spine Hospital and Pain Management Centre'}</span>
                  <span className="text-white/40 text-xs">•</span>
                  <span className="text-white/60 text-xs">{formatDate(blog.created_at)}</span>
                  {mins && <>
                    <span className="text-white/40 text-xs">•</span>
                    <span className="inline-flex items-center gap-1 text-white/60 text-xs">
                      <span className="material-symbols-outlined text-sm">schedule</span>{mins}
                    </span>
                  </>}
                </div>
                {/* hero heading → Raleway ExtraBold */}
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl text-on-primary leading-tight tracking-tight max-w-4xl">
                  {blog.title}
                </h1>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative bg-gradient-to-br from-[#0a1050] via-primary to-primary-container pt-16 sm:pt-20 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-10 pb-16">
              {/* label */}
              <Link to="/blog" className="inline-flex items-center gap-1.5 text-primary-fixed/60 hover:text-primary-fixed text-xs font-medium transition-colors mb-8">
                <span className="material-symbols-outlined text-base">arrow_back</span>{t.allArticles}
              </Link>
              {/* label row */}
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-on-tertiary-container text-tertiary text-xs font-black uppercase tracking-wider rounded-full">
                  <span className="material-symbols-outlined text-sm">local_hospital</span>{t.healthArticleBadge}
                </span>
                <span className="text-primary-fixed/50 text-xs">•</span>
                <span className="text-primary-fixed/80 text-xs font-medium">{blog.author || 'JP Neuro Spine Hospital and Pain Management Centre'}</span>
                <span className="text-primary-fixed/40 text-xs">•</span>
                <span className="text-primary-fixed/60 text-xs">{formatDate(blog.created_at)}</span>
                {mins && <>
                  <span className="text-primary-fixed/40 text-xs">•</span>
                  <span className="inline-flex items-center gap-1 text-primary-fixed/60 text-xs">
                    <span className="material-symbols-outlined text-sm">schedule</span>{mins}
                  </span>
                </>}
              </div>
              {/* hero heading → Raleway ExtraBold */}
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl text-on-primary leading-tight tracking-tight max-w-4xl">
                {blog.title}
              </h1>
            </div>
            <div className="absolute bottom-0 left-0 right-0">
              <svg viewBox="0 0 1440 40" className="w-full fill-surface" preserveAspectRatio="none" style={{ display: 'block' }}>
                <path d="M0,40 L0,20 Q720,0 1440,20 L1440,40 Z" />
              </svg>
            </div>
          </div>
        )}

        {/* ══ TWO-COLUMN BODY ══ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-14">
          <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-12 xl:gap-16">

            {/* ── LEFT: Article content ── */}
            <div className="min-w-0">

              {/* Back link (when cover image present) */}
              {blog.cover_image_url && !heroImgErr && (
                <Link to="/blog" className="inline-flex items-center gap-1.5 text-xs text-on-surface-variant hover:text-primary transition-colors group font-medium mb-6">
                  <span className="material-symbols-outlined text-base group-hover:-translate-x-0.5 transition-transform">arrow_back</span>
                  {t.allArticles}
                </Link>
              )}

              {/* Title + meta (cover image path) */}
              {blog.cover_image_url && !heroImgErr && (
                <header className="mb-6">
                  {/* heading → Raleway ExtraBold */}
                  <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight tracking-tight mb-4">
                    {blog.title}
                  </h1>
                  {/* label row */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-on-surface-variant">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-primary text-sm">person</span>
                      </div>
                      <span className="font-semibold text-on-surface text-xs">{blog.author || 'JP Neuro Spine Hospital and Pain Management Centre'}</span>
                    </div>
                    <span className="w-1 h-1 rounded-full bg-outline-variant inline-block" />
                    <time dateTime={blog.created_at}>{formatDate(blog.created_at)}</time>
                    {mins && <>
                      <span className="w-1 h-1 rounded-full bg-outline-variant inline-block" />
                      <span className="inline-flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">schedule</span>{mins}
                      </span>
                    </>}
                  </div>
                </header>
              )}

              {/* Excerpt — body */}
              {blog.excerpt && (
                <div className="mb-8 pl-5 pr-5 py-4 bg-primary/5 border-l-[3px] border-primary rounded-r-2xl">
                  <p className="text-sm sm:text-base text-on-surface font-medium leading-relaxed italic">{blog.excerpt}</p>
                </div>
              )}

              {/* Divider */}
              <div className="flex items-center gap-4 mb-10">
                <div className="flex-1 h-px bg-outline-variant/40" />
                <span className="material-symbols-outlined text-primary/25 text-lg">favorite</span>
                <div className="flex-1 h-px bg-outline-variant/40" />
              </div>

              {/* Body — prose uses heading/subhead/body scale internally */}
              <article
                className="
                  prose prose-base max-w-none font-body
                  prose-headings:font-heading prose-headings:text-primary prose-headings:tracking-tight
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-outline-variant/30
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:text-primary-container
                  prose-p:text-on-surface-variant prose-p:leading-[1.9] prose-p:text-base
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-semibold
                  prose-blockquote:border-l-[3px] prose-blockquote:border-on-tertiary-container
                  prose-blockquote:bg-tertiary-fixed/30 prose-blockquote:py-3 prose-blockquote:pl-5 prose-blockquote:pr-5
                  prose-blockquote:not-italic prose-blockquote:text-on-surface
                  prose-img:rounded-2xl prose-img:shadow-md
                  prose-strong:text-on-surface prose-strong:font-bold
                  prose-li:text-on-surface-variant prose-li:leading-relaxed
                  prose-code:bg-surface-container prose-code:text-primary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-[0.875em]
                  prose-pre:bg-inverse-surface prose-pre:rounded-2xl prose-pre:shadow-xl
                  prose-hr:border-outline-variant/30
                "
                dangerouslySetInnerHTML={{ __html: cleanContent }}
              />

              {/* Bottom divider */}
              <div className="flex items-center gap-4 my-12">
                <div className="flex-1 h-px bg-outline-variant/40" />
                <span className="w-2 h-2 rounded-full bg-primary/30 inline-block" />
                <div className="flex-1 h-px bg-outline-variant/40" />
              </div>

              {/* Share row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4">
                <ShareButtons url={blogUrl} title={blog.title} />
                <a
                  href="tel:04343239923"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-md font-bold text-sm sm:text-base hover:bg-on-primary-fixed-variant transition-all shadow-lg shadow-primary/20"
                >
                  <span className="material-symbols-outlined text-base">call</span>
                  {t.bookConsultation}
                </a>
              </div>
            </div>

            {/* ── RIGHT: Sticky sidebar ── */}
            <aside className="mt-10 lg:mt-0 space-y-6">
              <div className="lg:sticky lg:top-24 space-y-6">

                {/* Author card */}
                <div className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-container rounded-2xl p-6">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                  <div className="relative">
                    {/* label */}
                    <p className="text-xs font-black text-on-tertiary-container uppercase tracking-[0.18em] mb-3">{t.writtenBy}</p>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-on-primary text-2xl">person</span>
                      </div>
                      <div>
                        {/* subhead → Host Grotesk */}
                        <p className="font-subheading text-xl sm:text-2xl text-on-primary">{blog.author || 'JP Neuro Spine Hospital and Pain Management Centre'}</p>
                        {/* label */}
                        {mins && <p className="text-primary-fixed/60 text-xs mt-0.5">{mins}</p>}
                      </div>
                    </div>
                    {/* body */}
                    <p className="text-primary-fixed/60 text-sm sm:text-base leading-relaxed">
                      {t.hospitalBio}
                    </p>
                  </div>
                </div>

                {/* Appointment CTA */}
                <div className="bg-white border border-outline-variant/20 rounded-2xl p-6 shadow-[0_2px_16px_rgba(20,37,136,0.05)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary text-xl">call</span>
                    </div>
                    {/* subhead → Host Grotesk */}
                    <p className="font-subheading text-xl sm:text-2xl text-primary">{t.needConsultation}</p>
                  </div>
                  {/* body */}
                  <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-5">
                    {t.consultationBody}
                  </p>
                  <a
                    href="tel:04343239923"
                    className="flex items-center justify-center gap-2 w-full bg-primary text-on-primary px-5 py-3 rounded-md font-bold text-sm sm:text-base hover:bg-on-primary-fixed-variant transition-all"
                  >
                    <span className="material-symbols-outlined text-base">call</span>
                    {t.callNow}
                  </a>
                </div>

                {/* Emergency */}
                <div className="bg-surface-container rounded-2xl p-5 border border-outline-variant/15">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-error/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-error text-lg">emergency</span>
                    </div>
                    {/* body */}
                    <p className="font-bold text-on-surface text-sm sm:text-base">{t.emergencyCare}</p>
                  </div>
                  {/* body */}
                  <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-4">
                    {t.emergencyBody}
                  </p>
                  <Link
                    to="/emergency"
                    className="flex items-center justify-center gap-2 w-full bg-error/10 text-error border border-error/20 px-4 py-2.5 rounded-md font-bold text-sm sm:text-base hover:bg-error/15 transition-all"
                  >
                    <span className="material-symbols-outlined text-base">call</span>
                    {t.emergency247}
                  </Link>
                </div>

                {/* Back to blog */}
                <Link
                  to="/blog"
                  className="flex items-center justify-center gap-2 w-full bg-surface-container-high text-primary border border-outline-variant/20 px-5 py-3 rounded-md font-bold text-sm sm:text-base hover:bg-surface-container-highest transition-all"
                >
                  <span className="material-symbols-outlined text-base">arrow_back</span>
                  {t.allArticlesBtn}
                </Link>

              </div>
            </aside>
          </div>
        </div>

      </main>
    </>
  );
}
