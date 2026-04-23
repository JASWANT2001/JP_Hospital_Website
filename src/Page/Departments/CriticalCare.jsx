import { useLang, criticalCareTranslations } from "../../context/LanguageContext";
import AppointmentBanner from "./AppointmentBanner";

export default function CriticalCare() {
  const { lang } = useLang();
  const t = criticalCareTranslations[lang];

  return (
    <div className="bg-surface font-body text-on-surface">
      {/* Hero */}
      <header className="relative pt-28 sm:pt-32 pb-14 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Critical care department"
            className="w-full h-full object-cover"
            src="https://ik.imagekit.io/glvwzrukg/JP%20Webiste/critical%20care%20dept%20page.jpg"
            style={{ objectPosition: 'center 35%' }}
          />
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-orange-500 font-bold tracking-widest uppercase text-xs">
              {t.hero.eyebrow}
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-primary mt-2 mb-4 sm:mb-6 tracking-tight"
              style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 800 }}
            >
              {t.hero.heading}
            </h1>
            <p className="text-sm sm:text-base text-on-surface-variant mb-8 sm:mb-10 leading-relaxed font-light">
              {t.hero.body}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href="tel:04343239923"
                className="border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-primary/5 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span className="material-symbols-outlined">call</span>
                {t.hero.call}
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Service Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 gap-4 sm:gap-5">
            {t.services.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 sm:gap-5 p-5 sm:p-6 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10"
              >
                <div className={`${item.iconBg} p-3 rounded-xl h-fit flex-shrink-0`}>
                  <span className={`material-symbols-outlined ${item.iconColor} text-2xl`}>
                    {item.icon}
                  </span>
                </div>
                <div>
                  <h4
                    className="text-xl sm:text-2xl mb-1"
                    style={{ fontFamily: "'Host Grotesk', sans-serif", fontWeight: 400 }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-5">
            {/* At-a-glance stats */}
            <div className="bg-primary/5 border border-primary/15 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-primary mb-5 tracking-wide uppercase text-xs">
                {t.sidebar.glanceTitle}
              </h3>
              <ul className="space-y-4">
                {t.sidebar.stats.map(({ icon, label, value }) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-xl bg-primary/10 p-2 rounded-lg">
                      {icon}
                    </span>
                    <div>
                      <p className="text-xs text-on-surface-variant leading-none mb-0.5">{label}</p>
                      <p className="text-sm font-semibold text-on-surface">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Emergency contact card */}
            <div className="bg-error/8 border border-error/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-error text-2xl">emergency</span>
                <h3 className="text-error font-bold text-sm uppercase tracking-widest">
                  {t.sidebar.emergencyTitle}
                </h3>
              </div>
              <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
                {t.sidebar.emergencyBody}
              </p>
              <a
                href="tel:04343239923"
                className="flex items-center justify-center gap-2 w-full bg-error text-white py-3 rounded-xl font-bold text-sm hover:brightness-90 transition-all"
              >
                <span className="material-symbols-outlined text-xl">call</span>
                0434 323 9923
              </a>
            </div>

            {/* Why Our ICU */}
            <div className="bg-surface-container-lowest border border-outline-variant/15 rounded-2xl p-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">
                {t.sidebar.whyTitle}
              </h3>
              <ul className="space-y-3 text-sm text-on-surface">
                {t.sidebar.whyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary text-base mt-0.5">
                      check_circle
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <AppointmentBanner />
      </main>
    </div>
  );
}
