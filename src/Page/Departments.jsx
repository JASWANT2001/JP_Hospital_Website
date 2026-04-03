import { Link } from "react-router-dom";
import { useState } from "react";

const techItems = [
  {
    title: "Neurosurgical Microscope",
    desc: "Provides high magnification and illumination for precise surgery on delicate brain and spinal structures. Enhances surgical safety by allowing accurate dissection and preservation of vital tissues.",
  },
  {
    title: "Neuro Electrical Drill System",
    desc: "High-speed drill system designed for precise bone cutting in neurosurgical procedures. Ensures efficiency and safety while minimizing trauma to surrounding tissues.",
  },
  {
    title: "Fluoroscopy",
    desc: "Real-time imaging guidance for minimally invasive procedures and accurate implant placement. Improves surgical precision while reducing complications and operative time.",
  },
  {
    title: "Advanced Anaesthesia Workstation",
    desc: "Delivers controlled and reliable anaesthesia tailored to complex neurosurgical procedures. Ensures patient safety with continuous monitoring and precise drug delivery.",
  },
  {
    title: "Invasive Hemodynamic Monitoring",
    desc: "Provides continuous, accurate measurement of cardiovascular parameters during surgery. Helps maintain optimal blood flow and prevents complications from fluid imbalance.",
  },
  {
    title: "Patient Warming Device",
    desc: "Maintains body temperature during surgery to prevent intra-operative hypothermia. Reduces complications, improves recovery, and enhances overall surgical outcomes.",
  },
];

function AdvancedTechAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <ul className="flex flex-col h-full divide-y divide-surface-container-high">
      {techItems.map((item, i) => (
        <li key={item.title} className="flex-1 flex flex-col justify-center">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-3 text-left gap-4 group"
          >
            <span className="font-semibold text-sm sm:text-base text-primary group-hover:text-secondary transition-colors">
              {item.title}
            </span>
            <span
              className="material-symbols-outlined text-secondary transition-transform duration-200 flex-shrink-0 text-base"
              style={{ transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              expand_more
            </span>
          </button>
          {openIndex === i && (
            <p className="pb-3 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              {item.desc}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

const painTechItems = [
  {
    title: "Headache Assessment Tool",
    desc: "A simple, structured clinical support system to accurately diagnose different headache disorders. Enables quick, practical, and evidence-based decisions for effective pain management.",
  },
  {
    title: "Fluoroscopy & DSA Guided Procedures",
    desc: "Advanced imaging guidance ensures precise needle placement for pain interventions. Enhances safety, accuracy, and effectiveness of minimally invasive pain procedures.",
  },
  {
    title: "Neuraxial & Musculoskeletal Ultrasound",
    desc: "Real-time imaging helps diagnose and guide treatment of pain-causing conditions like tendon and joint injuries. Improves precision of injections while reducing complications and discomfort.",
  },
  {
    title: "Neuromodulation & Radiofrequency Ablation",
    desc: "Targets specific nerves to interrupt pain signals and provide long-term relief. Highly effective for chronic pain conditions when conventional treatments fail.",
  },
  {
    title: "Multibiologic Centrifuge (Orthobiologics)",
    desc: "Processes patient's own biological samples to create regenerative therapies for healing. Used in conditions like osteoarthritis and sports injuries to promote natural tissue repair.",
  },
  {
    title: "Acute Pain Services",
    desc: "Comprehensive pain management protocols ensure comfortable recovery after surgery. Utilizes regional anesthesia and medications to minimize pain and speed up healing.",
  },
];

function PainTechAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <ul className="flex flex-col h-full divide-y divide-on-primary/20">
      {painTechItems.map((item, i) => (
        <li key={item.title} className="flex-1 flex flex-col justify-center">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-3 text-left gap-4 group"
          >
            <span className="font-semibold text-sm sm:text-base text-on-primary group-hover:text-on-tertiary-container transition-colors">
              {item.title}
            </span>
            <span
              className="material-symbols-outlined text-on-tertiary-container transition-transform duration-200 flex-shrink-0 text-base"
              style={{ transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              expand_more
            </span>
          </button>
          {openIndex === i && (
            <p className="pb-3 text-xs sm:text-sm text-on-primary/80 leading-relaxed">
              {item.desc}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Departments() {
  return (
    <div className="bg-surface font-body text-on-surface">
      {/* Hero Section */}
      <header className="relative pt-28 sm:pt-32 pb-14 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="high-tech modern hospital corridor"
            className="w-full h-full object-cover opacity-10"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjI2lK9CSZ32P4kaMMPJwjGq7s5RuZgkhRPS6vF4DfBF5resaApwwo_WhDcV2wgaJwKII15yVOUwU5VQxE9qv1s5ZO_-ZNBMS-n-FEp1nj_atpr-5R-ijdBtDFbsouSMht_aMXyKSIEU5Rw3tfXnwozz_E63pt4T180Sb3NSyg-OVXmD7TevC_L3CeXgcLMMVrtDextjq4ZF-PkMAzR3SMxSCF8g8dkVVvMIIegqm3nRSEETcu2bx13HCrtzc2-XcSXcyvCR3soHU"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-headline text-3xl sm:text-4xl md:text-6xl font-extrabold text-primary mb-4 sm:mb-6 tracking-tight">
              Our Specialities &amp; Departments
            </h1>
            <p className="text-base sm:text-xl text-on-surface-variant mb-8 sm:mb-10 leading-relaxed font-light">
              Comprehensive care for brain, spine, pain, and rehabilitation,
              delivered by world-class specialists using precision technology.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link
                to="/book-appoinment"
                className="bg-tertiary-fixed text-on-tertiary-fixed px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:brightness-95 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span className="material-symbols-outlined">calendar_today</span>
                Book Appointment
              </Link>
              <a href="tel:04343239923" className="border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-primary/5 transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                <span className="material-symbols-outlined">call</span>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-20 lg:space-y-24">
        {/* Department 1: Neurosurgery */}
        <section className="space-y-8 sm:space-y-12" id="neurosurgery">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-outline-variant/20 pb-6 sm:pb-8">
            <div>
              <span className="text-secondary font-bold tracking-widest uppercase text-xs sm:text-sm">
                Department 01
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mt-2">
                Neurosurgery
              </h2>
            </div>
            <div className="flex gap-2">
              <span className="px-3 sm:px-4 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold uppercase">
                Advanced Surgical Center
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Service Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 auto-rows-fr">
              {[
                {
                  icon: "psychology",
                  title: "Endoscopic Brain Surgery",
                  desc: "Uses small openings and advanced endoscopes to access deep brain areas with minimal tissue disruption. Leads to faster recovery, less pain, and reduced hospital stay.",
                },
                {
                  icon: "vertical_align_center",
                  title: "Endoscopic Spine Surgery",
                  desc: "A keyhole approach to treat spine problems like disc herniation with minimal muscle damage. Offers quicker recovery, less postoperative pain, and early return to normal activities.",
                },
                {
                  icon: "biotech",
                  title: "Microneurosurgery",
                  desc: "High-precision surgery performed under an operating microscope for delicate brain and spinal structures. Ensures maximum tumor removal or repair while preserving vital neurological function.",
                },
                {
                  icon: "neurology",
                  title: "Brain Tumor Surgery",
                  desc: "Advanced surgical techniques aim for safe and effective removal of tumors affecting the brain and spine. Focuses on preserving neurological function while improving survival and quality of life.",
                },
                {
                  icon: "cell_tower",
                  title: "Epilepsy Surgery",
                  desc: "Surgical treatment for patients with seizures not controlled by medications. Helps reduce or eliminate seizures, significantly improving daily functioning and independence.",
                },
                {
                  icon: "child_care",
                  title: "Pediatric Neurosurgery",
                  desc: "Specialized care for neurological conditions in infants and children, including congenital and developmental disorders. Focuses on gentle, precise treatment to support normal growth and long-term neurological health.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5 sm:p-6 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10"
                >
                  <span className="material-symbols-outlined text-primary mb-3 sm:mb-4 block text-2xl">
                    {item.icon}
                  </span>
                  <h4 className="font-bold text-base sm:text-lg mb-2">{item.title}</h4>
                  <p className="text-on-surface-variant text-xs sm:text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Advanced Technology */}
            <div className="lg:col-span-4 bg-surface-container-low rounded-xl p-6 sm:p-8 flex flex-col">
              <h3 className="font-headline text-lg sm:text-xl font-bold mb-5 sm:mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">
                  precision_manufacturing
                </span>
                Advanced Technology
              </h3>
              <div className="flex-1 flex flex-col">
                <AdvancedTechAccordion />
              </div>
            </div>
          </div>
        </section>

        {/* Department 2: Pain Medicine */}
        <section className="space-y-8 sm:space-y-12" id="pain-medicine">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-outline-variant/20 pb-6 sm:pb-8">
            <div>
              <span className="text-on-tertiary-container font-bold tracking-widest uppercase text-xs sm:text-sm">
                Department 02
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mt-2">
                Pain Medicine
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Conditions List */}
            <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl p-6 sm:p-8 border border-outline-variant/10 flex flex-col">
              <h3 className="font-headline text-xl sm:text-2xl font-bold mb-5 sm:mb-6 text-primary flex items-center gap-3">
                <span className="material-symbols-outlined text-on-tertiary-container">healing</span>
                Chronic Conditions We Treat
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 flex-grow">
                {[
                  "Chronic Headache Disorders",
                  "Slipped Disc & Sciatica",
                  "Neuropathic Pain",
                  "Post Joint Replacement Pain",
                  "Fibromyalgia & Myofascial Pain",
                  "Post Surgical Pain",
                  "Cancer Pain",
                  "Trigeminal Neuralgia",
                  "Post Herpetic Neuralgia",
                  "Chronic Shoulder Pain",
                  "Chronic Knee Pain",
                  "Heel & Foot Pain",
                  "Spasticity Management",
                ].map((condition) => (
                  <div
                    key={condition}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-surface-container-low rounded-lg text-xs sm:text-sm font-medium text-on-surface border border-outline-variant/10"
                  >
                    <span className="material-symbols-outlined text-on-tertiary-container flex-shrink-0" style={{ fontSize: "14px" }}>
                      check_circle
                    </span>
                    <span>{condition}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pain Tech Accordion */}
            <div className="lg:col-span-4 bg-primary text-on-primary rounded-xl p-6 sm:p-8 flex flex-col">
              <h3 className="font-headline text-lg sm:text-xl font-bold mb-5 sm:mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-on-tertiary-container">
                  precision_manufacturing
                </span>
                Advanced Technology
              </h3>
              <div className="flex-1 flex flex-col">
                <PainTechAccordion />
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid: Critical Care & Physiotherapy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Department 3: Critical Care */}
          <section className="flex flex-col h-full" id="critical-care">
            <div className="border-b border-outline-variant/20 pb-3 sm:pb-4 mb-5 sm:mb-6">
              <span className="text-secondary font-bold tracking-widest uppercase text-[10px] sm:text-xs">
                Department 03
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary mt-1">
                Critical Care
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:gap-4 flex-grow">
              {[
                {
                  icon: "emergency",
                  iconBg: "bg-error/10",
                  iconColor: "text-error",
                  title: "24h Emergency Trauma Care & ICU",
                  desc: "Immediate round-the-clock care ensures rapid stabilization of head and spine injuries, reducing critical delays.",
                },
                {
                  icon: "monitor_heart",
                  iconBg: "bg-primary/10",
                  iconColor: "text-primary",
                  title: "Acute Stroke Care",
                  desc: "Time-sensitive stroke management helps restore blood flow to the brain and limit permanent damage.",
                },
                {
                  icon: "analytics",
                  iconBg: "bg-secondary/10",
                  iconColor: "text-secondary",
                  title: "Intraoperative Neuro-Monitoring",
                  desc: "Real-time monitoring of neural pathways during surgery helps prevent damage to critical brain and spinal structures.",
                },
                {
                  icon: "vital_signs",
                  iconBg: "bg-primary/10",
                  iconColor: "text-primary",
                  title: "Invasive Hemodynamic Monitoring",
                  desc: "Continuous monitoring of vital cardiovascular parameters ensures optimal cerebral perfusion during surgery.",
                },
                {
                  icon: "ventilator",
                  iconBg: "bg-primary/10",
                  iconColor: "text-primary",
                  title: "Advanced Ventilators",
                  desc: "Provide precise respiratory support for critically ill neurosurgical patients, especially those with impaired consciousness.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 sm:gap-4 p-4 sm:p-5 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10"
                >
                  <div className={`${item.iconBg} p-2.5 sm:p-3 rounded-lg h-fit flex-shrink-0`}>
                    <span className={`material-symbols-outlined ${item.iconColor} text-lg sm:text-xl`}>
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-lg">{item.title}</h4>
                    <p className="text-on-surface-variant text-xs sm:text-sm mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Department 4: Physiotherapy */}
          <section className="flex flex-col h-full" id="physiotherapy">
            <div className="border-b border-outline-variant/20 pb-3 sm:pb-4 mb-5 sm:mb-6">
              <span className="text-secondary font-bold tracking-widest uppercase text-[10px] sm:text-xs">
                Department 04
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary mt-1">
                Physiotherapy
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 flex-grow">
              {[
                {
                  icon: "accessible",
                  title: "Stroke Rehabilitation",
                  desc: "Focused therapy programs help patients regain movement, speech, and independence after stroke.",
                },
                {
                  icon: "electric_bolt",
                  title: "IFT (Interferential Therapy)",
                  desc: "Uses medium-frequency electrical currents to reduce pain and improve blood circulation.",
                },
                {
                  icon: "directions_run",
                  title: "MST (Muscle Stimulation Therapy)",
                  desc: "Applies electrical impulses to stimulate weak or paralyzed muscles and prevent atrophy.",
                },
                {
                  icon: "straighten",
                  title: "Auto Traction",
                  desc: "Provides controlled spinal stretching to relieve pressure on discs and nerves.",
                },
                {
                  icon: "sports_soccer",
                  title: "Sports Rehabilitation",
                  desc: "Specialized therapy aimed at recovery from sports injuries and prevention of re-injury.",
                },
                {
                  icon: "flash_on",
                  title: "TENS",
                  desc: "Delivers low-voltage electrical currents to block pain signals and stimulate endorphin release.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-4 sm:p-6 rounded-xl bg-white border border-outline-variant/10 shadow-sm flex flex-col gap-2 sm:gap-3"
                >
                  <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">
                    {item.icon}
                  </span>
                  <h4 className="font-bold text-sm sm:text-base text-primary">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Appointment Banner */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 mb-16 sm:mb-20 lg:mb-28">
        <div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
          style={{ background: "linear-gradient(135deg, #06155F 0%, #142588 50%, #2E7FEA 100%)" }}
        >
          {/* Decorative blobs */}
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-10" style={{ background: "#2E7FEA" }} />
          <div className="absolute -bottom-20 -left-10 w-64 h-64 rounded-full opacity-10" style={{ background: "#F66749" }} />

          <div className="relative z-10 px-6 sm:px-10 py-12 sm:py-16 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Text */}
            <div className="flex-1 text-center md:text-left space-y-3 sm:space-y-4">
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/10 text-white/80">
                Ready to get started?
              </span>
              <h3 className="font-headline text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight">
                Experience Specialized Clinical Care
              </h3>
              <p className="text-white/70 text-sm sm:text-lg leading-relaxed">
                Our specialists are ready to guide you through your recovery journey with compassion and cutting-edge technology.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-shrink-0 w-full md:w-auto">
              <Link
                to="/book-appoinment"
                className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:bg-white/90 transition-all shadow-lg text-center"
              >
                Book Appointment
              </Link>
              <a
                href="tel:04343239923"
                className="border-2 border-white/40 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">call</span>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
