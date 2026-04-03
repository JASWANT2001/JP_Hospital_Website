import { useState } from 'react';
import Navbar from "../Component/Navbar";

const Contact = () => {
  // State for form data
  const [formData, setFormData] = useState({
    patientName: '',
    phoneNumber: '',
    department: 'Neuro Surgery',
    preferredDateTime: '',
    medicalNotes: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle WhatsApp submission
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.patientName || !formData.phoneNumber || !formData.preferredDateTime) {
      alert('Please fill in Patient Name, Phone Number, and Preferred Date & Time');
      return;
    }

    // Format date-time for better readability
    const dateTime = formData.preferredDateTime
      ? new Date(formData.preferredDateTime).toLocaleString('en-IN', {
          dateStyle: 'medium',
          timeStyle: 'short'
        })
      : 'Not specified';

    // Create WhatsApp message
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

    const clinicWhatsAppNumber = '918870436538';
    const whatsappURL = `https://wa.me/${clinicWhatsAppNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');

    setFormData({
      patientName: '',
      phoneNumber: '',
      department: 'Neuro Surgery',
      preferredDateTime: '',
      medicalNotes: ''
    });
  };

  return (
    <div className="bg-background font-body text-on-background selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">

      {/* Top Navigation */}
      <Navbar />

      <main className="pt-20 sm:pt-24 pb-8">

        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-24 mt-8 sm:mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold uppercase tracking-widest font-headline">
                Direct Access
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-headline font-extrabold text-primary leading-tight tracking-tighter">
                Get in Touch
              </h1>
              <p className="text-base sm:text-xl text-on-surface-variant max-w-md leading-relaxed font-body mx-auto lg:mx-0">
                Expert neuro-spine care and advanced pain management. Reach out to our clinical team for consultations or emergency assistance.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 justify-center lg:justify-start">
                <a
                  className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-6 sm:px-8 py-3 sm:py-4 rounded-md font-bold flex items-center justify-center gap-3 transition-colors hover:bg-on-tertiary-container hover:text-white text-sm sm:text-base"
                  href="tel:04343239923"
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>emergency_home</span>
                  04343-239923
                </a>
                <button className="bg-primary text-on-primary px-6 sm:px-8 py-3 sm:py-4 rounded-md font-bold flex items-center justify-center gap-3 transition-colors hover:bg-on-primary-fixed-variant text-sm sm:text-base">
                  Start Booking
                  <span className="material-symbols-outlined">arrow_downward</span>
                </button>
              </div>
            </div>
            <div className="relative h-[260px] sm:h-[380px] lg:h-[500px] w-full bg-surface-container-high rounded-xl overflow-hidden">
              <img
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80"
                alt="Modern clinical hospital hallway with soft lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXFyeKdJAFSbTDLK58flO_a3fotMauKQ0uIgeFBLX4fJkKgOv8lPqFSVEIlPyKRzbjkpR4KnZC2k6GEcREmBtSzw2xmuP5qn2ZyY57HV9Bse2u4QUXS75tWR2u31h_OxFMAd7PZnvIkgTnbJxBSeil3mORqhef5tSFEFYEGPVEMRHgEVIrtGzQhbTWIbD4J71iXpBJsi6NMzPJG4fK6P5DqZHySrepeZm5cftewj7-VXnyExZrfBBJDmSscO-pD8miadbHfbqMyNg"
              />
              <div
                className="absolute inset-0 opacity-20"
                style={{ background: "linear-gradient(135deg, #142588 0%, #303f9f 100%)" }}
              ></div>
            </div>
          </div>
        </section>

        {/* Contact Cards Grid */}
        <section className="bg-surface-container-low py-12 sm:py-16 lg:py-24 mb-12 sm:mb-16 lg:mb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">

              {/* Address Card */}
              <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl space-y-4 sm:space-y-6 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-lg sm:text-xl">location_on</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-headline font-bold text-primary">Location</h3>
                <p className="text-on-surface-variant leading-relaxed font-body text-sm sm:text-base">
                  9/1 colony, West Link Road (35A),<br />
                  Co-operative colony,<br />
                  Krishnagiri-635001
                </p>
              </div>

              {/* Phone Card */}
              <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl space-y-4 sm:space-y-6 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-secondary-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                  <span className="material-symbols-outlined text-lg sm:text-xl">call</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-headline font-bold text-primary">Direct Lines</h3>
                <div className="space-y-2">
                  <p className="text-on-surface-variant leading-relaxed font-body font-semibold text-sm sm:text-base">General: 04343-239923</p>
                  <p className="text-on-surface-variant leading-relaxed font-body text-sm sm:text-base">Emergency: Available 24/7</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl space-y-4 sm:space-y-6 group sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                  <span className="material-symbols-outlined text-lg sm:text-xl">mail</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-headline font-bold text-primary">Digital Support</h3>
                <div className="space-y-2">
                  <p className="text-on-surface-variant leading-relaxed font-body text-sm sm:text-base">
                    <a href="mailto:info@jpneurospine.com">info@jpneurospine.com</a>
                  </p>
                  <p className="text-on-surface-variant leading-relaxed font-body text-sm sm:text-base">
                    <a href="mailto:support@jpneurospine.com">support@jpneurospine.com</a>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Appointment Form & Map */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 items-stretch">

            {/* Form Section */}
            <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-outline-variant/10 shadow-sm">
              {/* Form Header */}
              <div className="px-6 sm:px-10 py-6 sm:py-8" style={{ background: "linear-gradient(135deg, #06155F 0%, #142588 60%, #2E7FEA 100%)" }}>
                <span className="text-white/60 font-bold tracking-widest uppercase text-xs">Clinical Intake</span>
                <h2 className="text-2xl sm:text-3xl font-headline font-extrabold text-white mt-1 tracking-tight">Request an Appointment</h2>
                <p className="text-white/70 text-xs sm:text-sm mt-2">Our coordinators will confirm your slot within 2 business hours.</p>
              </div>

              {/* Form Body */}
              <div className="bg-surface-container-lowest px-5 sm:px-10 py-6 sm:py-8">
                <form onSubmit={handleWhatsAppSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-widest text-primary block">Full Patient Name</label>
                      <input
                        name="patientName"
                        value={formData.patientName}
                        onChange={handleInputChange}
                        className="w-full bg-surface-container px-3 sm:px-4 py-3 text-on-surface rounded-lg border border-outline-variant/20 focus:outline-none focus:border-primary transition-colors text-sm sm:text-base"
                        placeholder="John Doe"
                        required
                        type="text"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-widest text-primary block">Phone Number</label>
                      <input
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="w-full bg-surface-container px-3 sm:px-4 py-3 text-on-surface rounded-lg border border-outline-variant/20 focus:outline-none focus:border-primary transition-colors text-sm sm:text-base"
                        placeholder="9876543210"
                        required
                        type="tel"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-widest text-primary block">Department</label>
                      <div className="relative">
                        <select
                          name="department"
                          value={formData.department}
                          onChange={handleInputChange}
                          className="w-full bg-surface-container px-3 sm:px-4 py-3 pr-10 text-on-surface rounded-lg border border-outline-variant/20 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer text-sm sm:text-base"
                        >
                          <option value="" disabled>Select a department</option>
                          <option>Neuro Surgery</option>
                          <option>Spine Management</option>
                          <option>Chronic Pain Treatment</option>
                          <option>Physiotherapy</option>
                        </select>
                        <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-primary text-base">expand_more</span>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-widest text-primary block">Preferred Date &amp; Time</label>
                      <input
                        name="preferredDateTime"
                        value={formData.preferredDateTime}
                        onChange={handleInputChange}
                        className="w-full bg-surface-container px-3 sm:px-4 py-3 text-on-surface rounded-lg border border-outline-variant/20 focus:outline-none focus:border-primary transition-colors text-sm sm:text-base"
                        required
                        type="datetime-local"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-primary block">Initial Medical Notes <span className="text-outline font-normal normal-case tracking-normal">(Optional)</span></label>
                    <textarea
                      name="medicalNotes"
                      value={formData.medicalNotes}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container px-3 sm:px-4 py-3 text-on-surface rounded-lg border border-outline-variant/20 focus:outline-none focus:border-primary transition-colors resize-none text-sm sm:text-base"
                      placeholder="Briefly describe your symptoms or medical history..."
                      rows={4}
                    />
                  </div>
                  <button
                    className="w-full text-on-primary py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base tracking-wide hover:shadow-[0_8px_30px_rgba(20,37,136,0.25)] transition-all flex items-center justify-center gap-2"
                    style={{ background: "linear-gradient(135deg, #142588 0%, #303f9f 100%)" }}
                    type="submit"
                  >
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                    Send via WhatsApp
                  </button>
                </form>
              </div>
            </div>

            {/* Right Panel */}
            <div className="lg:col-span-2 flex flex-col gap-5 sm:gap-6">
              {/* Map */}
              <div className="flex-1 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-md relative min-h-[260px] sm:min-h-[320px]">
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

              {/* Hospital Hours */}
              <div className="flex-1 rounded-2xl border border-outline-variant/10 shadow-sm overflow-hidden flex flex-col">
                <div className="px-5 sm:px-6 py-4 sm:py-5 flex items-center gap-3" style={{ background: "linear-gradient(135deg, #06155F 0%, #142588 60%, #2E7FEA 100%)" }}>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/15 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-sm sm:text-base" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-white text-sm sm:text-base leading-none">Hospital Hours</h4>
                    <p className="text-white/60 text-xs mt-0.5">Operational timings</p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest divide-y divide-outline-variant/10 flex-1 flex flex-col">
                  {[
                    { label: "Outpatient (OPD)", time: "09:00 AM – 08:00 PM", icon: "local_hospital", sub: "Mon – Sat" },
                    { label: "Emergency", time: "24 Hrs / 7 Days", icon: "emergency", highlight: true, sub: "Always open" },
                    { label: "Surgery Schedule", time: "By Appointment", icon: "calendar_month", sub: "Pre-booked only" },
                  ].map((row) => (
                    <div key={row.label} className={`flex-1 flex items-center px-4 sm:px-6 py-3 sm:py-4 gap-3 ${row.highlight ? "bg-error/5" : ""}`}>
                      <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${row.highlight ? "bg-error/10" : "bg-primary-fixed/40"}`}>
                        <span className={`material-symbols-outlined text-xs sm:text-sm ${row.highlight ? "text-error" : "text-primary"}`} style={{ fontVariationSettings: "'FILL' 1" }}>{row.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs sm:text-sm font-semibold leading-none ${row.highlight ? "text-error" : "text-on-surface"}`}>{row.label}</p>
                        <p className="text-xs text-on-surface-variant mt-0.5">{row.sub}</p>
                      </div>
                      <span className={`text-xs sm:text-sm font-bold tabular-nums whitespace-nowrap ${row.highlight ? "text-error" : "text-primary"}`}>{row.time}</span>
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
