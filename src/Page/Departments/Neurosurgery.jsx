import { useState } from "react";
import { useLang, neurosurgeryTranslations } from "../../context/LanguageContext";
import AppointmentBanner from "./AppointmentBanner";

const FontStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@800&family=Host+Grotesk:wght@400&display=swap');
    .font-heading    { font-family: 'Raleway', sans-serif;      font-weight: 800; }
    .font-subheading { font-family: 'Host Grotesk', sans-serif; font-weight: 400; }
  `}</style>
);

function TechAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <ul className="flex flex-col h-full divide-y divide-surface-container-high">
      {items.map((item, i) => (
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
            <p className="pb-3 text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {item.desc}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Neurosurgery() {
  const { lang } = useLang();
  const t = neurosurgeryTranslations[lang];

  return (
    <div className="bg-surface font-body text-on-surface">
      <FontStyle />

      {/* Hero */}
      <header className="relative pt-28 sm:pt-32 pb-14 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Neurosurgery department"
            className="w-full h-full object-cover object-right"
            src="https://ik.imagekit.io/glvwzrukg/JP%20Webiste/neurosurgery%20dept%20page.jpg"
          />
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex justify-start lg:justify-end">
          <div className="w-full lg:max-w-xl">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs">
              {t.hero.eyebrow}
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl text-primary mt-2 mb-4 sm:mb-6 tracking-tight">
              {t.hero.heading}
            </h1>
            <p className="text-sm sm:text-base text-on-surface-variant mb-8 sm:mb-10 leading-relaxed font-light">
              {t.hero.body}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href="tel:04343239923"
                className="border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-primary/5 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span className="material-symbols-outlined">call</span>
                {t.hero.call}
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Service Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 auto-rows-fr">
            {t.services.map((item) => (
              <div
                key={item.title}
                className="p-5 sm:p-6 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10"
              >
                <span className="material-symbols-outlined text-primary mb-3 sm:mb-4 block text-2xl">
                  {item.icon}
                </span>
                <h4 className="font-subheading text-xl sm:text-2xl mb-2">{item.title}</h4>
                <p className="text-on-surface-variant text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Advanced Technology Accordion */}
          <div className="lg:col-span-4 bg-surface-container-low rounded-xl p-6 sm:p-8 flex flex-col">
            <h3 className="font-subheading text-xl sm:text-2xl mb-5 sm:mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">precision_manufacturing</span>
              {t.techSection.heading}
            </h3>
            <div className="flex-1 flex flex-col">
              <TechAccordion items={t.techSection.items} />
            </div>
          </div>
        </div>

        <AppointmentBanner />
      </main>
    </div>
  );
}
