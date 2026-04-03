import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { useNavigate } from "react-router-dom";

const Docters = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-primary scroll-smooth">
      <Navbar />

      <main className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 container mx-auto space-y-16 sm:space-y-20 lg:space-y-24">

        {/* ── Specialist 1: Dr. Jayakumar P ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* Photo Column */}
          <div className="lg:col-span-5 max-w-sm sm:max-w-md mx-auto lg:max-w-none lg:mx-0 w-full">
            <div className="aspect-[3/4] bg-surface-container-highest rounded-2xl overflow-hidden editorial-mask shadow-2xl flex items-center justify-center border-2 border-dashed border-outline-variant/30">
              <div className="text-center p-8">
                <span className="material-symbols-outlined text-5xl lg:text-6xl text-outline-variant/50 mb-4">add_a_photo</span>
                <p className="text-sm font-bold text-outline-variant uppercase tracking-widest">Photo to be added</p>
              </div>
            </div>
          </div>

          {/* Info Column */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div>
              <span className="inline-flex px-3 py-1 bg-primary-fixed text-on-primary-fixed text-[10px] font-black tracking-[0.2em] uppercase rounded-full mb-3">
                Neurosurgery
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-headline font-extrabold text-primary leading-tight mb-2 tracking-tighter">
                Dr. Jayakumar P
              </h2>
              <p className="text-base sm:text-lg font-headline font-semibold text-on-surface-variant/80 leading-relaxed">
                M.B.B.S., M. Ch. Neurosurgery (Madras Medical College)
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 py-4 sm:py-5 border-y border-outline-variant/20">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-4xl sm:text-5xl font-headline font-black text-secondary leading-none">11</span>
                <div className="h-8 sm:h-10 w-px bg-outline-variant/20"></div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-tight">
                  Years of<br />Experience
                </span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="material-symbols-outlined text-tertiary text-3xl sm:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Recognition</p>
                  <p className="text-sm font-bold text-on-surface">Best Doctor Award</p>
                  <p className="text-xs text-slate-500 font-medium">Dharmapuri Medical College</p>
                </div>
              </div>
            </div>

            {/* Professional Background */}
            <div className="p-5 sm:p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10 shadow-sm">
              <h3 className="font-headline font-bold text-primary mb-3 sm:mb-4 flex items-center gap-3 text-sm sm:text-base">
                <span className="material-symbols-outlined text-xl">history_edu</span>
                Professional Background
              </h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Past Employment</p>
              <p className="text-sm text-on-surface-variant font-semibold leading-relaxed">
                Assistant Professor at Institute of Neurosurgery, Madras Medical College
              </p>
            </div>

            {/* Specialisations */}
            <div className="p-5 sm:p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10 shadow-sm">
              <h3 className="font-headline font-bold text-primary mb-3 sm:mb-4 flex items-center gap-3 text-sm sm:text-base">
                <span className="material-symbols-outlined text-xl">neurology</span>
                Areas of Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Brain Tumour Surgery", "Spine Surgery", "Endoscopic Neurosurgery", "Trauma Surgery", "Peripheral Nerve Surgery"].map((s) => (
                  <span key={s} className="px-3 py-1.5 bg-primary-fixed/40 text-primary rounded-lg text-xs font-bold border border-primary/10">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* OPD + CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex items-center gap-4 px-5 py-4 bg-surface-container-low rounded-xl border border-outline-variant/15 flex-1 sm:flex-none">
                <span className="material-symbols-outlined text-secondary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">OPD Availability</p>
                  <p className="text-sm font-bold text-on-surface">Mon – Sat &nbsp;·&nbsp; 4 PM – 9 PM</p>
                  <p className="text-sm font-bold text-on-surface">Sun &nbsp;·&nbsp; 9 AM – 1 PM</p>
                </div>
              </div>
              <button
                onClick={() => navigate("/book-appoinment")}
                className="bg-primary text-white px-8 sm:px-12 py-3 sm:py-4 rounded-xl font-headline font-bold shadow-lg shadow-primary/25 hover:-translate-y-0.5 hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3 sm:gap-4 w-full sm:w-fit"
              >
                Book Consultation
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>

        {/* ── Decorative Divider ── */}
        <div className="relative py-4 sm:py-8">
          <div aria-hidden="true" className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-outline-variant/20"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-surface px-4 text-outline-variant/40">
              <span className="material-symbols-outlined text-xl">clinical_notes</span>
            </span>
          </div>
        </div>

        {/* ── Specialist 2: Dr. Prasanna Vani V ── */}
        <section className="flex flex-col gap-8 lg:gap-10" id="specialist-prasanna">

          {/* ── Row 1: Photo (left) + Name / Bio / Stats / CTA (right) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* Photo Column */}
            <div className="lg:col-span-5 max-w-sm sm:max-w-md mx-auto lg:max-w-none lg:mx-0 w-full">
              <div className="aspect-[4/5] bg-surface-container-highest rounded-2xl overflow-hidden editorial-mask shadow-2xl flex items-center justify-center border-2 border-dashed border-outline-variant/30">
                <div className="text-center p-8">
                  <span className="material-symbols-outlined text-5xl lg:text-6xl text-outline-variant/50 mb-4">add_a_photo</span>
                  <p className="text-sm font-bold text-outline-variant uppercase tracking-widest">Photo to be added</p>
                </div>
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div>
                <span className="inline-flex px-3 py-1 bg-[#fff2e6] text-[#723600] text-[10px] font-black tracking-[0.2em] uppercase rounded-full mb-3">
                  Pain Medicine &amp; Critical Care
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-headline font-extrabold text-primary leading-tight mb-2 tracking-tighter">
                  Dr. Prasanna Vani V
                </h2>
                <p className="text-base sm:text-lg font-headline font-semibold text-on-surface-variant/80 leading-relaxed">
                  M.B.B.S., M.D.( Anaesthesiology, critical care and Pain), C.C.E.P.C., F.I.P.M, E.D.P.M.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 py-4 sm:py-5 border-y border-outline-variant/20">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="text-4xl sm:text-5xl font-headline font-black text-secondary leading-none">11</span>
                  <div className="h-8 sm:h-10 w-px bg-outline-variant/20"></div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-tight">
                    Years of<br />Experience
                  </span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="material-symbols-outlined text-tertiary text-3xl sm:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Academic Merit</p>
                    <p className="text-sm font-bold text-on-surface">Gold Medalist</p>
                    <p className="text-xs text-slate-500 font-medium">MD (Anaesthesiology)</p>
                  </div>
                </div>
              </div>

              {/* Employment & Membership */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-surface-container-low rounded-2xl border border-outline-variant/10 shadow-sm">
                  <h4 className="font-headline font-bold text-primary mb-3 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">history_edu</span>
                    Past Employment
                  </h4>
                  <div className="space-y-3">
                    <p className="text-xs text-on-surface-variant font-medium">
                      Senior Resident: <span className="text-primary font-bold">AIIMS, New Delhi</span>
                    </p>
                    <p className="text-xs text-on-surface-variant font-medium">
                      Asst. Professor: <span className="text-primary font-bold">Cancer Institute, Adyar</span>
                    </p>
                  </div>
                </div>
                <div className="p-5 bg-surface-container-low rounded-2xl border border-outline-variant/10 shadow-sm">
                  <h4 className="font-headline font-bold text-primary mb-3 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">groups</span>
                    Memberships
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["ISSP", "ISA", "SOPC"].map((m) => (
                      <span key={m} className="px-3 py-1 bg-white rounded-md text-[10px] font-bold text-primary border border-outline-variant/20 shadow-sm">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* OPD + CTA grouped */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex items-center gap-4 px-5 py-4 bg-surface-container-low rounded-xl border border-outline-variant/15 flex-1 sm:flex-none">
                  <span className="material-symbols-outlined text-secondary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">OPD Availability</p>
                    <p className="text-sm font-bold text-on-surface">Mon – Fri &nbsp;·&nbsp; 10 AM – 1 PM</p>
                  </div>
                </div>
                <button
                  onClick={() => navigate("/book-appoinment")}
                  className="bg-primary text-white px-8 sm:px-12 py-3 sm:py-4 rounded-xl font-headline font-bold shadow-lg shadow-primary/25 hover:-translate-y-0.5 hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3 sm:gap-4 w-full sm:w-fit"
                >
                  Book Consultation
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* ── Row 2: Awards (left) | Publications (right) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">

            {/* Prestigious Awards — LEFT */}
            <div className="p-5 sm:p-6 bg-[#fffcf8] rounded-2xl border border-[#ffdcc6]/50 shadow-sm h-full">
              <h4 className="font-headline font-bold text-tertiary mb-4 sm:mb-5 flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider">
                <span className="material-symbols-outlined text-lg">military_tech</span>
                Prestigious Awards
              </h4>
              <ul className="space-y-3">
                {[
                  "Gold Medalist at M.D. Anaesthesia examinations conducted by Tamilnadu Dr. M.G.R. Medical University in 2014.",
                  "Best research Paper award at Health Research Methodology workshop conducted by St. Johns Medical College in 2017.",
                  "Best Paper presentation award given at Krishnagiri Hosur CME in 2024.",
                  "Young Speaker award given at National conference of Society of Oncoanaesthesia and Perioperative Care in 2024.",
                  "Invited faculty for ISACON national to be a pannelist in newer horizons in perioperative cancer care in 2018.",
                  "Expert faculty in Tamilnadu state ISA 2025.",
                  "Expert faculty at Pain workshop conducted by Society of Oncoanaesthesia and Perioperative Care in the national conference at Chennai in 2025.",
                  "Invited faculty at TN state ISA meet in 2024 at Thanjavur.",
                  "Felicitated by Rotary Cancer Research Foundation for a project on prehabilitation in Ovarian Cancer patients in 2025.",
                  "Awarded the Annacharya Lokapur Foundation award for the best paper in Clinical research for the Development and pilot study to validate an headache clinical decision support tool by the Indian Society of Study of Pain at the national conference ISSPCON at Hyderabad in 2026.",
                ].map((award, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-on-surface leading-snug">
                    <span className="text-tertiary pt-0.5 flex-shrink-0">●</span>
                    {award}
                  </li>
                ))}
              </ul>
            </div>

            {/* Publications — RIGHT */}
            <div className="p-5 sm:p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10 shadow-sm h-full">
              <h4 className="font-headline font-bold text-primary mb-4 sm:mb-5 flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider">
                <span className="material-symbols-outlined text-lg">library_books</span>
                Publications
              </h4>
              <ul className="space-y-4 sm:space-y-5">
                {[
                  {
                    num: "01",
                    authors: "Prasanna Vani Vanamail, Kalpana Balakrishnan.",
                    title: "Nitrogen gas embolism as a potential complication of cryosurgery for bone tumours.",
                    journal: "Anaesthesia Cases/ 2017- 0244/ISSN 2396-8397",
                  },
                  {
                    num: "02",
                    authors: "Sundararajan L, Vanamail Prasanna Vani.",
                    title: "A comparative study of levobupivacaine and rac-bupivacaine for caudal analgesia in pediatric subumblical surgeries.",
                    journal: "J. Evolution Med. Dent. Sci. 2018;7(11):0000-0000, DOI:10.14260/jemds/2018/0000",
                  },
                  {
                    num: "03",
                    authors: "Vani Vanamail, P., & Balakrishnan, K.",
                    title: "Perioperative management of a patient with bleomycin lung injury and on dabigatran treatment for retro-peritoneal lymph node dissection: A case report.",
                    journal: "Indian Journal of Case Reports, 5(3), 289-291.",
                  },
                  {
                    num: "04",
                    authors: "Vanamail PV, Dash R, Balakrishnan K.",
                    title: "A retrospective analysis of the presentation, outcomes and determinants of severity of postoperative pneumonia in upper abdominal oncological surgeries.",
                    journal: "Indian J Respir Care 2020;9:52-7",
                  },
                  {
                    num: "05",
                    authors: "Prasanna Vani Vanamail, Radhika Dash, Kalpana Balakrishnan, & Thendral Edwin. (2021).",
                    title: "Recurrent pulmonary thromboembolism during radical cystectomy: A case report.",
                    journal: "Indian Journal of Case Reports, 260-262.",
                  },
                  {
                    num: "06",
                    authors: "Vanamail PV, Balakrishnan K, Prahlad S, Chockalingam P, Dash R, Soundararajan DK.",
                    title: "Ultrasonographic Assessment of Diaphragmatic Inspiratory Amplitude and Its Association with Postoperative Pulmonary Complications in Upper Abdominal Surgery: A Prospective, Longitudinal, Observational Study.",
                    journal: "Indian J Crit Care Med 2021; 25 (9):1031-1039.",
                  },
                ].map(({ num, authors, title, journal }) => (
                  <li key={num} className="flex gap-3 sm:gap-4">
                    <span className="text-primary font-bold text-xs pt-1 flex-shrink-0">{num}</span>
                    <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                      <span className="text-on-surface font-bold">{authors}</span>{" "}
                      {title}{" "}
                      <span className="italic">{journal}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Docters;
