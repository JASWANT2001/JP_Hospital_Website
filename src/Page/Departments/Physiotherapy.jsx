import { useLang, physiotherapyTranslations } from "../../context/LanguageContext";
import AppointmentBanner from "./AppointmentBanner";

export default function Physiotherapy() {
  const { lang } = useLang();
  const t = physiotherapyTranslations[lang];

  return (
    <div className="bg-surface font-body text-on-surface">
      {/* Hero */}
      <header className="relative pt-28 sm:pt-32 pb-14 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Physiotherapy department"
            className="w-full h-full object-cover"
            src="https://ik.imagekit.io/glvwzrukg/JP%20Webiste/physio%20dept.jpeg"
            style={{ objectPosition: 'center 10%' }}
          />
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex justify-start lg:justify-end">
          <div className="w-full lg:max-w-xl">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {t.services.map((item) => (
            <div
              key={item.title}
              className="p-5 sm:p-6 rounded-xl bg-white border border-outline-variant/10 shadow-sm flex flex-col gap-3"
            >
              <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
              <h4
                className="text-xl sm:text-2xl text-primary"
                style={{ fontFamily: "'Host Grotesk', sans-serif", fontWeight: 400 }}
              >
                {item.title}
              </h4>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <AppointmentBanner />
      </main>
    </div>
  );
}
