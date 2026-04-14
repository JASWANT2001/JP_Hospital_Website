import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useLang, homeTranslations } from "../context/LanguageContext";

// ─── Font Import ──────────────────────────────────────────────────────────────
const FontStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@800&family=Host+Grotesk:wght@400&display=swap');
    .font-heading    { font-family: 'Raleway', sans-serif;      font-weight: 800; }
    .font-subheading { font-family: 'Host Grotesk', sans-serif; font-weight: 400; }
    @keyframes carousel-scroll {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .carousel-track {
      animation: carousel-scroll 28s linear infinite;
      will-change: transform;
    }
    .carousel-track:hover { animation-play-state: paused; }
  `}</style>
);

// ─── Shared Font Scale ────────────────────────────────────────────────────────
// label    → text-xs
// body     → text-sm sm:text-base
// subhead  → text-xl sm:text-2xl  → font-subheading
// heading  → text-3xl sm:text-4xl lg:text-5xl → font-heading
// hero     → text-4xl sm:text-5xl lg:text-7xl → font-heading

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection({ t }) {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-24 lg:pb-32 lg:min-h-[88vh] flex flex-col justify-center">
      {/* Decorative backgrounds */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-on-tertiary-container/8 rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto">
       

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* ── Left: Vision + Mission + CTAs + Facility chips ── */}
          <div className="space-y-7">
            {/* Vision */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                {/* <div className="h-px w-6 bg-on-tertiary-container shrink-0" /> */}
                <span className="text-base sm:text-lg font-bold tracking-normal text-on-tertiary-container uppercase">
                  {t.visionLabel}
                </span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] text-primary leading-[1.1] tracking-tight">
                {t.vision}
              </h1>
            </div>

            {/* Mission */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                {/* <div className="h-px w-6 bg-on-tertiary-container shrink-0" /> */}
                <span className="text-base sm:text-lg font-bold tracking-normal text-on-tertiary-container uppercase">
                  {t.missionLabel}
                </span>
              </div>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                {t.mission}
              </p>
            </div>

            {/* Facility chips — above CTA */}
            <div className="pt-4">
              <div className="flex flex-wrap gap-2">
                {t.facilities.map((f) => (
                  <span
                    key={f.label}
                    className="inline-flex items-center gap-1.5 bg-surface-container px-3 py-1.5 rounded-full text-xs font-medium text-on-surface-variant border border-outline-variant/20"
                  >
                    <span className="material-symbols-outlined text-primary text-sm leading-none">{f.icon}</span>
                    {f.label}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6">
              <a
                href="tel:04343239923"
                className="bg-primary text-on-primary px-6 py-3.5 rounded-md font-bold text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 group"
              >
                <span className="material-symbols-outlined text-lg leading-none group-hover:animate-bounce">call</span>
                {t.cta}
              </a>
              <Link
                to="/department-services"
                className="bg-surface-container-highest text-primary px-6 py-3.5 rounded-md font-bold text-sm hover:bg-surface-container-high transition-all flex items-center justify-center gap-2"
              >
                {t.cta2}
                <span className="material-symbols-outlined text-lg leading-none">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* ── Right: Image ── */}
          <div className="relative hidden lg:block">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-fixed rounded-full blur-[100px] opacity-30 pointer-events-none" />
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl lg:rotate-2">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUFm5l3pmN4zzb7fwnyrq3-edo75ud16glKvNaM2jAqtOcy3uGEXd4K2BZhaCoVowBw5kR7HQqmyUtcbo-TOqEPxYNPZ8mO4h_B48t80SqcjRwtH7YxY2SdwpYyRYVnNghxwe3IVtE2ws0R9FN0VnTSxS1QIXVpNJP1gVnIcQrCIHbDH6rvN9alcobu0uRqPOGqvEh7nIODVg07Ho_Xj_TaWea4LnQWPjx1s-OfXYaw2LI3wvrHqNbQ-Y5WvThcJjJU_Tca9bWpvI"
                alt="Modern neurosurgery operating room with advanced equipment"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border-l-4 border-on-tertiary-container">
                <p className="text-primary font-bold italic text-sm sm:text-base">
                  {t.quote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Core Values Carousel ─────────────────────────────────────────────────────
function CoreValuesCarousel({ values }) {
  const PER_PAGE_DESKTOP = 3;
  const totalPagesDesktop = Math.ceil(values.length / PER_PAGE_DESKTOP);

  const [activeMobile, setActiveMobile] = useState(0);
  const [pageDesktop, setPageDesktop] = useState(0);
  const touchStartX = useRef(null);
  const timerRef = useRef(null);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveMobile((p) => (p + 1) % values.length);
      setPageDesktop((p) => (p + 1) % totalPagesDesktop);
    }, 4000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const goToMobile = (i) => { setActiveMobile(i); resetTimer(); };
  const goPrevMobile = () => goToMobile((activeMobile - 1 + values.length) % values.length);
  const goNextMobile = () => goToMobile((activeMobile + 1) % values.length);

  const goToDesktop = (i) => { setPageDesktop(i); resetTimer(); };
  const goPrevDesktop = () => goToDesktop((pageDesktop - 1 + totalPagesDesktop) % totalPagesDesktop);
  const goNextDesktop = () => goToDesktop((pageDesktop + 1) % totalPagesDesktop);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) goNextMobile();
    else if (diff < -40) goPrevMobile();
    touchStartX.current = null;
  };

  const desktopPages = Array.from({ length: totalPagesDesktop }, (_, i) =>
    values.slice(i * PER_PAGE_DESKTOP, (i + 1) * PER_PAGE_DESKTOP)
  );

  const Card = ({ v, idx }) => (
    <div className="bg-surface-container-lowest p-6 sm:p-8 lg:p-10 rounded-xl shadow-[0_20px_40px_rgba(20,37,136,0.04)] hover:-translate-y-2 transition-transform duration-300 h-full">
      <div className="flex items-start justify-between mb-5">
        <div className="w-12 h-12 lg:w-14 lg:h-14 bg-indigo-50 rounded-lg flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-2xl lg:text-3xl leading-none">{v.icon}</span>
        </div>
        <span className="text-[10px] font-black text-on-surface-variant/20 tracking-[0.2em] mt-1">
          {String(idx + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="font-heading text-xl sm:text-2xl text-primary mb-3 font-black tracking-tighter">
        {v.title}
      </h3>
      <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">
        {v.body}
      </p>
    </div>
  );

  return (
    <section className="bg-surface-container-low py-10 md:py-6">
      <div className="container mx-auto px-4 sm:px-10 lg:px-0">

        {/* ── Mobile: one-at-a-time slider ── */}
        <div className="sm:hidden">
          <div className="overflow-hidden" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeMobile * 100}%)` }}
            >
              {values.map((v, idx) => (
                <div key={v.title} className="w-full flex-shrink-0">
                  <Card v={v} idx={idx} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-4">
            <button onClick={goPrevMobile} className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-2xl">chevron_left</span>
            </button>
            <div className="flex gap-2">
              {values.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToMobile(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === activeMobile ? 'w-6 bg-primary' : 'w-1.5 bg-on-surface-variant/30'}`}
                />
              ))}
            </div>
            <button onClick={goNextMobile} className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-2xl">chevron_right</span>
            </button>
          </div>
        </div>

        {/* ── Desktop: 3-at-a-time paginated carousel ── */}
        <div className="hidden sm:block">
          {/* Nav controls — right aligned */}
          <div className="flex justify-end items-center gap-3 mb-6">
            <button
              onClick={goPrevDesktop}
              className="w-9 h-9 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary hover:bg-surface-container transition-all"
            >
              <span className="material-symbols-outlined text-xl leading-none">chevron_left</span>
            </button>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPagesDesktop }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToDesktop(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === pageDesktop ? 'w-6 bg-primary' : 'w-1.5 bg-on-surface-variant/30 hover:bg-on-surface-variant/60'}`}
                />
              ))}
            </div>
            <button
              onClick={goNextDesktop}
              className="w-9 h-9 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary hover:bg-surface-container transition-all"
            >
              <span className="material-symbols-outlined text-xl leading-none">chevron_right</span>
            </button>
          </div>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${pageDesktop * 100}%)` }}
            >
              {desktopPages.map((pageItems, pi) => (
                <div key={pi} className="grid grid-cols-3 gap-4 w-full flex-shrink-0 min-w-full">
                  {pageItems.map((v, i) => (
                    <Card key={v.title} v={v} idx={pi * PER_PAGE_DESKTOP + i} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── Specialties Section ──────────────────────────────────────────────────────
function SpecialtiesSection({ t }) {
  return (
    <section className="py-16 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 lg:mb-20 gap-6">
          <div className="max-w-2xl">
            {/* section heading → Raleway ExtraBold */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-primary mb-4 sm:mb-6">
              {t.heading}
            </h2>
            {/* body */}
            <p className="text-sm sm:text-base text-on-surface-variant">{t.body}</p>
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
              {/* subhead → Raleway */}
              <h3 className="font-heading text-xl sm:text-2xl mb-3 lg:mb-4 font-black tracking-tighter">
                {t.neuro.title}
              </h3>
              {/* body */}
              <p className="text-primary-fixed/80 mb-6 lg:mb-8 text-sm sm:text-base">
                {t.neuro.body}
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 lg:mb-8">
                {t.neuro.list.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm sm:text-base">
                    <span className="material-symbols-outlined text-sm text-secondary-fixed">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/department-services"
                className="mt-auto text-primary-fixed font-bold flex items-center gap-2 hover:gap-4 transition-all text-sm sm:text-base"
              >
                <span style={{ textDecoration: 'underline wavy', textUnderlineOffset: '4px' }}>{t.neuro.cta}</span>
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
              {/* subhead → Raleway */}
              <h3 className="font-heading text-xl sm:text-2xl text-primary mb-3 lg:mb-4 font-black tracking-tighter">
                {t.pain.title}
              </h3>
              {/* body */}
              <p className="text-on-surface-variant leading-relaxed mb-6 lg:mb-8 text-sm sm:text-base">
                {t.pain.body}
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 lg:mb-8">
                {t.pain.list.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm sm:text-base">
                    <span className="material-symbols-outlined text-sm text-primary">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/departments/pain-medicine"
                className="mt-auto text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all text-sm sm:text-base"
              >
                <span style={{ textDecoration: 'underline wavy', textUnderlineOffset: '4px' }}>{t.pain.cta}</span>
                <span className="material-symbols-outlined">trending_flat</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials Section ─────────────────────────────────────────────────────
function TestimonialsSection({ t }) {
  const [active, setActive] = useState(0);
  const touchStartX = useRef(null);
  const timerRef = useRef(null);

  const items = t.items;

  const next = () => setActive((i) => (i === items.length - 1 ? 0 : i + 1));
  const prev = () => setActive((i) => (i === 0 ? items.length - 1 : i - 1));

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 4000);
  };

  useEffect(() => {
    timerRef.current = setInterval(next, 4000);
    return () => clearInterval(timerRef.current);
  }, []);

  const handlePrev = () => { prev(); resetTimer(); };
  const handleNext = () => { next(); resetTimer(); };
  const handleDot  = (i) => { setActive(i); resetTimer(); };

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) handleNext();
    else if (diff < -40) handlePrev();
    touchStartX.current = null;
  };

  const Card = ({ item }) => (
    <div className="bg-on-primary-fixed-variant/40 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/5 flex flex-col h-full">
      <span className="material-symbols-outlined text-on-tertiary-container text-3xl lg:text-4xl mb-4 lg:mb-6">
        format_quote
      </span>
      {/* body */}
      <p className="text-on-primary text-sm sm:text-base leading-relaxed mb-6 lg:mb-8 flex-grow">
        "{item.quote}"
      </p>
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary-fixed rounded-full flex items-center justify-center font-bold text-primary shrink-0 text-sm">
          {item.initials}
        </div>
        <div>
          {/* subheading → Host Grotesk Regular */}
          <h4 className="font-subheading text-on-primary text-sm sm:text-base">{item.name}</h4>
          {/* label */}
          <p className="text-primary-fixed/60 text-xs">{item.role}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-primary py-16 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-container opacity-20 transform skew-x-12 translate-x-1/2" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 lg:mb-20 text-center">
          {/* section heading → Raleway ExtraBold */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-on-primary">
            {t.heading}
          </h2>
          {/* body */}
          <p className="text-primary-fixed/60 mt-4 text-sm sm:text-base">{t.sub}</p>
        </div>

        {/* Mobile: one-at-a-time slider */}
        <div className="sm:hidden">
          <div className="overflow-hidden" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {items.map((item) => (
                <div key={item.name} className="w-full flex-shrink-0">
                  <Card item={item} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={handlePrev} className="text-on-primary/70 hover:text-on-primary transition-colors">
              <span className="material-symbols-outlined text-2xl">chevron_left</span>
            </button>
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDot(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === active ? "bg-on-primary w-5" : "bg-on-primary/30 w-2"}`}
                />
              ))}
            </div>
            <button onClick={handleNext} className="text-on-primary/70 hover:text-on-primary transition-colors">
              <span className="material-symbols-outlined text-2xl">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Tablet + Desktop: grid */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {items.map((item) => (
            <Card key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Accreditation Section ────────────────────────────────────────────────────
function AccreditationSection({ t }) {
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
                {/* subheading → Host Grotesk Regular */}
                <span className="font-subheading text-xl sm:text-2xl text-primary">{t.badge}</span>
                {/* label */}
                <span className="text-xs text-on-surface-variant font-bold mt-2 text-center">{t.badgeSub}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="md:w-2/3 text-center md:text-left">
            {/* subheading → Host Grotesk Regular */}
            <h2 className="font-subheading text-xl sm:text-2xl text-primary mb-4 sm:mb-6">{t.heading}</h2>
            {/* body */}
            <p className="text-on-surface-variant leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">{t.body}</p>
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start">
              {t.badges.map((badge) => (
                <div key={badge} className="flex items-center gap-2 sm:gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  {/* label */}
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

// ─── Home Page (assembled) ────────────────────────────────────────────────────
export default function Home() {
  const { lang } = useLang();
  const t = homeTranslations[lang];

  return (
    <main className="pt-16 sm:pt-20 bg-surface text-on-surface font-body">
      <FontStyle />
      <HeroSection t={t.hero} />
      <CoreValuesCarousel values={t.hero.values} />
      <SpecialtiesSection t={t.specialties} />
      <TestimonialsSection t={t.testimonials} />
      <AccreditationSection t={t.accreditation} />
    </main>
  );
}
