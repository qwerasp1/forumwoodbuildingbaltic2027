import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Program',      href: '#program' },
  { label: 'Speakers',     href: '#speakers' },
  { label: 'Exhibition',   href: '#exhibition' },
  { label: 'Registration', href: '#registration' },
  { label: 'Destination',  href: '#destination' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]           = useState(false);
  const [menuOpen, setMenuOpen]           = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [lang, setLang]                   = useState('EN');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const ids = navLinks.map(l => l.href.slice(1));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 120) { setActiveSection(ids[i]); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href) => {
    setMenuOpen(false);
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar__container">
        <a className="navbar__logo" href="#home" onClick={e => { e.preventDefault(); go('#home'); }} aria-label="Forum Wood Building Baltic 2027">
          {/* Black logo on white navbar — no CSS filter needed */}
          <img src="/fwbb_logo.png" alt="Forum Wood Building Baltic" className="navbar__logo-img" />
          <span className="navbar__logo-sep" aria-hidden="true" />
          <span className="navbar__logo-year">2027</span>
        </a>

        <button className={`navbar__hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(v => !v)}
          aria-expanded={menuOpen} aria-controls="navbar-menu" aria-label="Toggle menu">
          <span /><span /><span />
        </button>

        <ul id="navbar-menu" className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`} role="menubar">
          {navLinks.map(({ label, href }) => (
            <li key={href} role="none">
              <a href={href} role="menuitem"
                className={`navbar__link${activeSection === href.slice(1) ? ' navbar__link--active' : ''}`}
                onClick={e => { e.preventDefault(); go(href); }}>
                {label}
              </a>
            </li>
          ))}
          <li role="none">
            <a href="#registration" className="btn btn--brand navbar__cta" onClick={e => { e.preventDefault(); go('#registration'); }}>
              Register
            </a>
          </li>
          <li role="none" className="navbar__lang-item">
            <span className="navbar__lang">
              <button
                className={`navbar__lang-btn${lang === 'EN' ? ' navbar__lang-btn--active' : ''}`}
                onClick={() => setLang('EN')}
                aria-pressed={lang === 'EN'}
              >EN</button>
              <span className="navbar__lang-sep" aria-hidden="true">|</span>
              <button
                className={`navbar__lang-btn${lang === 'ET' ? ' navbar__lang-btn--active' : ''}`}
                onClick={() => setLang('ET')}
                aria-pressed={lang === 'ET'}
              >ET</button>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
