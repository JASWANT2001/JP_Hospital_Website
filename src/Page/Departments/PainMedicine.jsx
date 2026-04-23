import { useState } from "react";
import { useLang, painMedicineTranslations } from "../../context/LanguageContext";
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
    <ul className="flex flex-col h-full divide-y divide-on-primary/20">
      {items.map((item, i) => (
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
            <p className="pb-3 text-sm sm:text-base text-on-primary/80 leading-relaxed">
              {item.desc}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function PainMedicine() {
  const { lang } = useLang();
  const t = painMedicineTranslations[lang];

  return (
    <div className="bg-surface font-body text-on-surface">
      <FontStyle />

      {/* Hero */}
      <header className="relative pt-28 sm:pt-32 pb-14 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Pain medicine department"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 60%' }}
            src="https://ik.imagekit.io/glvwzrukg/JP%20Webiste/pain%20dept%20image.jpeg"
          />
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-orange-500 font-bold tracking-widest uppercase text-xs">
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
          {/* Conditions */}
          <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl p-6 sm:p-8 border border-outline-variant/10 flex flex-col">
            <h3 className="font-subheading text-xl sm:text-2xl mb-5 sm:mb-6 text-primary flex items-center gap-3">
              <span className="material-symbols-outlined text-on-tertiary-container">healing</span>
              {t.conditionsSection.heading}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 flex-grow">
              {t.conditionsSection.items.map((condition) => (
                <div
                  key={condition}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-surface-container-low rounded-lg font-medium text-on-surface border border-outline-variant/10 text-sm sm:text-base"
                >
                  <span className="material-symbols-outlined text-on-tertiary-container flex-shrink-0" style={{ fontSize: "14px" }}>
                    check_circle
                  </span>
                  <span>{condition}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology */}
          <div className="lg:col-span-4 bg-primary text-on-primary rounded-xl p-6 sm:p-8 flex flex-col">
            <h3 className="font-subheading text-xl sm:text-2xl mb-5 sm:mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-on-tertiary-container">precision_manufacturing</span>
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
