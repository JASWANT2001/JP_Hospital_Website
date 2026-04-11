import { useLang, appointmentBannerTranslations } from '../../context/LanguageContext';

export default function AppointmentBanner() {
  const { lang } = useLang();
  const t = appointmentBannerTranslations[lang];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 mb-16 sm:mb-20 lg:mb-28">
      <div
        className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
        style={{ background: "linear-gradient(135deg, #06155F 0%, #142588 50%, #2E7FEA 100%)" }}
      >
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-10" style={{ background: "#2E7FEA" }} />
        <div className="absolute -bottom-20 -left-10 w-64 h-64 rounded-full opacity-10" style={{ background: "#F66749" }} />

        <div className="relative z-10 px-6 sm:px-10 py-12 sm:py-16 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left space-y-3 sm:space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/10 text-white/80">
              {t.eyebrow}
            </span>
            <h3 className="font-headline text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight">
              {t.heading}
            </h3>
            <p className="text-white/70 text-sm sm:text-lg leading-relaxed">
              {t.body}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-shrink-0 w-full md:w-auto">
            <a
              href="tel:04343239923"
              className="border-2 border-white/40 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-base">call</span>
              {t.call}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
