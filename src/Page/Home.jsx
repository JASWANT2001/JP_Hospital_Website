import { Link } from "react-router-dom";

// ─── Hero Section ────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative flex items-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:min-h-[870px] lg:py-0">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center w-full">
        {/* Left Content */}
        <div className="z-10 space-y-6 lg:space-y-8 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">verified</span>
            CEA Licensed Institution
          </div>

          {/* Heading */}
          <div>
            <p className="text-primary font-bold uppercase tracking-[0.15em] text-[10px] sm:tracking-[0.2em] sm:text-xs mb-3 sm:mb-4">
              JP Neuro-Spine Hospital and Pain Management Centre
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-headline font-black text-primary leading-[1.1] tracking-tight">
              Precision Care <br /> For Your{" "}
              <span className="text-on-tertiary-container">Spine &amp; Mind.</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-on-surface-variant max-w-lg leading-relaxed mx-auto lg:mx-0">
            Combining neurosurgical excellence with compassionate pain
            management. At JP Neuro-Spine, we don't just treat symptoms—we
            restore quality of life through advanced clinical intervention and
            empathetic patient care.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 justify-center lg:justify-start">
            <Link
              to="/book-appoinment"
              className="bg-primary text-on-primary px-6 sm:px-8 py-3 sm:py-4 rounded-md font-bold text-base sm:text-lg hover:bg-on-primary-fixed-variant transition-all flex items-center justify-center gap-2"
            >
              Book Appointment
              <span className="material-symbols-outlined">calendar_today</span>
            </Link>
            <Link
              to="/department-services"
              className="bg-surface-container-highest text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-md font-bold text-base sm:text-lg hover:bg-surface-container-high transition-all flex items-center justify-center gap-2"
            >
              Our Services
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mt-4 lg:mt-0">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-fixed rounded-full blur-[100px] opacity-30 hidden lg:block" />
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl lg:rotate-2">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUFm5l3pmN4zzb7fwnyrq3-edo75ud16glKvNaM2jAqtOcy3uGEXd4K2BZhaCoVowBw5kR7HQqmyUtcbo-TOqEPxYNPZ8mO4h_B48t80SqcjRwtH7YxY2SdwpYyRYVnNghxwe3IVtE2ws0R9FN0VnTSxS1QIXVpNJP1gVnIcQrCIHbDH6rvN9alcobu0uRqPOGqvEh7nIODVg07Ho_Xj_TaWea4LnQWPjx1s-OfXYaw2LI3wvrHqNbQ-Y5WvThcJjJU_Tca9bWpvI"
              alt="Modern neurosurgery operating room with advanced equipment"
              className="w-full h-[260px] sm:h-[380px] lg:h-[580px] object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-6 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border-l-4 border-on-tertiary-container">
              <p className="text-primary font-bold italic text-sm sm:text-base">
                "Excellence in every incision, compassion in every interaction."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Key Highlights Section ──────────────────────────────────────────────────
const highlights = [
  {
    icon: "schedule",
    title: "24/7 Services",
    desc: "Emergency neurosurgical support and critical care available round the clock for urgent interventions.",
  },
  {
    icon: "psychology",
    title: "Expert Care",
    desc: "Led by senior consultants with decades of experience in complex spine surgeries and neuro-rehabilitation.",
  },
  {
    icon: "volunteer_activism",
    title: "Patient-Centric",
    desc: "Personalized recovery pathways designed around your comfort, lifestyle, and long-term wellness.",
  },
];

