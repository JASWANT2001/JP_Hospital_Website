import { Link } from 'react-router-dom';
import { useLang, aboutTranslations } from '../context/LanguageContext';

const FontStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@800&family=Host+Grotesk:wght@400&display=swap');
    .font-heading    { font-family: 'Raleway', sans-serif;      font-weight: 800; }
    .font-subheading { font-family: 'Host Grotesk', sans-serif; font-weight: 400; }
  `}</style>
);

// ─── Hero Section ────────────────────────────────────────────────────────────
function HeroSection({ t }) {
  return (
    <section className="relative overflow-hidden lg:min-h-screen lg:flex lg:items-stretch">

      {/* ── Mobile image banner (hidden on lg+) ── */}
      <div className="relative block lg:hidden w-full h-96 sm:h-[460px] -mt-20 sm:-mt-24">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB51NW5dOii2daegXTXX9Hn6W4MopXwHQp3VI9NyxupsOTme8i4bIR5tgI2HXwy3jryDuT03Tcb6btoArK_U30_A_hF-o1Ywbtz2W6H9cTgA1FQ27NQ-qeL7WrOQVGqlL5Gf2ATig8O9eaafk0kUusJvZzysJzzOCuYdO-_KkRbgMEj70p6PVAaXR82mqtB9MfA2qXxfd77-i7vqcP6JBlCPXVB-e55IYgdXNhf9sM8_szaEkifxvdqBncVJM_42XfbqCZXZOazHCE"
          alt="Hospital"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl shadow border-l-4 border-secondary">
          <p className="text-primary font-semibold text-xs italic">{t.quote}</p>
        </div>
      </div>

      {/* ── Desktop: two-column grid ── */}
      <div className="w-full lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-20">

        {/* Left Content */}
        <div className="px-6 sm:px-10 lg:px-16 xl:px-24 pt-8 pb-10 lg:py-20 lg:flex lg:flex-col lg:justify-center lg:min-h-screen">
          <div className="space-y-5 lg:space-y-8 max-w-2xl">
            <span className="inline-block px-3 py-1 bg-primary-fixed text-on-primary-fixed text-[10px] font-bold tracking-widest rounded-full">
              {t.eyebrow}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-primary leading-tight">
              {t.heading}
            </h1>
            <div className="space-y-4 text-sm sm:text-base text-on-surface-variant leading-relaxed">
              <p>{t.body1}</p>
              <p>{t.body2}</p>
            </div>
          </div>
        </div>

        {/* Right Image (desktop only) */}
        <div className="relative hidden lg:block w-full h-[70vh] self-center pr-10">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB51NW5dOii2daegXTXX9Hn6W4MopXwHQp3VI9NyxupsOTme8i4bIR5tgI2HXwy3jryDuT03Tcb6btoArK_U30_A_hF-o1Ywbtz2W6H9cTgA1FQ27NQ-qeL7WrOQVGqlL5Gf2ATig8O9eaafk0kUusJvZzysJzzOCuYdO-_KkRbgMEj70p6PVAaXR82mqtB9MfA2qXxfd77-i7vqcP6JBlCPXVB-e55IYgdXNhf9sM8_szaEkifxvdqBncVJM_42XfbqCZXZOazHCE"
            alt="Hospital"
            className="w-full h-full object-cover rounded-l-2xl"
          />
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border-l-4 border-secondary max-w-xs">
            <p className="text-primary font-semibold text-sm italic mb-1">{t.quote}</p>
            <p className="text-xs text-gray-600">{t.quoteCaption}</p>
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── Vision & Mission Section ─────────────────────────────────────────────────
function VisionMissionSection({ t }) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-surface-container-low">
      <div className="container mx-auto">
        {/* Stats Banner */}
        <div className="mb-6 bg-primary p-7 sm:p-10 rounded-xl flex items-center justify-between text-on-primary relative overflow-hidden">
          <div className="z-10">
            <p className="font-heading text-2xl sm:text-3xl lg:text-4xl text-primary-fixed font-extrabold">{t.statsLabel}</p>
          </div>
          <div className="hidden sm:block z-10">
            <span className="material-symbols-outlined text-4xl sm:text-5xl opacity-50">clinical_notes</span>
          </div>
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <span className="material-symbols-outlined text-[120px] sm:text-[150px]">medical_services</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vision */}
          <div className="bg-surface-container-lowest p-8 sm:p-10 lg:p-12 rounded-xl flex flex-col justify-between">
            <span className="material-symbols-outlined text-secondary text-4xl sm:text-5xl mb-5 lg:mb-6">visibility</span>
            <div className="flex-grow flex flex-col justify-center">
              <h2 className="font-subheading text-xl sm:text-2xl font-black text-primary mb-6 lg:mb-8 drop-shadow-[1px_0_0] drop-shadow-[-1px_0_0] drop-shadow-[0_1px_0] drop-shadow-[0_-1px_0]">
                {t.visionTitle}
              </h2>
              <p className="font-heading text-2xl sm:text-3xl lg:text-4xl text-primary leading-snug">{t.visionBody}</p>
            </div>
          </div>

          {/* Mission */}
          <div
            className="p-8 sm:p-10 lg:p-12 rounded-xl text-on-primary"
            style={{ background: 'linear-gradient(135deg, #142588 0%, #303f9f 100%)' }}
          >
            <h2 className="font-subheading text-xl sm:text-2xl font-black text-white mb-6 lg:mb-8">
              {t.missionTitle}
            </h2>
            <div className="space-y-5 lg:space-y-6">
              {t.missionItems.map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <span className="bg-white/20 p-2 rounded-lg material-symbols-outlined shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold mb-1">{item.title}</h4>
                    <p className="text-on-primary-container text-sm sm:text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Leadership Section ───────────────────────────────────────────────────────
function LeadershipSection({ t }) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-primary mb-4">{t.heading}</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-sm sm:text-base">{t.sub}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {t.leaders.map((leader) => (
            <div key={leader.name} className="group">
              <div className="aspect-[3/4] rounded-xl bg-surface-container-high mb-6 lg:mb-8 overflow-hidden relative">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-[80%_top]"
                />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-6 bg-surface-container-lowest/90 backdrop-blur rounded-lg">
                  <h3 className="font-subheading text-xl sm:text-2xl text-primary">{leader.name}</h3>
                  <p className="text-secondary font-semibold text-sm sm:text-base">{leader.role}</p>
                </div>
              </div>
              <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Accreditations Section ───────────────────────────────────────────────────
function AccreditationsSection({ t }) {
  return (
    <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-surface-container-low">
      <div className="max-w-2xl mx-auto">
        <div className="bg-surface rounded-2xl shadow-md border border-outline-variant/20 px-8 py-8 sm:px-12 sm:py-10 text-center">
          <div className="flex justify-center mb-4">
            {/* <span className="material-symbols-outlined text-4xl text-secondary">verified_user</span> */}
          </div>
          <h2 className="font-subheading text-2xl sm:text-3xl text-primary mb-3">{t.eyebrow}</h2>
          <div className="w-10 h-0.5 bg-secondary/40 mx-auto mb-4" />
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">{t.body}</p>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ─────────────────────────────────────────────────────────────
function CTASection({ t }) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-primary mb-5 lg:mb-6">{t.heading}</h2>
        <p className="text-on-surface-variant text-sm sm:text-base mb-8 lg:mb-10">{t.body}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/emergency"
            className="bg-tertiary-fixed text-on-tertiary-fixed px-6 sm:px-8 py-3 sm:py-4 rounded-md font-bold hover:bg-tertiary-fixed-dim transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <span className="material-symbols-outlined text-lg">call</span>
            {t.emergency}
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── About Us Page ────────────────────────────────────────────────────────────
export default function AboutUs() {
  const { lang } = useLang();
  const t = aboutTranslations[lang];

  return (
    <main className="pt-20 sm:pt-24 bg-surface text-on-surface font-body">
      <FontStyle />
      <HeroSection t={t.hero} />
      <VisionMissionSection t={t.visionMission} />
      <LeadershipSection t={t.leadership} />
      <AccreditationsSection t={t.accreditation} />
      <CTASection t={t.cta} />
    </main>
  );
}
