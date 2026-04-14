export default function Emergency() {
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
              Emergency Response — Active 24 / 7
            </div>

            {/* hero heading — Raleway ExtraBold */}
            <h1 className="font-raleway text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-5 sm:mb-6">
              Immediate<br />
              Neurological<br />
              <span className="text-tertiary-fixed">Response.</span>
            </h1>

            {/* body */}
            <p className="text-white/70 text-sm sm:text-base max-w-xl font-medium leading-relaxed mb-8 sm:mb-12">
              Every second counts in neuro-trauma. Our rapid response team is on standby around the clock for acute stroke, spinal emergencies, and critical head injuries.
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
                  <p className="text-xs text-outline font-bold uppercase tracking-widest">Call Emergency</p>
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
                  <p className="text-xs text-white/50 font-bold uppercase tracking-widest">Get Directions</p>
                  <p className="font-raleway text-xl sm:text-2xl text-white">Krishnagiri, TN</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 z-10">
          <span className="text-xs font-bold uppercase tracking-widest hidden sm:block">Scroll for details</span>
          <span className="material-symbols-outlined animate-bounce text-lg">keyboard_arrow_down</span>
        </div>
      </section>

      {/* ── Instant Contact Strip ── */}
      <section className="bg-primary py-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {[
              { icon: "call",  label: "Main Hospital Line",  value: "04343-239923",         sub: "Available 24/7",     href: "tel:04343239923",             color: "text-tertiary-fixed"        },
              { icon: "location_on", label: "Hospital Address", value: "West Link Road (35A)", sub: "Krishnagiri – 635001, TN", href: "https://maps.google.com/?q=JP+Neuro+Spine+Hospital+Krishnagiri", color: "text-tertiary-fixed" },
              { icon: "mail",  label: "Email Support",       value: "info@jpneurospine.com", sub: "Non-urgent queries", href: "mailto:info@jpneurospine.com", color: "text-secondary-container" },
            ].map(({ icon, label, value, sub, href, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 sm:gap-5 px-5 sm:px-8 py-5 sm:py-6 hover:bg-white/5 transition-colors group"
              >
                <span className={`material-symbols-outlined text-2xl sm:text-3xl ${color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
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

      {/* ── All Contact Methods ── */}
      <section className="py-14 sm:py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Reach Out</span>
            {/* heading — Raleway ExtraBold */}
            <h2 className="font-raleway text-3xl sm:text-4xl lg:text-5xl text-on-surface">All Contact Channels</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              { icon: "call",          title: "Emergency Hotline", detail: "04343-239923",            sub: "24 / 7 — Trauma & Critical", href: "tel:04343239923",                  gradient: "from-error/10 to-error/5",           border: "border-error/20",     iconBg: "bg-error",     iconColor: "text-white" },
              { icon: "location_on",   title: "Visit Us",          detail: "West Link Road (35A)",     sub: "Krishnagiri – 635001, TN",   href: "https://maps.google.com/?q=JP+Neuro+Spine+Hospital+Krishnagiri", gradient: "from-primary/10 to-primary/5",     border: "border-primary/20",   iconBg: "bg-primary",   iconColor: "text-white" },
              { icon: "mail",          title: "General Email",     detail: "info@jpneurospine.com",    sub: "Appointments & queries",     href: "mailto:info@jpneurospine.com",      gradient: "from-primary/10 to-primary/5",      border: "border-primary/20",   iconBg: "bg-primary",   iconColor: "text-white" },
              { icon: "support_agent", title: "Support Email",     detail: "support@jpneurospine.com", sub: "Patient support",            href: "mailto:support@jpneurospine.com",   gradient: "from-secondary/10 to-secondary/5", border: "border-secondary/20", iconBg: "bg-secondary", iconColor: "text-white" },
            ].map(({ icon, title, detail, sub, href, gradient, border, iconBg, iconColor }) => (
              <a
                key={title}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group flex flex-col gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl bg-gradient-to-br ${gradient} border ${border} hover:shadow-lg transition-all`}
              >
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${iconBg} flex items-center justify-center`}>
                  <span className={`material-symbols-outlined text-lg sm:text-xl ${iconColor}`} style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">{title}</p>
                  <p className="font-host font-bold text-on-surface text-sm sm:text-base group-hover:underline break-all">{detail}</p>
                  <p className="text-xs text-on-surface-variant mt-1">{sub}</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant/30 group-hover:text-primary group-hover:translate-x-1 transition-all self-end">arrow_forward</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 24/7 Critical Services ── */}
      <section className="py-14 sm:py-20 bg-surface-container-low">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Always On</span>
            {/* heading — Raleway ExtraBold */}
            <h2 className="font-raleway text-3xl sm:text-4xl lg:text-5xl text-on-surface">24/7 Critical Services</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 sm:gap-5">
            {/* Trauma Care */}
            <div className="sm:col-span-2 md:col-span-8 group relative overflow-hidden rounded-2xl bg-white p-6 sm:p-8 flex flex-col justify-between min-h-[220px] sm:min-h-[280px] border border-outline-variant/10 hover:border-primary/20 hover:shadow-lg transition-all">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-error/10 flex items-center justify-center mb-4 sm:mb-5">
                  <span className="material-symbols-outlined text-xl sm:text-2xl text-error" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
                </div>
                {/* subheading — Host Grotesk Regular */}
                <h3 className="font-host text-xl sm:text-2xl text-on-surface mb-2">24h Emergency Trauma Care & ICU</h3>
                {/* body */}
                <p className="text-on-surface-variant max-w-md text-sm sm:text-base leading-relaxed">
                  Level-1 neuro-trauma stabilization and advanced intensive care monitoring with dedicated neuro-intensivists on call at all times.
                </p>
              </div>
              <div className="mt-5 sm:mt-6 flex gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-error/10 text-error text-xs font-bold">Always Open</span>
                <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-xs font-bold">Immediate Triage</span>
                <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold">Neuro-ICU</span>
              </div>
            </div>

            {/* Pharmacy */}
            <div className="md:col-span-4 bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-center items-center text-center border border-outline-variant/10 border-b-4 border-b-tertiary hover:shadow-lg transition-all">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-tertiary/10 flex items-center justify-center mb-3 sm:mb-4">
                <span className="material-symbols-outlined text-2xl sm:text-3xl text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>medication</span>
              </div>
              {/* subheading — Host Grotesk Regular */}
              <h3 className="font-host text-xl sm:text-2xl text-on-surface">24-hour Pharmacy</h3>
              <p className="text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">Critical care medications and life-saving neurological drugs always in stock.</p>
            </div>

            {/* Stroke Care */}
            <div className="md:col-span-4 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[220px] sm:min-h-[280px] shadow-xl" style={{ background: "linear-gradient(135deg, #06155F 0%, #142588 60%, #2E7FEA 100%)" }}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-xl sm:text-2xl text-tertiary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>neurology</span>
              </div>
              <div>
                {/* subheading — Host Grotesk Regular */}
                <h3 className="font-host text-xl sm:text-2xl text-white mb-2">Acute Stroke Care</h3>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed">Rapid thrombolysis and endovascular intervention for ischemic events within the golden hour.</p>
              </div>
              <a href="tel:04343239923" className="mt-4 text-tertiary-fixed font-bold text-sm sm:text-base flex items-center gap-2 group w-fit">
                Call Now
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-base">chevron_right</span>
              </a>
            </div>

            {/* Specialized Neuro ICU */}
            <div className="sm:col-span-2 md:col-span-8 group rounded-2xl bg-white p-6 sm:p-8 flex flex-col justify-between border border-outline-variant/10 hover:border-primary/20 hover:shadow-lg transition-all">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-5">
                  <span className="material-symbols-outlined text-xl sm:text-2xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>monitor_heart</span>
                </div>
                <h3 className="font-host text-xl sm:text-2xl text-on-surface mb-2">Specialized Neuro ICU</h3>
                <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed w-full">
                  Our dedicated 3-bed Neuro ICU provides continuous round-the-clock monitoring for critical neurological and post-operative cases — with specialists always present and a response time under 5 minutes.
                </p>
              </div>
              <div className="mt-5 sm:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { icon: "schedule",       label: "Availability",        value: "24 / 7 / 365" },
                  { icon: "bed",            label: "ICU Beds",            value: "3 Beds"        },
                  { icon: "group",          label: "Specialists",         value: "Always On-Call"},
                  { icon: "local_hospital", label: "Response Time",       value: "< 5 Minutes"  },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex flex-col items-center text-center bg-primary/5 border border-primary/10 rounded-xl px-3 py-3 gap-1">
                    <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
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
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Step-by-Step</span>
            {/* heading — Raleway ExtraBold */}
            <h2 className="font-raleway text-3xl sm:text-4xl lg:text-5xl text-on-surface">How to Reach Us</h2>
            <p className="text-on-surface-variant mt-2 max-w-xl text-sm sm:text-base">Follow these steps to reach our Emergency wing quickly and safely.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 mb-5 sm:mb-6">

            {/* Address Card */}
            <div className="bg-surface-container-low rounded-2xl p-5 sm:p-7 border border-outline-variant/10 shadow-sm flex flex-col gap-4 sm:gap-5">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary-fixed/40 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              </div>
              <div>
                {/* subheading — Host Grotesk Regular */}
                <p className="font-host text-primary mb-2 text-sm sm:text-base">Hospital Address</p>
                <address className="not-italic text-on-surface-variant leading-relaxed text-sm sm:text-base">
                  9/1 colony, West Link Road (35A),<br />
                  Co-operative colony,<br />
                  Krishnagiri – 635001, Tamil Nadu
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
                  Open in Google Maps
                </a>
                <a
                  href="tel:04343239923"
                  className="flex items-center justify-center gap-2 bg-error/10 text-error px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base hover:bg-error hover:text-white transition-all border border-error/20"
                >
                  <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                  Call for Ambulance
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