function KeyHighlights() {
  return (
    <section className="bg-surface-container-low py-12 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-surface-container-lowest p-6 sm:p-8 lg:p-10 rounded-xl shadow-[0_20px_40px_rgba(20,37,136,0.04)] hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-indigo-50 rounded-lg flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-primary text-2xl lg:text-3xl">
                  {item.icon}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-headline font-bold text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Specialties Section ─────────────────────────────────────────────────────
function SpecialtiesSection() {
  return (
    <section className="py-16 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 lg:mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-black text-primary mb-4 sm:mb-6">
              World-Class Specializations
            </h2>
            <p className="text-base sm:text-lg text-on-surface-variant">
              Our core pillars of excellence provide a seamless transition from
              acute surgical intervention to specialized pain recovery.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Neurosurgery */}
          <div className="bg-primary rounded-2xl overflow-hidden group flex flex-col">
            <div className="relative h-48 sm:h-56 lg:h-64">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNNIGqM8-KA8Tjh61pZVEVR4XmNcKGEJuMmFLByqCU4oIRPR6gTIdXW-ftJK9XaOFW218pPfaqUpHjqFLeQD1D9xQ3fTkdfvGb7ERVUhp4vMrM8kFSVocz01w6_-07PJWR8z9kzHbTv4H58Rv6n-YOOOmCY72u0rWzN2vsDIFMv5ohXbZbbBB9ZIvM9gdJcuavdwF9aMwkKZxaV6L_Vt_engq3kIUxB-Uid0uhbFMAE35ZcqwQ7-Dg1_2DRHBNe8M_efBV6UuNoyE"
                alt="Neurosurgery specialist examining a digital brain scan"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/20" />
            </div>
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col flex-grow text-on-primary">
              <span className="material-symbols-outlined text-3xl lg:text-4xl mb-4 lg:mb-6 text-primary-fixed-dim">
                neurology
              </span>
              <h3 className="text-2xl lg:text-3xl font-headline font-bold mb-3 lg:mb-4">
                Neurosurgery
              </h3>
              <p className="text-primary-fixed/80 mb-6 lg:mb-8 text-sm sm:text-base">
                Specialized in micro-discectomy, brain tumor excisions, and
                complex spinal instrumentations using state-of-the-art
                neuro-navigation.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 lg:mb-8">
                {["Spine Trauma Care", "Brain & Nerve Disorders", "Pediatric Neurosurgery"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2 text-sm sm:text-base">
                      <span className="material-symbols-outlined text-sm text-secondary-fixed">
                        check_circle
                      </span>
                      {item}
                    </li>
                  )
                )}
              </ul>
              <Link
                to="/department-services"
                className="mt-auto text-primary-fixed font-bold flex items-center gap-2 hover:gap-4 transition-all text-sm sm:text-base"
              >
                Explore Department
                <span className="material-symbols-outlined">trending_flat</span>
              </Link>
            </div>
          </div>

          {/* Pain Medicine */}
          <div className="bg-surface-container-high rounded-2xl overflow-hidden group flex flex-col">
            <div className="relative h-48 sm:h-56 lg:h-64">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUFm5l3pmN4zzb7fwnyrq3-edo75ud16glKvNaM2jAqtOcy3uGEXd4K2BZhaCoVowBw5kR7HQqmyUtcbo-TOqEPxYNPZ8mO4h_B48t80SqcjRwtH7YxY2SdwpYyRYVnNghxwe3IVtE2ws0R9FN0VnTSxS1QIXVpNJP1gVnIcQrCIHbDH6rvN9alcobu0uRqPOGqvEh7nIODVg07Ho_Xj_TaWea4LnQWPjx1s-OfXYaw2LI3wvrHqNbQ-Y5WvThcJjJU_Tca9bWpvI"
                alt="Pain management consultation session"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col flex-grow">
              <span className="material-symbols-outlined text-3xl lg:text-4xl mb-4 lg:mb-6 text-on-tertiary-container">
                medical_services
              </span>
              <h3 className="text-2xl lg:text-3xl font-headline font-bold text-primary mb-3 lg:mb-4">
                Pain Medicine
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-6 lg:mb-8 text-sm sm:text-base">
                Multidisciplinary approach to chronic pain, utilizing
                interventional procedures, physiotherapy, and pharmacological
                management protocols.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 lg:mb-8">
                {["Interventional Pain Care", "Regenerative Therapies", "Physical Rehabilitation"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2 text-sm sm:text-base">
                      <span className="material-symbols-outlined text-sm text-primary">
                        check_circle
                      </span>
                      {item}
                    </li>
                  )
                )}
              </ul>
              <Link
                to="/department-services"
                className="mt-auto text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all text-sm sm:text-base"
              >
                Explore Department
                <span className="material-symbols-outlined">trending_flat</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials Section ────────────────────────────────────────────────────
const testimonials = [
  {
    initials: "P",
    name: "Prabha",
    role: "Spinal Surgery Patient",
    quote:
      "After years of debilitating back pain, the team at JP Neuro-Spine gave me my life back. The precision of the surgery and the care during recovery was world-class.",
  },
  {
    initials: "S",
    name: "Shinu",
    role: "Chronic Pain Management",
    quote:
      "The doctors here are not just experts; they are compassionate listeners. They explained my condition in simple terms and guided me through pain management with immense patience.",
  },
  {
    initials: "JV",
    name: "J Vijay",
    role: "Family Member",
    quote:
      "Emergency neuro-care saved my brother's life. The 24/7 availability and immediate response time were critical factors. We are forever grateful.",
  },
];

function TestimonialsSection() {
  return (
    <section className="bg-primary py-16 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-container opacity-20 transform skew-x-12 translate-x-1/2" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 lg:mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-black text-on-primary">
            Healing Stories
          </h2>
          <p className="text-primary-fixed/60 mt-4 text-sm sm:text-base">
            Voices of recovery and gratitude from our patients.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-on-primary-fixed-variant/40 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/5 flex flex-col h-full"
            >
              <span className="material-symbols-outlined text-on-tertiary-container text-3xl lg:text-4xl mb-4 lg:mb-6">
                format_quote
              </span>
              <p className="text-on-primary text-sm sm:text-base lg:text-lg leading-relaxed mb-6 lg:mb-8 flex-grow">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary-fixed rounded-full flex items-center justify-center font-bold text-primary shrink-0 text-sm">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-on-primary font-bold text-sm sm:text-base">{t.name}</h4>
                  <p className="text-primary-fixed/60 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Accreditation Section ───────────────────────────────────────────────────
function AccreditationSection() {
  const badges = [
    "NABH Standards",
    "Surgical Safety Protocol",
    "Infection Control Excellence",
  ];

  return (
    <section className="py-12 lg:py-24 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="container mx-auto">
        <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 lg:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 border border-outline-variant/10 shadow-sm">
          {/* Badge */}
          <div className="md:w-1/3 flex justify-center w-full">
            <div className="relative group">
              <div className="absolute -inset-2 bg-on-tertiary-container blur opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative bg-white p-6 sm:p-8 rounded-xl shadow-inner border-2 border-dashed border-outline-variant/30 flex flex-col items-center">
                <span className="material-symbols-outlined text-5xl lg:text-6xl text-on-tertiary-container mb-3 lg:mb-4">
                  verified_user
                </span>
                <span className="text-lg lg:text-xl font-headline font-bold text-primary">
                  CEA LICENSED
                </span>
                <span className="text-xs text-on-surface-variant font-bold mt-2 text-center">
                  HOSPITAL REGISTRATION
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-headline font-bold text-primary mb-4 sm:mb-6">
              Recognized Clinical Excellence
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              JP Neuro-Spine Hospital and Pain Management Centre is a Clinical
              Establishment Act (CEA) licensed hospital. This license is our
              commitment to maintaining the highest standards of medical ethics,
              safety protocols, and patient care infrastructure.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start">
              {badges.map((badge) => (
                <div key={badge} className="flex items-center gap-2 sm:gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg">
                    check_circle
                  </span>
                  <span className="text-xs sm:text-sm font-semibold">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Home Page (assembled) ───────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="pt-16 sm:pt-20 bg-surface text-on-surface font-body">
      <HeroSection />
      <KeyHighlights />
      <SpecialtiesSection />
      <TestimonialsSection />
      <AccreditationSection />
    </main>
  );
}
