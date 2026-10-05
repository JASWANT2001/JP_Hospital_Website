import { useLang } from '../context/LanguageContext';

const InstagramGlyph = ({ id }) => (
  <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true">
    <defs>
      <radialGradient id={id} cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect x="1.5" y="1.5" width="21" height="21" rx="6" fill={`url(#${id})`} />
    <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="#fff" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="3.6" fill="none" stroke="#fff" strokeWidth="1.8" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="#fff" />
  </svg>
);

const accounts = [
  {
    key: 'neurospine',
    id: 'ig-neurospine',
    name: 'JP Neuro Spine Hospital',
    handle: '@jpneurospine',
    href: 'https://www.instagram.com/jpneurospine',
    prompt: {
      en: 'Your brain and spine health matters. Follow us on Instagram.',
      ta: 'உங்கள் மூளை மற்றும் முதுகெலும்பு ஆரோக்கியம் முக்கியம். எங்களை Instagram-ல் பின்தொடருங்கள்.',
    },
  },
  {
    key: 'pain',
    id: 'ig-pain',
    name: 'JP Pain Management',
    handle: '@jppainmanagement',
    href: 'https://www.instagram.com/jppainmanagement',
    prompt: {
      en: 'Your pain deserves answers. Follow us on Instagram.',
      ta: 'உங்கள் வலிக்கு விடை தேவை. எங்களை Instagram-ல் பின்தொடருங்கள்.',
    },
  },
];

export default function InstagramFollow({ only }) {
  const { lang } = useLang();
  const shown = only ? accounts.filter((a) => a.key === only) : accounts;

  if (!shown.length) return null;

  return (
    <div className="flex flex-col gap-4 w-full">
      {shown.map(({ id, name, handle, href, prompt }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} on Instagram`}
          className="group block rounded-2xl bg-white px-5 py-5 shadow-[0_8px_30px_rgba(0,0,0,0.18)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.28)] transition-all duration-300"
        >
          {/* Header — logo + account */}
          <div className="flex items-center gap-3.5">
            <span className="w-11 h-11 shrink-0">
              <InstagramGlyph id={id} />
            </span>
            <span className="flex flex-col min-w-0">
              <span className="font-bold text-[#06155F] text-[0.95rem] leading-snug">
                {name}
              </span>
              <span className="text-[#d6249f] text-[0.75rem] font-semibold leading-snug mt-0.5">
                {handle}
              </span>
            </span>
          </div>

          {/* Prompt — full card width */}
          <p className="mt-4 text-slate-600 text-[0.85rem] leading-[1.6]">
            {prompt[lang] ?? prompt.en}
          </p>

          {/* Follow cue */}
          <span className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3.5">
            <span className="text-[0.8rem] font-bold text-[#06155F]">
              {lang === 'ta' ? 'Instagram-ல் பின்தொடரவும்' : 'Follow on Instagram'}
            </span>
            <span
              className="material-symbols-outlined text-[#d6249f] group-hover:translate-x-0.5 transition-transform"
              style={{ fontSize: '20px' }}
            >
              arrow_forward
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}
