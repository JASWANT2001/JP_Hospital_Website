import { Link } from 'react-router-dom';

// ─── Hero Section ────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-[auto] lg:min-h-[716px] flex items-center overflow-hidden px-4 sm:px-6 lg:px-8 py-16 lg:py-0">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
        {/* Left */}
        <div className="z-10 text-center lg:text-left">
          <span className="inline-block px-4 py-1 bg-primary-fixed text-on-primary-fixed text-xs font-bold tracking-widest rounded-full mb-5 lg:mb-6">
            OUR JOURNEY
          </span>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-[1.1] mb-6 lg:mb-8 tracking-tighter">
            Bringing state-of-the-art care closer.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-xl mx-auto lg:mx-0">
            JP Neuro-Spine Hospital was founded with a singular vision: to bridge the gap between advanced neurological
            expertise and the communities that need it most. We believe clinical excellence should never be out of reach.
          </p>
        </div>

        {/* Right */}
        <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none mx-auto lg:mx-0">
          <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB51NW5dOii2daegXTXX9Hn6W4MopXwHQp3VI9NyxupsOTme8i4bIR5tgI2HXwy3jryDuT03Tcb6btoArK_U30_A_hF-o1Ywbtz2W6H9cTgA1FQ27NQ-qeL7WrOQVGqlL5Gf2ATig8O9eaafk0kUusJvZzysJzzOCuYdO-_KkRbgMEj70p6PVAaXR82mqtB9MfA2qXxfd77-i7vqcP6JBlCPXVB-e55IYgdXNhf9sM8_szaEkifxvdqBncVJM_42XfbqCZXZOazHCE"
              alt="Modern hospital facility architecture"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Quote card — hidden on small, visible md+ */}
          <div className="hidden md:block absolute -bottom-8 -left-4 lg:-left-8 bg-surface-container-lowest p-5 lg:p-8 rounded-xl shadow-lg border-l-4 border-secondary max-w-[240px] lg:max-w-xs">
            <p className="text-primary font-headline font-bold text-base lg:text-lg mb-2 italic">
              "Precision in surgery, compassion in care."
            </p>
            <p className="text-on-surface-variant text-xs lg:text-sm">
              Our founding philosophy guiding every patient interaction since day one.
            </p>
          </div>
        </div>

        {/* Quote card for mobile — shown only on small screens */}
        <div className="block md:hidden bg-surface-container-lowest p-5 rounded-xl shadow-lg border-l-4 border-secondary w-full">
          <p className="text-primary font-headline font-bold text-base mb-2 italic">
            "Precision in surgery, compassion in care."
          </p>
          <p className="text-on-surface-variant text-xs">
            Our founding philosophy guiding every patient interaction since day one.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Vision & Mission Section ─────────────────────────────────────────────────
function VisionMissionSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-surface-container-low">
      <div className="container mx-auto">
        {/* Stats Banner */}
        <div className="mb-6 bg-primary p-7 sm:p-10 rounded-xl flex items-center justify-between text-on-primary relative overflow-hidden">
          <div className="z-10">
            <h3 className="text-4xl sm:text-5xl font-black mb-1">10+</h3>
            <p className="text-primary-fixed text-base sm:text-lg font-semibold">Years of Clinical Excellence</p>
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
          <div className="bg-surface-container-lowest p-8 sm:p-10 lg:p-12 rounded-xl flex flex-col justify-center">
            <span className="material-symbols-outlined text-secondary text-4xl sm:text-5xl mb-5 lg:mb-6">visibility</span>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-4 lg:mb-6">Our Vision</h2>
            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
              To be the leading center of neuro-spine excellence in the region, recognized for pioneering surgical
              techniques and setting the gold standard in empathetic pain management.
            </p>
          </div>

          {/* Mission */}
          <div
            className="p-8 sm:p-10 lg:p-12 rounded-xl text-on-primary"
            style={{ background: 'linear-gradient(135deg, #142588 0%, #303f9f 100%)' }}
          >
            <h2 className="font-headline text-2xl sm:text-3xl font-bold mb-6 lg:mb-8">Our Mission</h2>
            <div className="space-y-5 lg:space-y-6">
              <div className="flex gap-4 items-start">
                <span className="bg-white/20 p-2 rounded-lg material-symbols-outlined shrink-0">bolt</span>
                <div>
                  <h4 className="text-base sm:text-lg font-bold mb-1">Rapid Response</h4>
                  <p className="text-on-primary-container text-sm">
                    Immediate, life-saving neuro-intervention when seconds matter most.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bg-white/20 p-2 rounded-lg material-symbols-outlined shrink-0">favorite</span>
                <div>
                  <h4 className="text-base sm:text-lg font-bold mb-1">Affordable Access</h4>
                  <p className="text-on-primary-container text-sm">
                    Democratizing high-end spine surgeries through efficient care models.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bg-white/20 p-2 rounded-lg material-symbols-outlined shrink-0">biotech</span>
                <div>
                  <h4 className="text-base sm:text-lg font-bold mb-1">Technological Precision</h4>
                  <p className="text-on-primary-container text-sm">
                    Utilizing diagnostic robotics to ensure better outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Leadership Section ───────────────────────────────────────────────────────
