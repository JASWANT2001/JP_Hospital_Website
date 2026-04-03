import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const PatientServices = () => {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-tertiary-fixed selection:text-tertiary">

      {/* Top Navigation Bar */}
      <Navbar />

      <main className="pt-20 sm:pt-24">

        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32 container mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="z-10 text-center lg:text-left">
              <h1 className="font-headline text-3xl sm:text-4xl lg:text-7xl font-extrabold text-primary leading-tight tracking-tighter mb-5 sm:mb-6">
                Comprehensive Patient <br /><span className="text-secondary">Services &amp; Facilities</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-on-surface-variant max-w-xl mb-8 sm:mb-10 leading-relaxed mx-auto lg:mx-0">
                At JP Neuro-Spine, we blend surgical precision with compassionate care, providing a holistic healing environment for complex neurological and spine conditions.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link to="/book-appoinment" className="bg-primary text-on-primary px-6 sm:px-8 py-3 sm:py-4 rounded-md font-bold text-base sm:text-lg hover:bg-on-primary-fixed-variant transition-colors flex items-center justify-center gap-2">
                  Book Appointment
                  <span className="material-symbols-outlined">calendar_today</span>
                </Link>
                <a href="tel:04343239923" className="border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-md font-bold text-base sm:text-lg hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">call</span>
                  Call Now
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-48 sm:w-64 h-48 sm:h-64 bg-tertiary-fixed opacity-30 rounded-full blur-3xl"></div>
              <img
                alt="Modern Hospital Interior"
                className="w-full h-[260px] sm:h-[360px] lg:h-[500px] object-cover shadow-2xl"
                style={{ borderRadius: "2rem 0.5rem 2rem 0.5rem" }}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRk77tvGdfT5-PdbdhpgCt-S9zEmwjA36IZV1OHbVb6XTqta9ZfKI2FYq9YQ0QD4lBIwgJvJa24X6NoUsa3ks8gZ3cAsNDP_ifqCSdwafgjTUNYnItmoOkawD-Wmn6J0J0uVI-emNjtez5OSySet6fLELAS1ETZj46tP6cY_YNCszM-u5UxxlB3l_IWpVs9mufY-TbomaindWFpHN88s2GTa4NdTVL4FIHgVwq9URSIatMGuTVzool5vUTLws04OFrrJz_ehxqAt8"
              />
            </div>
          </div>
        </section>

        {/* OPD Consultations (Bento-style Grid) */}
        <section className="py-12 sm:py-16 lg:py-24 bg-surface-container-low px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10 sm:mb-14">
              <div>
                <span className="text-secondary font-bold tracking-widest uppercase text-xs sm:text-sm">Out-Patient Department</span>
                <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mt-2">OPD Consultation Hours</h2>
                <p className="text-on-surface-variant mt-3 max-w-lg text-sm sm:text-base">Walk in or book ahead — our specialists are available across multiple sessions throughout the week.</p>
              </div>
              <a href="tel:04343239923" className="flex-shrink-0 inline-flex items-center gap-2 border-2 border-primary text-primary px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-bold text-sm hover:bg-primary/5 transition-colors w-fit">
                <span className="material-symbols-outlined text-base">call</span>
                Call for Timings
              </a>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">

              {/* Neurosurgery */}
              <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10 flex flex-col">
                <div className="bg-primary px-5 sm:px-7 py-4 sm:py-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-primary text-xl sm:text-2xl">neurology</span>
                    <h3 className="font-headline text-lg sm:text-xl font-bold text-on-primary">Neurosurgery</h3>
                  </div>
                  <span className="bg-white/20 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold">Specialized</span>
                </div>
                <div className="px-5 sm:px-7 py-5 sm:py-6 flex flex-col gap-4 flex-1">
                  <div className="flex items-center justify-between py-3 px-3 sm:px-4 bg-surface-container-low rounded-xl">
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-base">calendar_month</span>
                      <span className="text-xs sm:text-sm font-medium">Mon – Sat</span>
                    </div>
                    <span className="font-bold text-primary text-xs sm:text-sm">4 PM – 9 PM</span>
                  </div>
                  <div className="flex items-center justify-between py-3 px-3 sm:px-4 bg-surface-container-low rounded-xl">
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-base">calendar_month</span>
                      <span className="text-xs sm:text-sm font-medium">Sunday</span>
                    </div>
                    <span className="font-bold text-primary text-xs sm:text-sm">9 AM – 1 PM</span>
                  </div>
                </div>
              </div>

              {/* Pain Medicine */}
              <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10 flex flex-col">
                <div className="px-5 sm:px-7 py-4 sm:py-5 flex items-center gap-3" style={{ background: "#763800" }}>
                  <span className="material-symbols-outlined text-white text-xl sm:text-2xl">medication</span>
                  <h3 className="font-headline text-lg sm:text-xl font-bold text-white">Pain Medicine</h3>
                </div>
                <div className="px-5 sm:px-7 py-5 sm:py-6 flex flex-col gap-4 flex-1">
                  <div className="flex items-center justify-between py-3 px-3 sm:px-4 bg-surface-container-low rounded-xl">
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-base">wb_sunny</span>
                      <span className="text-xs sm:text-sm font-medium">Mon – Fri (Morning)</span>
                    </div>
                    <span className="font-bold text-primary text-xs sm:text-sm">10 AM – 1 PM</span>
                  </div>
                  <div className="flex items-center justify-between py-3 px-3 sm:px-4 bg-surface-container-low rounded-xl">
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-base">nights_stay</span>
                      <span className="text-xs sm:text-sm font-medium">Mon – Fri (Evening)</span>
                    </div>
                    <span className="font-bold text-primary text-xs sm:text-sm">6:30 PM – 8 PM</span>
                  </div>
                </div>
              </div>

              {/* Physiotherapy */}
              <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10 flex flex-col sm:col-span-2 md:col-span-1">
                <div className="bg-secondary px-5 sm:px-7 py-4 sm:py-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-secondary text-xl sm:text-2xl">exercise</span>
                    <h3 className="font-headline text-lg sm:text-xl font-bold text-on-secondary">Physiotherapy</h3>
                  </div>
                  <span className="bg-white/20 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold">Daily</span>
                </div>
                <div className="px-5 sm:px-7 py-5 sm:py-6 flex flex-col gap-4 flex-1">
                  <div className="flex items-center justify-between py-3 px-3 sm:px-4 bg-surface-container-low rounded-xl">
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-base">calendar_month</span>
                      <span className="text-xs sm:text-sm font-medium">Daily Session</span>
                    </div>
                    <span className="font-bold text-primary text-xs sm:text-sm">7 PM – 9 PM</span>
                  </div>
                  <p className="text-xs sm:text-sm text-on-surface-variant px-1 leading-relaxed">Advanced neuro-rehabilitation and physical therapy protocols tailored for spinal recovery.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Round-the-Clock Care */}
        <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 container mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary mb-4">24/7 Emergency &amp; Support</h2>
            <div className="h-1 w-20 bg-tertiary-fixed mx-auto"></div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">

            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-error-container text-error rounded-full flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl sm:text-4xl">emergency</span>
              </div>
              <h3 className="font-headline text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Casualty</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">24 Hours. Immediate emergency medical response and stabilization unit for critical traumas.</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary-fixed text-primary rounded-full flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl sm:text-4xl">local_pharmacy</span>
              </div>
              <h3 className="font-headline text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Pharmacy</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">24 Hours. Fully stocked in-house medicine center for all surgical and critical care needs.</p>
            </div>

            <div className="flex flex-col items-center text-center group sm:col-span-2 md:col-span-1 sm:max-w-xs sm:mx-auto md:max-w-none md:mx-0 w-full">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-secondary-container text-secondary rounded-full flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl sm:text-4xl">biotech</span>
              </div>
              <h3 className="font-headline text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Lab Services</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">24 Hours. Advanced pathology and diagnostic laboratory for rapid results and diagnostics.</p>
            </div>

          </div>
        </section>

        {/* Advanced In-Patient Care */}
        <section className="py-12 sm:py-16 lg:py-24 bg-primary text-on-primary overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <span className="text-tertiary-fixed font-bold tracking-widest uppercase text-xs sm:text-sm">Accommodation</span>
                <h2 className="font-headline text-2xl sm:text-3xl lg:text-5xl font-bold mt-3 sm:mt-4 mb-6 sm:mb-8">Advanced In-Patient Care</h2>
                <div className="space-y-6 sm:space-y-8">

                  <div className="flex gap-4 sm:gap-6">
                    <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-on-primary-container/20 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-lg sm:text-xl">bed</span>
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Ward Options</h4>
                      <p className="text-on-primary-container text-sm">Sharing Room, Private Non-AC, and Private AC Suite available for varied patient preferences.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 sm:gap-6">
                    <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-on-primary-container/20 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-lg sm:text-xl">clinical_notes</span>
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Specialized ICU</h4>
                      <p className="text-on-primary-container text-sm">3-bed specialized intensive care unit equipped for critical neuro-spine recovery and post-operative monitoring.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 sm:gap-6">
                    <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-on-primary-container/20 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-lg sm:text-xl">medical_services</span>
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Day Care Procedures</h4>
                      <p className="text-on-primary-container text-sm">Dedicated room for quick-turnaround pain management procedures and minimally invasive interventions.</p>
                    </div>
                  </div>

                </div>
              </div>
              <div className="relative mt-4 lg:mt-0">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <img
                    alt="Clean Hospital Room"
                    className="rounded-xl w-full h-44 sm:h-56 lg:h-64 object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb6PUyuyxe0WsmBSimh6w2Yz1kCDEdm8CsEdDcFqfEitaeP5mQoRJqCsTcphpSZM_-jVIKmLQsZcqVrddbfv72GK7n36yqmQ4IYF_thEuBHtLdDL7roY0m4rmjgxnCCFlD47moKO1qSQhFv6e6bNNSvZdl78aXtbKDF-T913yoij0BIKq640M_AYCpHtO7PcFY9Wcm_Anire1mVEcSMt7lfczlsCCsLWFnvD-v5rpUGWDXFrOLoyRskCHGrHlvvgqyDTd309s4PvQ"
                  />
                  <img
                    alt="Medical Monitoring"
                    className="rounded-xl w-full h-44 sm:h-56 lg:h-64 object-cover mt-6 sm:mt-8"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHuNbFnb3akef4Rv0hFAzbNtOWKtUzd4jI7KVRucoOOqeoZnxTP6tTZshLNQCD1MsR7B-0N2-rVYge_sY8afLc2RH9r7Tb0ds7Fkcp4gwewKdmO9ywZNs55h63zpEjEb2HJfI0GKAKRntBp9nGM4QjqKHC4snZqdD0In2NgJU3YmcyMZrpOGvbYiSGNFmU3MmZt_O2DLGF7yCi6i9O5lrzZlChDyz2twnVBz7SFQE4W8ljVT0SXZH45RpA6SER3lfNMipGoksm6JM"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnostic Excellence */}
        <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 container mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10">
            {/* Image Panel */}
            <div className="relative min-h-[260px] sm:min-h-[340px] lg:min-h-[420px]">
              <img
                alt="Neuro Diagnostic Lab"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs1-YwmvECX-RxADSqoJ-6K4Q8nJ7_KIbFvRStVolmu__ZsrGGIYPhH79kSoBeTsNtQC1Yrpf_CnoT6ygVuAtpcJpTti4vwoQGyQnIpQ67ZygfUgmBYKXCGJxqYcdMDfk-Ep3WpH6Y5HL5-nrEhb1qG4thfa7WQ7ee3d3GJGZO4d_w-fpFBtk6qPg8ASafGe6JF6BTi-SmRQ0TcsPUpVBXSV0xauUQ7Zsi8NAPkGHM22wYHQ6NutTOLtYYSW2OPrnedzl2_TG7LWE"
              />
              <div className="absolute inset-0 bg-primary/40" />
              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
                <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow">
                  <span className="material-symbols-outlined text-base">biotech</span>
                  Diagnostic Lab
                </span>
              </div>
            </div>

            {/* Content Panel */}
            <div className="bg-surface-container-lowest px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12 flex flex-col justify-center">
              <span className="text-secondary font-bold tracking-widest uppercase text-xs sm:text-sm mb-3">Diagnostics</span>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-4 leading-tight">Neuro Electro Diagnostic Excellence</h2>
              <p className="text-on-surface-variant mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Our diagnostic wing is equipped with cutting-edge technology to map neural activity with pinpoint accuracy, ensuring the right foundation for every treatment plan.
              </p>

              {/* Test badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                {[
                  { label: "EEG", desc: "Electroencephalogram" },
                  { label: "EMG", desc: "Electromyography" },
                  { label: "NCS", desc: "Nerve Conduction" },
                  { label: "BERA", desc: "Brainstem Response" },
                  { label: "VEP", desc: "Visual Evoked Potential" },
                ].map((test) => (
                  <div key={test.label} className="flex flex-col items-center text-center p-3 sm:p-4 bg-surface-container rounded-xl border border-outline-variant/10">
                    <span className="font-headline font-extrabold text-base sm:text-lg text-primary">{test.label}</span>
                    <span className="text-[10px] sm:text-xs text-on-surface-variant mt-1 leading-snug">{test.desc}</span>
                  </div>
                ))}
                <div className="flex flex-col items-center text-center p-3 sm:p-4 bg-secondary rounded-xl">
                  <span className="material-symbols-outlined text-on-secondary text-lg sm:text-xl mb-1">hub</span>
                  <span className="font-bold text-[10px] sm:text-xs text-on-secondary leading-snug">Advanced Mapping</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>


    </div>
  );
};

export default PatientServices;
