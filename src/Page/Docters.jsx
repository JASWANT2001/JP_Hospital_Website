import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { useLang, doctorsTranslations } from "../context/LanguageContext";

const Docters = () => {
  const { lang } = useLang();
  const t = doctorsTranslations[lang];
  const jay = t.jayakumar;
  const pra = t.prasanna;

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-primary scroll-smooth">
      <Navbar />

      <main className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 container mx-auto">

        {/* ── Side-by-Side Specialists Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">

          {/* ══ LEFT: Dr. Jayakumar P ══ */}
          <section className="flex flex-col gap-5">

            {/* Photo */}
            <div className="w-full max-w-sm mx-auto lg:max-w-none lg:max-h-64 overflow-hidden rounded-2xl">
              <div className="h-[280px] sm:h-[320px] lg:h-[360px] rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/20">
                <img
                  src="https://ik.imagekit.io/glvwzrukg/JP%20Webiste/dr.%20jayakumar.jpeg"
                  alt="Dr. Jayakumar P"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-5">
              <div>
                <span className="inline-flex px-3 py-1 bg-primary-fixed text-on-primary-fixed text-xs font-black tracking-[0.2em] uppercase rounded-full mb-3">
                  {jay.specialty}
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight mb-2 tracking-tighter">
                  {jay.name}
                </h2>
                <p className="text-sm sm:text-base font-semibold text-on-surface-variant/80 leading-relaxed">
                  {jay.quals}
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-outline-variant/20">
                <div className="flex items-center gap-3">
                  <span className="font-heading text-3xl sm:text-4xl text-secondary leading-none">11</span>
                  <div className="h-8 w-px bg-outline-variant/20"></div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-tight whitespace-pre-line">
                    {jay.yearsLabel}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{jay.recognitionLabel}</p>
                    <p className="text-sm sm:text-base font-bold text-on-surface">{jay.awardTitle}</p>
                    <p className="text-xs text-slate-500 font-medium">{jay.awardPlace}</p>
                  </div>
                </div>
              </div>

              {/* Professional Background */}
              <div className="p-5 bg-surface-container-low rounded-2xl border border-outline-variant/10 shadow-sm">
                <h3 className="font-subheading text-xl sm:text-2xl text-primary mb-3 flex items-center gap-3">
                  <span className="material-symbols-outlined text-xl">history_edu</span>
                  {jay.backgroundTitle}
                </h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{jay.pastLabel}</p>
                <p className="text-sm sm:text-base text-on-surface-variant font-semibold leading-relaxed">
                  {jay.pastText}
                </p>
              </div>

              {/* Specialisations */}
              <div className="p-5 bg-surface-container-low rounded-2xl border border-outline-variant/10 shadow-sm">
                <h3 className="font-subheading text-xl sm:text-2xl text-primary mb-3 flex items-center gap-3">
                  <span className="material-symbols-outlined text-xl">neurology</span>
                  {jay.expertiseTitle}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {jay.expertise.map((s) => (
                    <span key={s} className="px-3 py-1.5 bg-primary-fixed/40 text-primary rounded-lg text-xs font-bold border border-primary/10">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* OPD + CTA */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex items-center gap-4 px-5 py-4 bg-surface-container-low rounded-xl border border-outline-variant/15 flex-1">
                  <span className="material-symbols-outlined text-secondary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">{jay.opdLabel}</p>
                    {jay.opdTimes.map((time) => (
                      <p key={time} className="text-sm sm:text-base font-bold text-on-surface">{time}</p>
                    ))}
                  </div>
                </div>
                <a
                  href="tel:04343239923"
                  className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-primary/25 hover:-translate-y-0.5 hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3 w-full sm:w-fit text-sm sm:text-base"
                >
                  <span className="material-symbols-outlined">call</span>
                  {jay.bookBtn}
                </a>
              </div>
            </div>
          </section>

          {/* ══ RIGHT: Dr. Prasanna Vani V ══ */}
          <section className="flex flex-col gap-5" id="specialist-prasanna">

            {/* Photo */}
            <div className="w-full max-w-sm mx-auto lg:max-w-none lg:max-h-64 overflow-hidden rounded-2xl">
              <div className="h-[280px] sm:h-[320px] lg:h-[360px] rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/20">
                <img
                  src="https://ik.imagekit.io/glvwzrukg/JP%20Webiste/dr.prasanna%20vani%20.jpeg"
                  alt="Dr. Prasanna Vani V"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-5">
              <div>
                <span className="inline-flex px-3 py-1 bg-[#fff2e6] text-[#723600] text-xs font-black tracking-[0.2em] uppercase rounded-full mb-3">
                  {pra.specialty}
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight mb-2 tracking-tighter">
                  {pra.name}
                </h2>
                <p className="text-sm sm:text-base font-semibold text-on-surface-variant/80 leading-relaxed">
                  {pra.quals}
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-outline-variant/20">
                <div className="flex items-center gap-3">
                  <span className="font-heading text-3xl sm:text-4xl text-secondary leading-none">11</span>
                  <div className="h-8 w-px bg-outline-variant/20"></div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-tight whitespace-pre-line">
                    {pra.yearsLabel}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{pra.academicLabel}</p>
                    <p className="text-sm sm:text-base font-bold text-on-surface">{pra.goldMedal}</p>
                    <p className="text-xs text-slate-500 font-medium">{pra.goldMedalSub}</p>
                  </div>
                </div>
              </div>

              {/* Employment & Membership */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-surface-container-low rounded-2xl border border-outline-variant/10 shadow-sm">
                  <h4 className="font-subheading text-xl sm:text-2xl text-primary mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">history_edu</span>
                    {pra.pastTitle}
                  </h4>
                  <div className="space-y-3">
                    {pra.pastItems.map((item) => (
                      <p key={item.place} className="text-sm sm:text-base text-on-surface-variant font-medium">
                        {item.label}: <span className="text-primary font-bold">{item.place}</span>
                      </p>
                    ))}
                  </div>
                </div>
                <div className="p-5 bg-surface-container-low rounded-2xl border border-outline-variant/10 shadow-sm">
                  <h4 className="font-subheading text-xl sm:text-2xl text-primary mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">groups</span>
                    {pra.membershipsTitle}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["ISSP", "ISA", "SOPC"].map((m) => (
                      <span key={m} className="px-3 py-1 bg-white rounded-md text-xs font-bold text-primary border border-outline-variant/20 shadow-sm">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* OPD + CTA */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex items-center gap-4 px-5 py-4 bg-surface-container-low rounded-xl border border-outline-variant/15 flex-1">
                  <span className="material-symbols-outlined text-secondary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>wb_sunny</span>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">{pra.opdLabel}</p>
                    {pra.opdTimes.map((time) => (
                      <p key={time} className="text-sm sm:text-base font-bold text-on-surface">{time}</p>
                    ))}
                  </div>
                </div>
                <a
                  href="tel:04343239923"
                  className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-primary/25 hover:-translate-y-0.5 hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3 w-full sm:w-fit text-sm sm:text-base"
                >
                  <span className="material-symbols-outlined">call</span>
                  {pra.bookBtn}
                </a>
              </div>

              {/* Awards */}
              <div className="p-5 bg-[#fffcf8] rounded-2xl border border-[#ffdcc6]/50 shadow-sm">
                <h4 className="font-subheading text-xl sm:text-2xl text-tertiary mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">military_tech</span>
                  {pra.awardsTitle}
                </h4>
                <ul className="space-y-3 list-disc list-outside pl-5">
                  {pra.awards.map((award, i) => (
                    <li key={i} className="text-sm sm:text-base text-on-surface leading-snug">
                      {award}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Publications */}
              <div className="p-5 bg-surface-container-low rounded-2xl border border-outline-variant/10 shadow-sm">
                <h4 className="font-subheading text-xl sm:text-2xl text-primary mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">library_books</span>
                  {pra.publicationsTitle}
                </h4>
                <ul className="space-y-4">
                  {pra.publications.map(({ num, authors, title, journal }) => (
                    <li key={num} className="flex gap-3">
                      <span className="text-primary text-xs pt-1 flex-shrink-0">{num}</span>
                      <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                        <span className="text-on-surface">{authors}</span>{" "}
                        {title}{" "}
                        <span className="italic">{journal}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Docters;