const leaders = [
  {
    name: 'Dr. Jayakumar P',
    role: 'Chief Consultant Neurosurgeon',
    bio: 'With over two decades of experience in complex spine surgeries and neuro-trauma, Dr. Jayakumar leads our clinical excellence program with a focus on minimally invasive procedures.',
  },
  {
    name: 'Dr. Prasanna Vani V',
    role: 'Head of Pain Management & Critical Care',
    bio: 'Dr. Prasanna Vani specializes in holistic pain relief and interventional pain medicine, ensuring our patients find lasting comfort through personalized rehabilitation pathways.',
  },
];

function LeadershipSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">Our Leadership</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-base sm:text-lg">
            Expertise led by visionaries in Neurosurgery and Pain Management.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {leaders.map((leader) => (
            <div key={leader.name} className="group">
              <div className="aspect-[3/4] sm:aspect-[3/4] rounded-xl bg-surface-container-high mb-6 lg:mb-8 overflow-hidden relative">
                <div className="w-full h-full flex flex-col items-center justify-center bg-surface-container text-outline-variant gap-4">
                  <span className="material-symbols-outlined text-5xl lg:text-6xl">person</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-outline">Photo to be added</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-6 bg-surface-container-lowest/90 backdrop-blur rounded-lg">
                  <h3 className="font-headline text-xl sm:text-2xl font-extrabold text-primary">{leader.name}</h3>
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
function AccreditationsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-surface-container-low">
      <div className="container mx-auto">
        <div className="bg-surface-container-lowest rounded-xl p-8 sm:p-10 lg:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
              TRUST &amp; COMPLIANCE
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-4 lg:mb-6">
              Fully Licensed &amp; Accredited
            </h2>
            <p className="text-on-surface-variant text-base sm:text-lg mb-6 lg:mb-8">
              JP Neuro-Spine Hospital operates under strict compliance with medical standards. We are proud to be a CEA
              Licensed facility, ensuring the highest level of safety and operational integrity for our patients.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 text-primary font-semibold flex-wrap">
              <span className="material-symbols-outlined shrink-0">verified_user</span>
              <span className="text-sm sm:text-base">CEA License No: CEA-HOSP-2024-0012</span>
            </div>
          </div>

          <div className="w-full md:w-72 lg:w-80 aspect-video bg-surface-container rounded-lg flex items-center justify-center p-4 border-2 border-dashed border-outline-variant shrink-0">
            <div className="text-center">
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-outline mb-2 block">badge</span>
              <p className="text-xs text-outline font-bold">CEA LICENSE PHOTO PLACEHOLDER</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ─────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-5 lg:mb-6">
          Experience Care Without Compromise
        </h2>
        <p className="text-on-surface-variant text-base sm:text-lg mb-8 lg:mb-10">
          Whether you're seeking a consultation for persistent pain or specialized neuro-surgical advice, our team is
          here to support your journey to recovery.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/book-appoinment"
            className="bg-primary text-on-primary px-6 sm:px-8 py-3 sm:py-4 rounded-md font-bold hover:bg-on-primary-fixed-variant transition-all text-sm sm:text-base"
          >
            Book Your Consultation
          </Link>
          <Link
            to="/emergency"
            className="bg-tertiary-fixed text-on-tertiary-fixed px-6 sm:px-8 py-3 sm:py-4 rounded-md font-bold hover:bg-tertiary-fixed-dim transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <span className="material-symbols-outlined text-lg">call</span>
            Emergency: 04343-239923
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── About Us Page ────────────────────────────────────────────────────────────
export default function AboutUs() {
  return (
    <main className="pt-16 sm:pt-20 bg-surface text-on-surface font-body">
      <HeroSection />
      <VisionMissionSection />
      <LeadershipSection />
      <AccreditationsSection />
      <CTASection />
    </main>
  );
}