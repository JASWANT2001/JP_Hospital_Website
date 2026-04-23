import { Link } from "react-router-dom";
import { useLang, footerTranslations } from "../context/LanguageContext";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socials = [
  { icon: <FacebookIcon />, label: "Facebook", href: "#" },
  { icon: <InstagramIcon />, label: "Instagram", href: "#" },
  { icon: <TwitterIcon />, label: "Twitter / X", href: "#" },
  { icon: <YoutubeIcon />, label: "YouTube", href: "#" },
  { icon: <LinkedInIcon />, label: "LinkedIn", href: "#" },
];

export default function Footer() {
  const { lang } = useLang();
  const t = footerTranslations[lang];

  return (
    <footer className="bg-[#0d1d6e] text-white font-inter">

      {/* Main Footer */}
      <div className="w-full px-5 sm:px-10 xl:px-20 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">

        {/* Brand Column */}
        <div className="flex flex-col gap-5">
          <div>
            <span className="font-raleway text-base text-white tracking-tight leading-snug font-extrabold block">
              JP Neuro Spine Hospital and
            </span>
            <span className="font-raleway text-base text-white tracking-tight leading-snug font-extrabold block">
              Pain Management Centre
            </span>
          </div>
          <div className="w-8 h-0.5 bg-[#ff9800]/60" />
          <p className="text-[0.82rem] text-white/50 leading-[1.8]">
            {t.tagline}
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-5">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/70">
            {t.quickLinks.heading}
          </h4>
          <div className="w-8 h-0.5 bg-[#ff9800]/60" />
          <ul className="flex flex-col gap-0.5">
            {t.quickLinks.links.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-[0.82rem] text-white/50 hover:text-white py-1.5 block transition-all duration-150 hover:translate-x-1"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-5">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/70">
            {t.services.heading}
          </h4>
          <div className="w-8 h-0.5 bg-[#ff9800]/60" />
          <ul className="flex flex-col gap-0.5">
            {t.services.links.map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="text-[0.82rem] text-white/50 hover:text-white py-1.5 block transition-all duration-150 hover:translate-x-1"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-5">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/70">
            {t.contact.heading}
          </h4>
          <div className="w-8 h-0.5 bg-[#ff9800]/60" />
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#ff9800] shrink-0 mt-0.5" style={{ fontSize: "16px" }}>location_on</span>
              <span className="text-[0.82rem] text-white/50 leading-[1.75]">
                9/1, West Link Road,<br />
                Co-operative Colony, via K Theatre Road,<br />
                Near ICICI Bank, Krishnagiri – 635001, Tamil Nadu
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#ff9800] shrink-0" style={{ fontSize: "16px" }}>call</span>
              <a href="tel:04343239923" className="text-[0.82rem] text-white/50 hover:text-white transition-colors">
                04343-239923
              </a>
            </li>
            {/* <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#ff9800] shrink-0" style={{ fontSize: "16px" }}>mail</span>
              <a href="mailto:contact@jpneuro.com" className="text-[0.82rem] text-white/50 hover:text-white transition-colors">
                contact@jpneuro.com
              </a>
            </li> */}
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#ff9800] shrink-0" style={{ fontSize: "16px" }}>schedule</span>
              <span className="text-[0.82rem] text-white/50">{t.contact.emergency}</span>
            </li>
          </ul>
          <a
            href="https://www.google.com/maps/search/?api=1&query=9%2F1+West+Link+Road%2C+Co-operative+Colony%2C+via+K+Theatre+Road%2C+near+ICICI+Bank%2C+Krishnagiri-635001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[0.75rem] font-semibold text-[#ff9800] hover:text-orange-300 transition-colors"
          >
            <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>open_in_new</span>
            {t.contact.viewMap}
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.08] w-full px-5 sm:px-10 xl:px-20 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.72rem] text-white/30 text-center sm:text-left">
        <p>{t.bottom.copyright}</p>
        <div className="flex items-center gap-5 flex-wrap justify-center">
          <span className="flex items-center gap-1.5 text-white/40">
            <span className="material-symbols-outlined text-[#ff9800]" style={{ fontSize: "14px" }}>verified</span>
            {t.bottom.cea}
          </span>
          <span className="text-white/15">|</span>
          <Link to="/privacy-policy" className="hover:text-white/70 transition-colors">{t.bottom.privacy}</Link>
          <span className="text-white/15">|</span>
          <Link to="/privacy-policy" className="hover:text-white/70 transition-colors">{t.bottom.terms}</Link>
        </div>
      </div>

    </footer>
  );
}
