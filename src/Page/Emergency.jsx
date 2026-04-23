import { useLang, emergencyTranslations } from '../context/LanguageContext';

export default function Emergency() {
  const { lang } = useLang();
  const t = emergencyTranslations[lang];

  // static data that never changes language (phone numbers, hrefs, icons, colours)
  const stripHrefs = [
    'tel:04343239923',
    'https://maps.google.com/?q=JP+Neuro+Spine+Hospital+Krishnagiri',
    '/patient-services',
  ];
  const stripIcons  = ['call', 'location_on', 'medical_services'];
  const stripColors = ['text-tertiary-fixed', 'text-tertiary-fixed', 'text-secondary-container'];

  const channelsMeta = [
    { icon: 'call',          href: 'tel:04343239923',                                                   gradient: 'from-error/10 to-error/5',           border: 'border-error/20',     iconBg: 'bg-error',     iconColor: 'text-white' },
    { icon: 'location_on',   href: 'https://maps.google.com/?q=JP+Neuro+Spine+Hospital+Krishnagiri',   gradient: 'from-primary/10 to-primary/5',        border: 'border-primary/20',   iconBg: 'bg-primary',   iconColor: 'text-white' },
    { icon: 'medical_services', href: '/patient-services',                                              gradient: 'from-primary/10 to-primary/5',        border: 'border-primary/20',   iconBg: 'bg-primary',   iconColor: 'text-white' },
    { icon: 'calendar_month',   href: '/book-appoinment',                                               gradient: 'from-secondary/10 to-secondary/5',    border: 'border-secondary/20', iconBg: 'bg-secondary', iconColor: 'text-white' },
  ];

  const icuStatIcons = ['schedule', 'bed', 'group', 'local_hospital'];

  return (
    <div className="bg-surface font-body text-on-surface">

      {/* ── Google Fonts ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@800&family=Host+Grotesk:wght@400&display=swap');
        .font-raleway   { font-family: 'Raleway', sans-serif; font-weight: 800; }
        .font-host      { font-family: 'Host Grotesk', sans-serif; font-weight: 400; }
      `}</style>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE1Daj7gT2gx7ZOEk4j5gUHs8NN3mJ2fZYbCdahnN9u0eTnV1rejac8YkEFYEcZ8OzTnqwMgu1PF1j8MZ4lUkEqrXGkAujqGWGHab9LTDfFqPbAlAnuq0HYln5-qZvASBE7O8D1xhIyRXmmoz2oKBLLvVcldueq65lNKqWXCCUALnHJ1wyahs4W804o1lvuZyHCCEqHtDA1NPj-tdXq2ckiu8SH9ge539haPWRXdrGP0C6GALqpVlVQkkayKlzFR7GnDNYJdkkC38"
            alt="Emergency trauma center"
          />
          <div className="absolute inset-0 opacity-95" style={{ background: "linear-gradient(135deg, #06155F 0%, #142588 50%, #1a237e 100%)" }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-4xl">
            {/* label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/20 border border-error/40 text-white font-semibold text-xs tracking-wider uppercase mb-6 sm:mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-error" />
              </span>
              {t.hero.badge}
            </div>

            {/* hero heading */}
            <h1 className="font-raleway text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-5 sm:mb-6">
              {t.hero.line1}<br />
              {t.hero.line2}<br />
              <span className="text-tertiary-fixed">{t.hero.line3}</span>
            </h1>

            {/* body */}
            <p className="text-white/70 text-sm sm:text-base max-w-xl font-medium leading-relaxed mb-8 sm:mb-12">
              {t.hero.body}
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="tel:04343239923"
                className="group flex items-center gap-3 sm:gap-4 bg-white hover:bg-tertiary-fixed transition-all duration-300 rounded-2xl p-2 pr-5 sm:pr-6 w-full sm:w-fit"
              >
                <div className="bg-error p-3 sm:p-4 rounded-xl text-white flex-shrink-0">
                  <span className="material-symbols-outlined text-xl sm:text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                </div>
                <div>
                  <p className="text-xs text-outline font-bold uppercase tracking-widest">{t.hero.callLabel}</p>
                  <p className="font-raleway text-xl sm:text-2xl text-primary">04343-239923</p>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=JP+Neuro+Spine+Hospital+Krishnagiri"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 sm:gap-4 bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 rounded-2xl p-2 pr-5 sm:pr-6 w-full sm:w-fit"
              >
                <div className="bg-primary p-3 sm:p-4 rounded-xl text-white flex-shrink-0">
                  <span className="material-symbols-outlined text-xl sm:text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>navigation</span>
                </div>
                <div>
                  <p className="text-xs text-white/50 font-bold uppercase tracking-widest">{t.hero.directionsLabel}</p>
                  <p className="font-raleway text-xl sm:text-2xl text-white">Krishnagiri, TN</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 z-10">
          <span className="text-xs font-bold uppercase tracking-widest hidden sm:block">{t.hero.scrollHint}</span>
          <span className="material-symbols-outlined animate-bounce text-lg">keyboard_arrow_down</span>
        </div>
      </section>

      {/* ── Instant Contact Strip ── */}
      <section className="bg-primary py-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {t.strip.map(({ label, value, sub }, i) => (
              <a
                key={label}
                href={stripHrefs[i]}
                target={stripHrefs[i].startsWith('http') ? '_blank' : undefined}
                rel={stripHrefs[i].startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 sm:gap-5 px-5 sm:px-8 py-5 sm:py-6 hover:bg-white/5 transition-colors group"
              >
                <span className={`material-symbols-outlined text-2xl sm:text-3xl ${stripColors[i]}`} style={{ fontVariationSettings: "'FILL' 1" }}>{stripIcons[i]}</span>
                <div className="min-w-0">
                  <p className="text-white/50 text-xs font-bold uppercase tracking-widest">{label}</p>
                  <p className="text-white font-bold text-sm sm:text-base group-hover:underline truncate">{value}</p>
                  <p className="text-white/40 text-xs mt-0.5">{sub}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── All Contact Channels ── */}
      <section className="py-14 sm:py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">{t.channels.eyebrow}</span>
            <h2 className="font-raleway text-3xl sm:text-4xl lg:text-5xl text-on-surface">{t.channels.heading}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {t.channels.cards.map(({ title, detail, sub }, i) => {
              const { icon, href, gradient, border, iconBg, iconColor } = channelsMeta[i];
              return (
                <a
                  key={title}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group flex flex-col gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl bg-gradient-to-br ${gradient} border ${border} hover:shadow-lg transition-all`}
                >
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${iconBg} flex items-center justify-center`}>
                    <span className={`material-symbols-outlined text-lg sm:text-xl ${iconColor}`} style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">{title}</p>
                    <p className={`font-host font-bold text-on-surface group-hover:underline break-all ${i === 1 ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'}`}>{detail}</p>
                    <p className="text-xs text-on-surface-variant mt-1">{sub}</p>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant/30 group-hover:text-primary group-hover:translate-x-1 transition-all self-end">arrow_forward</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 24/7 Critical Services ── */}
      <section className="py-14 sm:py-20 bg-surface-container-low">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">{t.critical.eyebrow}</span>
            <h2 className="font-raleway text-3xl sm:text-4xl lg:text-5xl text-on-surface">{t.critical.heading}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 sm:gap-5">
            {/* Trauma Care */}
            <div className="sm:col-span-2 md:col-span-8 group relative overflow-hidden rounded-2xl bg-white p-6 sm:p-8 flex flex-col justify-between min-h-[220px] sm:min-h-[280px] border border-outline-variant/10 hover:border-primary/20 hover:shadow-lg transition-all">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-error/10 flex items-center justify-center mb-4 sm:mb-5">
                  <span className="material-symbols-outlined text-xl sm:text-2xl text-error" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
                </div>
                <h3 className="font-host text-xl sm:text-2xl text-on-surface mb-2">{t.critical.trauma.title}</h3>
                <p className="text-on-surface-variant max-w-md text-sm sm:text-base leading-relaxed">
                  {t.critical.trauma.body}
                </p>
              </div>
              <div className="mt-5 sm:mt-6 flex gap-2 flex-wrap">
                {t.critical.trauma.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-error/10 text-error text-xs font-bold first:bg-error/10 first:text-error [&:nth-child(2)]:bg-primary-fixed [&:nth-child(2)]:text-on-primary-fixed-variant [&:nth-child(3)]:bg-secondary-container [&:nth-child(3)]:text-on-secondary-container">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Pharmacy */}
            <div className="md:col-span-4 bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-center items-center text-center border border-outline-variant/10 border-b-4 border-b-tertiary hover:shadow-lg transition-all">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-tertiary/10 flex items-center justify-center mb-3 sm:mb-4">
                <span className="material-symbols-outlined text-2xl sm:text-3xl text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>medication</span>
              </div>
              <h3 className="font-host text-xl sm:text-2xl text-on-surface">{t.critical.pharmacy.title}</h3>
              <p className="text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">{t.critical.pharmacy.body}</p>
            </div>

            {/* Stroke Care */}
            <div className="md:col-span-4 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[220px] sm:min-h-[280px] shadow-xl" style={{ background: "linear-gradient(135deg, #06155F 0%, #142588 60%, #2E7FEA 100%)" }}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-xl sm:text-2xl text-tertiary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>neurology</span>
              </div>
              <div>
                <h3 className="font-host text-xl sm:text-2xl text-white mb-2">{t.critical.stroke.title}</h3>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed">{t.critical.stroke.body}</p>
              </div>
              <a href="tel:04343239923" className="mt-4 text-tertiary-fixed font-bold text-sm sm:text-base flex items-center gap-2 group w-fit">
                {t.critical.stroke.cta}
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-base">chevron_right</span>
              </a>
            </div>

            {/* Specialized Neuro ICU */}
            <div className="sm:col-span-2 md:col-span-8 group rounded-2xl bg-white p-6 sm:p-8 flex flex-col justify-between border border-outline-variant/10 hover:border-primary/20 hover:shadow-lg transition-all">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-5">
                  <span className="material-symbols-outlined text-xl sm:text-2xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>monitor_heart</span>
                </div>
                <h3 className="font-host text-xl sm:text-2xl text-on-surface mb-2">{t.critical.icu.title}</h3>
                <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed w-full">
                  {t.critical.icu.body}
                </p>
              </div>
              <div className="mt-5 sm:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {t.critical.icu.stats.map(({ label, value }, i) => (
                  <div key={label} className="flex flex-col items-center text-center bg-primary/5 border border-primary/10 rounded-xl px-3 py-3 gap-1">
                    <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>{icuStatIcons[i]}</span>
                    <span className="text-xs font-black text-primary">{value}</span>
                    <span className="text-[10px] text-on-surface-variant uppercase tracking-wide">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How to Reach Us ── */}
      <section className="py-14 sm:py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-8 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">{t.reach.eyebrow}</span>
            <h2 className="font-raleway text-3xl sm:text-4xl lg:text-5xl text-on-surface">{t.reach.heading}</h2>
            <p className="text-on-surface-variant mt-2 max-w-xl text-sm sm:text-base">{t.reach.body}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 mb-5 sm:mb-6">

            {/* Address Card */}
            <div className="bg-surface-container-low rounded-2xl p-5 sm:p-7 border border-outline-variant/10 shadow-sm flex flex-col gap-4 sm:gap-5">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary-fixed/40 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              </div>
              <div>
                <p className="font-host text-primary mb-2 text-sm sm:text-base">{t.reach.addressLabel}</p>
                <address className="not-italic text-on-surface-variant leading-relaxed text-sm sm:text-base">
                  9/1, West Link Road, Co-operative Colony,<br />
                  via K Theatre Road, Near ICICI Bank,<br />
                  Krishnagiri-635001, Tamilnadu
                </address>
              </div>
              <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-outline-variant/10">
                <a
                  href="https://maps.google.com/?q=JP+Neuro+Spine+Hospital+Krishnagiri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-primary text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base hover:bg-on-primary-fixed-variant transition-all"
                >
                  <span className="material-symbols-outlined text-base">navigation</span>
                  {t.reach.mapsBtn}
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-2 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl h-64 sm:h-full min-h-[280px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13164.262211032852!2d78.20611548466795!3d12.517063073760358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac35c0e9566689%3A0x7b40cb9bac1a085f!2sJP%20NEURO%20SPINE%20HOSPITAL%20AND%20PAIN%20MANAGEMENT%20CENTRE!5e0!3m2!1sen!2sin!4v1775148501831!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JP Neuro Spine Hospital and Pain Management Centre Hospital Location"
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
