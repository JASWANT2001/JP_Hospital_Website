import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoSrc from '../Images/Logo.png';

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about-us', label: 'About Us' },
    { to: '/department-services', label: 'Departments' },
    { to: '/doctors', label: 'Doctors' },
    { to: '/patient-services', label: 'Patient Services' },
    { to: '/contact-us', label: 'Contact' },
    { to: '/blog', label: 'Blog' },
  ];

  const isActive = (to) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#f7f9fc] bg-opacity-90 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16 sm:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img
              src={logoSrc}
              alt="JP Neuro-Spine logo"
              className="h-9 w-auto sm:h-10 object-contain shrink-0"
            />
            <span className="text-lg sm:text-xl lg:text-2xl font-black text-[#142588] font-headline tracking-tight leading-tight">
              JP Neuro-Spine
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-8">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`font-manrope tracking-tight font-semibold text-sm xl:text-base pb-1 transition-colors whitespace-nowrap ${
                  isActive(to)
                    ? 'text-[#142588] border-b-2 border-[#142588]'
                    : 'text-slate-600 hover:text-[#142588] border-b-2 border-transparent'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/emergency"
className="hidden sm:inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md hover:bg-orange-600 transition"
            >
              Emergency 24/7
            </Link>
            <Link
              to="/book-appoinment"
              className="hidden sm:inline-flex bg-primary text-on-primary px-4 lg:px-6 py-2 sm:py-2.5 rounded-md font-semibold text-sm hover:bg-on-primary-fixed-variant transition-all duration-200 ease-in-out whitespace-nowrap"
            >
              Book Appointment
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md hover:bg-slate-100 transition-colors gap-[5px] shrink-0"
            >
              <span className={`block h-0.5 w-6 bg-[#142588] rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-0.5 w-6 bg-[#142588] rounded transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-[#142588] rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={() => setMenuOpen(false)} />

        <div
          className={`absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-[#f7f9fc] shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 h-16 sm:h-20 border-b border-slate-100 shrink-0">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="JP Neuro-Spine logo"
                className="h-8 w-auto object-contain shrink-0"
              />
              <span className="text-lg font-black text-[#142588] font-headline tracking-tight">
                JP Neuro-Spine
              </span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-slate-100 transition-colors"
            >
              <span className="material-symbols-outlined text-slate-600 text-xl">close</span>
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 overflow-y-auto py-4 px-4">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-lg font-manrope font-semibold text-[15px] transition-colors mb-1 ${
                  isActive(to)
                    ? 'bg-[#142588]/10 text-[#142588]'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-[#142588]'
                }`}
              >
                {isActive(to) && (
                  <span className="w-1 h-5 bg-[#142588] rounded-full shrink-0" />
                )}
                {label}
              </Link>
            ))}
          </nav>

          {/* Drawer Footer CTAs */}
          <div className="px-6 py-6 border-t border-slate-100 flex flex-col gap-3 shrink-0">
            <Link
              to="/book-appoinment"
              className="bg-primary text-on-primary px-6 py-3 rounded-md font-semibold text-sm text-center hover:bg-on-primary-fixed-variant transition-all duration-200"
            >
              Book Appointment
            </Link>
            <Link
              to="/emergency"
              className="flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-orange-600 transition"
            >
              <span className="material-symbols-outlined text-base">call</span>
              Emergency 24/7
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}