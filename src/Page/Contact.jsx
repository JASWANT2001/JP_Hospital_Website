import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Component/Navbar";
import { useLang, contactTranslations } from "../context/LanguageContext";

// ─── Font Scale ────────────────────────────────────────────────────────────────
// badge / eyebrow / label  → text-xs  uppercase tracking-widest
// body                     → text-sm sm:text-base
// card sub-title           → text-lg sm:text-xl  [font-subheading – Host Grotesk]
// section heading          → text-3xl sm:text-4xl lg:text-5xl  [font-heading – Raleway]
// hero h1                  → text-5xl sm:text-6xl lg:text-7xl  [font-heading – Raleway]

const Contact = () => {
  const { lang } = useLang();
  const t = contactTranslations[lang];

  const [formData, setFormData] = useState({
    patientName: '',
    phoneNumber: '',
    department: 'Neuro Surgery',
    preferredDateTime: '',
    medicalNotes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    if (!formData.patientName.trim()) { alert("Patient name is required"); return; }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phoneNumber)) { alert("Enter a valid 10-digit phone number"); return; }

    if (!formData.preferredDateTime) { alert("Please select preferred date & time"); return; }

    const selectedDate = new Date(formData.preferredDateTime);
    if (selectedDate < new Date()) { alert("You cannot select a past date/time"); return; }

    const dateTime = new Date(formData.preferredDateTime)
      .toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });

    const message = `
*APPOINTMENT REQUEST - JP Neurospine*

 *Patient Details:*
Name: ${formData.patientName}
Phone: ${formData.phoneNumber}

 *Department:* ${formData.department}

*Preferred Date & Time:*
${dateTime}

 *Medical Notes:*
${formData.medicalNotes || 'Not provided'}

---
Requesting confirmation within 2 business hours.
    `.trim();

    const whatsappURL = `https://wa.me/918870436538?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');

    setFormData({ patientName: '', phoneNumber: '', department: 'Neuro Surgery', preferredDateTime: '', medicalNotes: '' });
  };

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-primary">
      <Navbar />

      <main>

        {/* ══════════════════════════════════════════════════════════════
            HERO — full viewport, left text + right image
        ══════════════════════════════════════════════════════════════ */}
        <section className="lg:min-h-screen lg:grid lg:grid-cols-[42%_58%] lg:pt-0">

          {/* ── Mobile image banner (hidden on lg+) ── */}
          <div className="block lg:hidden w-full h-[100vw] sm:h-[80vw]">
            <img
              className="w-full h-full object-contain object-center"
              alt="JP Neuro Spine Hospital team"
              src="https://ik.imagekit.io/glvwzrukg/JP%20Webiste/contact%20us%20page.jpg"
            />
          </div>

          {/* Left: text content */}
          <div className="flex flex-col justify-center gap-8 px-6 sm:px-12 lg:px-16 xl:px-20 pt-8 pb-10 lg:py-24 lg:pt-0">

            {/* Eyebrow */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-xs font-black uppercase tracking-[0.18em] mb-4">
                <span className="material-symbols-outlined text-sm">contact_support</span>
                {t.hero.eyebrow}
              </span>
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl text-primary leading-[1.0] tracking-tighter mb-3">
                {t.hero.heading}
              </h1>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-md">
                {t.hero.body}
              </p>
            </div>

            {/* Specialty tags */}
            <div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">{t.hero.specialtiesLabel}</p>
              <div className="flex flex-col gap-2">
                {t.hero.specialties.map((tag) => (
                  <div key={tag} className="flex items-center gap-3 group">
                    <span className="w-6 h-px bg-primary/30 group-hover:w-10 group-hover:bg-primary transition-all duration-300 shrink-0" />
                    <span className="text-sm font-semibold text-on-surface-variant group-hover:text-primary transition-colors duration-200">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: hospital image (desktop only) */}
          <div className="relative hidden lg:block overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-contain object-center"
              style={{ objectPosition: 'center' }}
              alt="JP Neuro Spine Hospital team"
              src="https://ik.imagekit.io/glvwzrukg/JP%20Webiste/contact%20us%20page.jpg"
            />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            CONTACT CARDS — 3 info cards full width
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-surface-container-low py-12 sm:py-16 border-y border-outline-variant/10">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-outline-variant/10 rounded-2xl overflow-hidden shadow-sm">

              {/* Address */}
              <div className="bg-surface-container-low p-7 sm:p-8 flex flex-col gap-4 group hover:bg-surface-container transition-colors">
                <div className="w-11 h-11 rounded-xl bg-primary-fixed flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-on-primary text-xl transition-colors">location_on</span>
                </div>
                <div>
                  <h3 className="font-subheading text-lg sm:text-xl text-primary mb-2">{t.cards.locationTitle}</h3>
                  <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                    {t.cards.locationAddress}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-surface-container-low p-7 sm:p-8 flex flex-col gap-4 group hover:bg-surface-container transition-colors">
                <div className="w-11 h-11 rounded-xl bg-secondary-container flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                  <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary text-xl transition-colors">call</span>
                </div>
                <div>
                  <h3 className="font-subheading text-lg sm:text-xl text-primary mb-2">{t.cards.phoneTitle}</h3>
                  <div className="space-y-1.5">
                    <p className="text-sm sm:text-base text-on-surface font-bold">04343-239923</p>
                    <p className="text-sm sm:text-base text-on-surface-variant">{t.cards.phoneSub}</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-surface-container-low p-7 sm:p-8 flex flex-col gap-4 group hover:bg-surface-container transition-colors">
                <div className="w-11 h-11 rounded-xl bg-tertiary-fixed flex items-center justify-center group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                  <span className="material-symbols-outlined text-tertiary group-hover:text-on-tertiary text-xl transition-colors">open_in_new</span>
                </div>
                <div>
                  <h3 className="font-subheading text-lg sm:text-xl text-primary mb-2">{t.cards.quickLinksTitle}</h3>
                  <div className="space-y-2">
                    <Link
                      to="/patient-services"
                      className="flex items-center gap-2 text-sm sm:text-base text-on-surface-variant hover:text-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-base">medical_services</span>
                      {t.cards.patientServicesLabel}
                    </Link>
                    {/* <Link
                      to="/book-appoinment"
                      className="flex items-center gap-2 text-sm sm:text-base text-on-surface-variant hover:text-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-base">calendar_month</span>
                      Book an Appointment
                    </Link> */}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            FORM + MAP + HOURS
        ══════════════════════════════════════════════════════════════ */}
    
<section className="py-14 sm:py-20">
  <div className="container mx-auto px-6 sm:px-8 lg:px-12">

    {/* Changed grid to 2 columns */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">

      {/* ── Appointment Form (REMOVED FROM UI - KEPT FOR FUTURE) ── */}
    
    
              {/* <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-outline-variant/10 shadow-sm flex flex-col">

                <div
                  className="px-8 sm:px-10 py-7 sm:py-8 flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #06155F 0%, #142588 60%, #2E7FEA 100%)" }}
                >
                  <span className="text-white/50 text-xs font-black uppercase tracking-[0.18em]">Clinical Intake</span>
                  <h2 className="font-heading text-2xl sm:text-3xl text-white mt-1.5 mb-1 tracking-tight">
                    Request an Appointment
                  </h2>
                  <p className="text-white/60 text-sm sm:text-base">
                    Our coordinators will confirm your slot within 2 business hours.
                  </p>
                </div>

           
                <div className="bg-surface-container-lowest px-8 sm:px-10 py-8 flex-1">
                  <form onSubmit={handleWhatsAppSubmit} className="space-y-5 h-full flex flex-col">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-shrink-0">
                      <div className="space-y-1.5">
                        <label className="text-xs font-black uppercase tracking-widest text-primary block">Full Patient Name</label>
                        <input
                          name="patientName"
                          value={formData.patientName}
                          onChange={handleInputChange}
                          pattern="^[A-Za-z\s]{3,}$"
                          title="Name should contain at least 3 letters"
                          className="w-full bg-surface-container px-4 py-3 text-on-surface rounded-xl border border-outline-variant/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm sm:text-base placeholder:text-outline-variant/50"
                          placeholder="John Doe"
                          required
                          type="text"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-black uppercase tracking-widest text-primary block">Phone Number</label>
                        <input
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          pattern="[6-9]{1}[0-9]{9}"
                          maxLength="10"
                          title="Enter valid 10-digit Indian number"
                          className="w-full bg-surface-container px-4 py-3 text-on-surface rounded-xl border border-outline-variant/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm sm:text-base placeholder:text-outline-variant/50"
                          placeholder="9876543210"
                          required
                          type="tel"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-shrink-0">
                      <div className="space-y-1.5">
                        <label className="text-xs font-black uppercase tracking-widest text-primary block">Department</label>
                        <div className="relative">
                          <select
                            name="department"
                            value={formData.department}
                            onChange={handleInputChange}
                            className="w-full bg-surface-container px-4 py-3 pr-10 text-on-surface rounded-xl border border-outline-variant/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all appearance-none cursor-pointer text-sm sm:text-base"
                          >
                            <option value="" disabled>Select a department</option>
                            <option>Neuro Surgery</option>
                            <option>Spine Surgery</option>
                            <option>Chronic Pain Treatment</option>
                            <option>Physiotherapy</option>
                          </select>
                          <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-primary text-base">expand_more</span>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-black uppercase tracking-widest text-primary block">Preferred Date &amp; Time</label>
                        <input
                          type="datetime-local"
                          name="preferredDateTime"
                          value={formData.preferredDateTime}
                          onChange={handleInputChange}
                          min={new Date().toISOString().slice(0, 16)}
                          className="w-full bg-surface-container px-4 py-3 text-on-surface rounded-xl border border-outline-variant/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm sm:text-base"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5 flex-1 flex flex-col">
                      <label className="text-xs font-black uppercase tracking-widest text-primary block">
                        Medical Notes{" "}
                        <span className="text-outline font-normal normal-case tracking-normal">(Optional)</span>
                      </label>
                      <textarea
                        name="medicalNotes"
                        value={formData.medicalNotes}
                        onChange={handleInputChange}
                        className="w-full flex-1 bg-surface-container px-4 py-3 text-on-surface rounded-xl border border-outline-variant/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all resize-none text-sm sm:text-base placeholder:text-outline-variant/50 min-h-[100px]"
                        placeholder="Briefly describe your symptoms or medical history..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full text-on-primary py-4 rounded-xl font-bold text-sm sm:text-base tracking-wide hover:shadow-[0_8px_30px_rgba(20,37,136,0.3)] hover:-translate-y-0.5 transition-all active:scale-95 flex items-center justify-center gap-2"
                      style={{ background: "linear-gradient(135deg, #142588 0%, #303f9f 100%)" }}
                    >
                      <span
                        className="material-symbols-outlined text-base"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        chat
                      </span>
                      Send via WhatsApp
                    </button>
                  </form>
                </div>
              </div> */}
  

      {/* ── Map (LEFT) ── */}
      <div className="rounded-2xl overflow-hidden border border-primary/15 shadow-sm min-h-[300px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13164.262211032852!2d78.20611548466795!3d12.517063073760358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac35c0e9566689%3A0x7b40cb9bac1a085f!2sJP%20NEURO%20SPINE%20HOSPITAL%20AND%20PAIN%20MANAGEMENT%20CENTRE!5e0!3m2!1sen!2sin!4v1775148501831!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="JP Neuro Spine Hospital and Pain Management Centre Hospital Location"
        />
      </div>

      {/* ── Hospital Hours (RIGHT) ── */}
      <div className="rounded-2xl border border-outline-variant/10 shadow-sm overflow-hidden">
        <div
          className="px-6 py-4 flex items-center gap-3"
          style={{ background: "linear-gradient(135deg, #06155F 0%, #142588 60%, #2E7FEA 100%)" }}
        >
          <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
            <span
              className="material-symbols-outlined text-white text-base"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              schedule
            </span>
          </div>
          <div>
            <h4 className="font-subheading text-sm sm:text-base text-white leading-tight">{t.hours.heading}</h4>
            <p className="text-white/50 text-xs">{t.hours.sub}</p>
          </div>
        </div>

        <div className="bg-surface-container-lowest divide-y divide-outline-variant/10">

          {/* Department OPD slots */}
          {t.hours.depts.map((dept) => (
            <div key={dept.name} className="px-5 py-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {dept.icon}
                  </span>
                </div>
                <p className="text-sm font-bold text-on-surface">{dept.name}</p>
              </div>
              <div className="flex flex-col gap-1.5 pl-9">
                {dept.slots.map((slot, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-xs text-on-surface-variant">{slot.days}</span>
                    <span className="text-xs font-bold text-primary tabular-nums">{slot.time}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Emergency & Surgery rows */}
          {t.hours.rows.map((row) => (
            <div
              key={row.label}
              className={`flex items-center gap-3 px-5 py-4 ${row.highlight ? "bg-error/5" : ""}`}
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${row.highlight ? "bg-error/10" : "bg-primary-fixed/40"}`}>
                <span
                  className={`material-symbols-outlined text-sm ${row.highlight ? "text-error" : "text-primary"}`}
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {row.icon}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-semibold leading-none ${row.highlight ? "text-error" : "text-on-surface"}`}>
                  {row.label}
                </p>
                <p className="text-xs text-on-surface-variant mt-0.5">{row.sub}</p>
              </div>
              <span className={`text-sm font-bold tabular-nums whitespace-nowrap ${row.highlight ? "text-error" : "text-primary"}`}>
                {row.time}
              </span>
            </div>
          ))}

        </div>
      </div>

    </div>
  </div>
</section>
      </main>
    </div>
  );
};

export default Contact;
