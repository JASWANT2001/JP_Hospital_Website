import { useLang, appointmentBannerTranslations } from '../../context/LanguageContext';
import InstagramFollow from '../../Component/InstagramFollow';

export default function AppointmentBanner({ instagram }) {
  const { lang } = useLang();
  const t = appointmentBannerTranslations[lang];

  const callButton = (
    <a
      href="tel:04343239923"
      className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-6 sm:px-7 py-3 rounded-xl font-bold text-sm sm:text-base hover:bg-white/10 hover:border-white/70 transition-all whitespace-nowrap"
    >
      <span className="material-symbols-outlined text-base">call</span>
      {t.call}
    </a>
  );

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12 mb-12 sm:mb-16 lg:mb-20">
      <div
        className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
        style={{ background: "linear-gradient(135deg, #06155F 0%, #142588 50%, #2E7FEA 100%)" }}
      >
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-10" style={{ background: "#2E7FEA" }} />
        <div className="absolute -bottom-16 -left-10 w-48 h-48 rounded-full opacity-10" style={{ background: "#F66749" }} />

        {instagram ? (
          /* Split layout — headline on the left, Instagram on the right */
          <div className="relative z-10 px-6 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] items-center gap-8 lg:gap-12">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-xl mx-auto lg:mx-0">
              <span className="inline-block text-[0.68rem] sm:text-xs font-bold uppercase tracking-[0.18em] px-4 py-1 rounded-full bg-white/10 text-white/80 ring-1 ring-white/15">
                {t.eyebrow}
              </span>
              <h3 className="mt-4 font-headline text-[1.6rem] sm:text-3xl font-extrabold text-white leading-[1.15] tracking-tight text-balance lg:whitespace-nowrap lg:text-[clamp(1.1rem,2vw,1.75rem)]">
                {t.heading}
              </h3>
              <p className="mt-3 text-white/70 text-sm sm:text-[0.95rem] leading-[1.7] max-w-md">
                {t.body}
              </p>
              <div className="mt-6 w-full flex justify-center lg:justify-start">{callButton}</div>
            </div>

            <div className="w-full">
              <InstagramFollow only={instagram} />
            </div>
          </div>
        ) : (
          /* Full-width layout — headline left, call button right */
          <div className="relative z-10 px-6 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-10 flex flex-col items-center md:flex-row md:items-center justify-between gap-6 md:gap-10">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <span className="inline-block text-[0.68rem] sm:text-xs font-bold uppercase tracking-[0.18em] px-4 py-1 rounded-full bg-white/10 text-white/80 ring-1 ring-white/15">
                {t.eyebrow}
              </span>
              <h3 className="mt-4 font-headline text-[1.6rem] sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.15] tracking-tight">
                {t.heading}
              </h3>
              <p className="mt-3 text-white/70 text-sm sm:text-[0.95rem] leading-[1.7] max-w-2xl">
                {t.body}
              </p>
            </div>

            <div className="shrink-0 w-full md:w-auto flex justify-center md:justify-end">{callButton}</div>
          </div>
        )}
      </div>
    </section>
  );
}
