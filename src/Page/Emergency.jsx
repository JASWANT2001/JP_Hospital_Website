export default function Emergency() {
  return (
    <div className="bg-surface font-body text-on-surface">

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
            {/* Live Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/20 border border-error/40 text-white font-semibold text-xs tracking-wider uppercase mb-6 sm:mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-error" />
              </span>
              Emergency Response — Active 24 / 7
            </div>

            <h1 className="font-headline text-4xl sm:text-6xl md:text-8xl font-extrabold text-white leading-[1.05] tracking-tight mb-5 sm:mb-6">
              Immediate<br />
              Neurological<br />
              <span className="text-tertiary-fixed">Response.</span>
            </h1>

            <p className="text-white/70 text-base sm:text-xl max-w-xl font-medium leading-relaxed mb-8 sm:mb-12">
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
                  <p className="text-xl sm:text-2xl font-headline font-extrabold text-primary">04343-239923</p>
                </div>
              </a>

              <a
                href="https://wa.me/918870436538"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 sm:gap-4 bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 rounded-2xl p-2 pr-5 sm:pr-6 w-full sm:w-fit"
              >
                <div className="bg-[#25D366] p-3 sm:p-4 rounded-xl text-white flex-shrink-0">
                  <span className="material-symbols-outlined text-xl sm:text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                </div>
                <div>
                  <p className="text-xs text-white/50 font-bold uppercase tracking-widest">WhatsApp Us</p>
                  <p className="text-base sm:text-lg font-headline font-extrabold text-white">+91 88704 36538</p>
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
              {
                icon: "call",
                label: "Main Hospital Line",
                value: "04343-239923",
                sub: "Available 24/7",
                href: "tel:04343239923",
                color: "text-tertiary-fixed",
              },
              {
                icon: "chat",
                label: "WhatsApp",
                value: "+91 88704 36538",
                sub: "Quick response",
                href: "https://wa.me/918870436538",
                color: "text-[#25D366]",
              },
              {
                icon: "mail",
                label: "Email Support",
                value: "info@jpneurospine.com",
                sub: "Non-urgent queries",
                href: "mailto:info@jpneurospine.com",
                color: "text-secondary-container",
              },
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
            <h2 className="font-headline text-2xl sm:text-4xl font-extrabold text-on-surface">All Contact Channels</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              {
                icon: "call",
                title: "Emergency Hotline",
                detail: "04343-239923",
                sub: "24 / 7 — Trauma & Critical",
                href: "tel:04343239923",
                gradient: "from-error/10 to-error/5",
                border: "border-error/20",
                iconBg: "bg-error",
                iconColor: "text-white",
              },
              {
                icon: "chat",
                title: "WhatsApp",
                detail: "+91 88704 36538",
                sub: "Instant messaging",
                href: "https://wa.me/918870436538",
                gradient: "from-[#25D366]/10 to-[#25D366]/5",
                border: "border-[#25D366]/20",
                iconBg: "bg-[#25D366]",
                iconColor: "text-white",
              },
              {
                icon: "mail",
                title: "General Email",
                detail: "info@jpneurospine.com",
                sub: "Appointments & queries",
                href: "mailto:info@jpneurospine.com",
                gradient: "from-primary/10 to-primary/5",
                border: "border-primary/20",
                iconBg: "bg-primary",
                iconColor: "text-white",
              },
              {
                icon: "support_agent",
                title: "Support Email",
                detail: "support@jpneurospine.com",
                sub: "Patient support",
                href: "mailto:support@jpneurospine.com",
                gradient: "from-secondary/10 to-secondary/5",
                border: "border-secondary/20",
                iconBg: "bg-secondary",
                iconColor: "text-white",
              },
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
                  <p className="font-headline font-bold text-on-surface text-sm sm:text-base group-hover:underline break-all">{detail}</p>
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
            <h2 className="font-headline text-2xl sm:text-4xl font-extrabold text-on-surface">24/7 Critical Services</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 sm:gap-5">
            {/* Trauma Care */}
            <div className="sm:col-span-2 md:col-span-8 group relative overflow-hidden rounded-2xl bg-white p-6 sm:p-8 flex flex-col justify-between min-h-[220px] sm:min-h-[280px] border border-outline-variant/10 hover:border-primary/20 hover:shadow-lg transition-all">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-error/10 flex items-center justify-center mb-4 sm:mb-5">
                  <span className="material-symbols-outlined text-xl sm:text-2xl text-error" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
                </div>
                <h3 className="font-headline text-xl sm:text-2xl font-bold text-on-surface mb-2">24h Emergency Trauma Care & ICU</h3>
                <p className="text-on-surface-variant max-w-md text-xs sm:text-sm leading-relaxed">
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
              <h3 className="font-headline text-base sm:text-lg font-bold text-on-surface">24-hour Pharmacy</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">Critical care medications and life-saving neurological drugs always in stock.</p>
            </div>

            {/* Stroke Care */}
            <div className="md:col-span-4 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[220px] sm:min-h-[280px] shadow-xl" style={{ background: "linear-gradient(135deg, #06155F 0%, #142588 60%, #2E7FEA 100%)" }}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-xl sm:text-2xl text-tertiary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>neurology</span>
              </div>
              <div>
                <h3 className="font-headline text-lg sm:text-xl font-bold text-white mb-2">Acute Stroke Care</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">Rapid thrombolysis and endovascular intervention for ischemic events within the golden hour.</p>
              </div>
              <a href="tel:04343239923" className="mt-4 text-tertiary-fixed font-bold text-xs sm:text-sm flex items-center gap-2 group w-fit">
                Call Now
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-base">chevron_right</span>
              </a>
            </div>

            {/* Diagnostic Lab */}
            <div className="sm:col-span-2 md:col-span-8 group rounded-2xl bg-white p-6 sm:p-8 flex flex-col justify-between border border-outline-variant/10 hover:border-secondary/20 hover:shadow-lg transition-all">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 sm:mb-5">
                    <span className="material-symbols-outlined text-xl sm:text-2xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>biotech</span>
                  </div>
                  <h3 className="font-headline text-xl sm:text-2xl font-bold text-on-surface mb-2">Advanced Diagnostic Lab</h3>
                  <p className="text-on-surface-variant max-w-md text-xs sm:text-sm leading-relaxed">
                    On-site MRI, CT, and rapid neuro-fluid analysis with 20-minute turnaround for critical results.
                  </p>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 flex flex-wrap gap-4 sm:gap-6">
                {["3.0T MRI", "128-Slice CT", "Rapid CSF Analysis"].map((label) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span className="text-xs font-bold text-outline uppercase tracking-wider">{label}</span>
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

          {/* Section Header */}
          <div className="mb-8 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Step-by-Step</span>
            <h2 className="font-headline text-2xl sm:text-4xl font-extrabold text-on-surface">How to Reach Us</h2>
            <p className="text-on-surface-variant mt-2 max-w-xl text-xs sm:text-sm">Follow these steps to reach our Emergency wing quickly and safely.</p>
          </div>

          {/* Top: Address + Steps side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 mb-5 sm:mb-6">

            {/* Address Card */}
            <div className="bg-surface-container-low rounded-2xl p-5 sm:p-7 border border-outline-variant/10 shadow-sm flex flex-col gap-4 sm:gap-5">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary-fixed/40 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              </div>
              <div>
                <p className="font-headline font-bold text-primary mb-2 text-sm sm:text-base">Hospital Address</p>
                <address className="not-italic text-on-surface-variant leading-relaxed text-xs sm:text-sm">
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
                  className="flex items-center justify-center gap-2 bg-primary text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm hover:bg-on-primary-fixed-variant transition-all"
                >
                  <span className="material-symbols-outlined text-base">navigation</span>
                  Open in Google Maps
                </a>
                <a
                  href="tel:04343239923"
                  className="flex items-center justify-center gap-2 bg-error/10 text-error px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm hover:bg-error hover:text-white transition-all border border-error/20"
                >
                  <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                  Call for Ambulance
                </a>
              </div>
            </div>

            {/* Direction Steps */}
            <div className="lg:col-span-2 bg-surface-container-low rounded-2xl border border-outline-variant/10 shadow-sm overflow-hidden">
              <div className="px-5 sm:px-7 py-4 sm:py-5 border-b border-outline-variant/10 flex items-center gap-3" style={{ background: "linear-gradient(135deg, #06155F 0%, #142588 100%)" }}>
                <span className="material-symbols-outlined text-white text-base sm:text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>near_me</span>
                <h3 className="font-headline font-bold text-white text-sm sm:text-base">Directions Guide</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-outline-variant/10">
                {[
                  { step: "01", title: "From Bus Stand", desc: "Head west on NH 44, take Co-operative Colony turn. Hospital is 0.8 km on West Link Road (35A).", icon: "directions_bus" },
                  { step: "02", title: "Emergency Entrance", desc: "Use the dedicated Emergency Gate on the north side — open 24/7 with ramp access.", icon: "emergency_home" },
                  { step: "03", title: "Parking", desc: "Free emergency parking outside the Emergency wing. Valet service active after 6 PM.", icon: "local_parking" },
                  { step: "04", title: "Ambulance Bay", desc: "Enter via rear gate off West Link Road. Trauma team meets you at the bay.", icon: "ambulance" },
                ].map(({ step, title, desc, icon }) => (
                  <div key={step} className="flex gap-3 sm:gap-4 p-4 sm:p-6 items-start">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary-fixed/40 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-xs sm:text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-primary/50 uppercase tracking-widest mb-0.5">Step {step}</p>
                      <p className="font-bold text-on-surface text-xs sm:text-sm">{title}</p>
                      <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom: Full-width Map */}
          <div className="rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl h-60 sm:h-80 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13164.262211032852!2d78.20611548466795!3d12.517063073760358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac35c0e9566689%3A0x7b40cb9bac1a085f!2sJP%20NEURO%20SPINE%20HOSPITAL%20AND%20PAIN%20MANAGEMENT%20CENTRE!5e0!3m2!1sen!2sin!4v1775148501831!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JP Neuro Spine Hospital Location"
            />
          </div>

        </div>
      </section>

    </div>
  );
}
