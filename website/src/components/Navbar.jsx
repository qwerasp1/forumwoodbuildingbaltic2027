import { useEffect, useState } from 'react';
import { useLang, LANGUAGES } from '../i18n';
import './Navbar.css';

const NAV_ITEMS = [
  { key: 'home',         href: '#home' },
  { key: 'about',        href: '#about' },
  { key: 'program',      href: '#program' },
  { key: 'speakers',     href: '#speakers' },
  { key: 'exhibition',   href: '#exhibition' },
  { key: 'registration', href: '#registration' },
  { key: 'destination',  href: '#destination' },
  { key: 'contact',      href: '#contact' },
];

export default function Navbar() {
  const { lang, setLang, c } = useLang();
  const [scrolled, setScrolled]           = useState(false);
  const [menuOpen, setMenuOpen]           = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const id = NAV_ITEMS[i].href.slice(1);
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActiveSection(id); break; }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Escape closes the mobile menu
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = e => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const go = (href) => {
    setMenuOpen(false);
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} aria-label="Main navigation">
      <div className="navbar__container">
        <a className="navbar__logo" href="#home" onClick={e => { e.preventDefault(); go('#home'); }} aria-label="Forum Wood Building Baltic 2027">
          <img src="/fwbb_logo.png" alt="Forum Wood Building Baltic" className="navbar__logo-img" />
          <span className="navbar__logo-sep" aria-hidden="true" />
          <span className="navbar__logo-year">2027</span>
        </a>

        {/* Desktop nav */}
        <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`} id="navbar-menu">
          {NAV_ITEMS.map(({ key, href }) => (
            <li key={href}>
              <a href={href}
                className={`navbar__link${activeSection === href.slice(1) ? ' navbar__link--active' : ''}`}
                onClick={e => { e.preventDefault(); go(href); }}>
                {c.nav[key]}
              </a>
            </li>
          ))}
          <li>
            <a href="#registration" className="btn btn--brand navbar__cta" onClick={e => { e.preventDefault(); go('#registration'); }}>
              {c.nav.register}
            </a>
          </li>
        </ul>

        {/* Right cluster — always visible at every breakpoint */}
        <div className="navbar__right">
          <div className="navbar__lang" role="group" aria-label={c.nav.language}>
            {LANGUAGES.map(({ code, label, title }) => (
              <button
                key={code}
                type="button"
                className={`navbar__lang-btn${lang === code ? ' navbar__lang-btn--active' : ''}`}
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                title={title}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className={`navbar__menu-btn${menuOpen ? ' navbar__menu-btn--open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-expanded={menuOpen}
            aria-controls="navbar-menu"
          >
            <span className="navbar__menu-icon" aria-hidden="true">
              <span /><span /><span />
            </span>
            <span className="navbar__menu-label">{menuOpen ? c.nav.close : c.nav.menu}</span>
          </button>
        </div>

        {menuOpen && (
          <div className="navbar__backdrop" onClick={() => setMenuOpen(false)} aria-hidden="true" />
        )}
      </div>
    </nav>
  );
}
