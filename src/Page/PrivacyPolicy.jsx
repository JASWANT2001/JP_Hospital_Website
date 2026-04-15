import { Link } from "react-router-dom";
import { useLang, privacyPolicyTranslations } from "../context/LanguageContext";

const fontScale = {
  label: "text-xs sm:text-sm",
  body: "text-base sm:text-lg",
  subheading: "text-2xl sm:text-3xl",
  heading: "text-4xl sm:text-5xl lg:text-6xl",
  hero: "text-5xl sm:text-6xl lg:text-8xl",
};

export default function PrivacyPolicy() {
  const { lang } = useLang();
  const t = privacyPolicyTranslations[lang];

  return (
    <div className="bg-white min-h-screen font-inter pt-16 sm:pt-20">

      {/* Hero — full width */}
      <div className="bg-[#0d1d6e] w-full px-10 xl:px-20 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className={`${fontScale.label} font-semibold uppercase tracking-[0.2em] text-[#ff9800] mb-3`}>
              {t.hero.eyebrow}
            </p>
            <h1 className={`${fontScale.heading} font-manrope font-bold text-white leading-tight mb-4`}>
              {t.hero.heading}
            </h1>
            <p className={`text-white/50 ${fontScale.body} leading-relaxed max-w-2xl`}>
              {t.hero.body}
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className={`${fontScale.label} text-white/30 uppercase tracking-widest mb-1`}>{t.hero.effectiveLabel}</p>
            <p className={`text-white/60 ${fontScale.label} font-medium`}>{t.hero.effectiveDate}</p>
            <p className={`${fontScale.label} text-white/30 uppercase tracking-widest mt-2 mb-1`}>{t.hero.updatedLabel}</p>
            <p className={`text-white/60 ${fontScale.label} font-medium`}>{t.hero.updatedDate}</p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="border-b border-gray-100 w-full px-10 xl:px-20 py-3">
        <div className={`flex items-center gap-2 ${fontScale.label} text-gray-400`}>
          <Link to="/" className="hover:text-[#0d1d6e] transition-colors">{t.breadcrumbHome}</Link>
          <span className="material-symbols-outlined text-gray-300" style={{ fontSize: "14px" }}>chevron_right</span>
          <span className="text-gray-600">{t.breadcrumbCurrent}</span>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="w-full px-10 xl:px-20 py-12 flex gap-12 items-start">

        {/* Sidebar — sticky TOC */}
        <aside className="hidden lg:flex flex-col gap-6 w-64 shrink-0 sticky top-24">
          {/* Notice card */}
          <div className="bg-[#0d1d6e]/[0.04] border border-[#0d1d6e]/10 rounded-xl p-5 flex gap-3 items-start">
            <span className="material-symbols-outlined text-[#0d1d6e] shrink-0 mt-0.5" style={{ fontSize: "18px" }}>info</span>
            <p className={`${fontScale.label} text-[#0d1d6e]/70 leading-relaxed`}>
              {t.sidebarNotice}
            </p>
          </div>

          {/* TOC */}
          <div className="flex flex-col gap-1">
            <p className={`${fontScale.label} font-semibold uppercase tracking-[0.18em] text-gray-400 mb-2 px-1`}>
              {t.tocLabel}
            </p>
            {t.sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`${fontScale.label} text-gray-400 hover:text-[#0d1d6e] py-1.5 px-2 rounded-lg hover:bg-gray-50 transition-colors leading-snug`}
              >
                {s.title}
              </a>
            ))}
          </div>

          {/* Quick contact */}
          <div className="border border-gray-100 rounded-xl p-5 flex flex-col gap-3 mt-2">
            <p className={`${fontScale.label} font-semibold uppercase tracking-[0.18em] text-gray-400`}>
              {t.quickContact}
            </p>
            <a href="tel:04343239923" className={`flex items-center gap-2.5 ${fontScale.label} text-gray-500 hover:text-[#0d1d6e] transition-colors`}>
              <span className="material-symbols-outlined text-[#ff9800]" style={{ fontSize: "16px" }}>call</span>
              04343-239923
            </a>
            {/* <a href="mailto:contact@jpneuro.com" className={`flex items-center gap-2.5 ${fontScale.label} text-gray-500 hover:text-[#0d1d6e] transition-colors`}>
              <span className="material-symbols-outlined text-[#ff9800]" style={{ fontSize: "16px" }}>mail</span>
              contact@jpneuro.com
            </a> */}
            <Link
              to="/contact-us"
              className={`mt-1 text-center ${fontScale.label} font-semibold text-white bg-[#0d1d6e] hover:bg-[#142588] rounded-lg py-2 px-3 transition-colors`}
            >
              {t.contactUsBtn}
            </Link>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0 flex flex-col gap-10">

          {/* Mobile notice */}
          <div className="lg:hidden bg-[#0d1d6e]/[0.04] border border-[#0d1d6e]/10 rounded-xl p-4 flex gap-3 items-start">
            <span className="material-symbols-outlined text-[#0d1d6e] shrink-0 mt-0.5" style={{ fontSize: "18px" }}>info</span>
            <p className={`${fontScale.body} text-[#0d1d6e]/70 leading-relaxed`}>
              {t.sidebarNotice}
            </p>
          </div>

          {/* Policy sections */}
          {t.sections.map((section) => (
            <div key={section.id} id={section.id} className="flex flex-col gap-5 scroll-mt-6">
              <div className="flex items-center gap-4">
                <h2 className={`${fontScale.subheading} font-manrope font-bold text-[#0d1d6e]`}>
                  {section.title}
                </h2>
                <div className="flex-1 h-px bg-gray-100" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {section.content.map((item) => (
                  <div
                    key={item.subtitle}
                    className="bg-gray-50 rounded-xl p-5 flex flex-col gap-2"
                  >
                    <h3 className={`${fontScale.body} font-semibold text-gray-800`}>
                      {item.subtitle}
                    </h3>
                    <p className={`${fontScale.label} text-gray-500 leading-[1.85]`}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Contact block */}
              {section.contact && (
                <div className="bg-[#0d1d6e] rounded-xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-5 mt-2">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#ff9800] shrink-0 mt-0.5" style={{ fontSize: "18px" }}>location_on</span>
                    <p className={`${fontScale.label} text-white/70 leading-relaxed`}>
                      9/1 Colony, West Link Road (35A),<br />
                      Co-operative Colony,<br />
                      Krishnagiri – 635 001, TN
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#ff9800] shrink-0" style={{ fontSize: "18px" }}>call</span>
                    <a href="tel:04343239923" className={`${fontScale.label} text-white/70 hover:text-white transition-colors`}>
                      04343-239923
                    </a>
                  </div>
                  {/* <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#ff9800] shrink-0" style={{ fontSize: "18px" }}>mail</span>
                    <a href="mailto:contact@jpneuro.com" className={`${fontScale.label} text-white/70 hover:text-white transition-colors`}>
                      contact@jpneuro.com
                    </a>
                  </div> */}
                </div>
              )}
            </div>
          ))}

          {/* Back link */}
          <div className="pt-4 border-t border-gray-100">
            <Link
              to="/"
              className={`inline-flex items-center gap-2 ${fontScale.body} font-medium text-[#0d1d6e] hover:text-[#ff9800] transition-colors`}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>arrow_back</span>
              {t.backHome}
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
