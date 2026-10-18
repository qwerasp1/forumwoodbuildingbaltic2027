import './Footer.css';

const partners = [
  { src:'/taltech_logo.png',                            alt:'TalTech',                  href:'https://taltech.ee/en/',          square: false },
  { src:'/eka_logo.png',                                alt:'Estonian Academy of Arts', href:'https://www.artun.ee/en/home/',   square: false },
  { src:'/Forum-Holzbau.png',                           alt:'Forum Holzbau',            href:'https://forum-holzbau.com/de',    square: true  },
  { src:'/woodhouse-estonia_logo_green_CMYK_print.png', alt:'Woodhouse Estonia',        href:'https://woodhouse.ee/',           square: false },
  { src:'/tallinn_logo.png',                            alt:'City of Tallinn',          href:'https://www.visittallinn.ee/eng', square: false },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer" role="contentinfo">
      {/* White partners bar above dark footer */}
      <div className="footer__partners-bar">
        <div className="container footer__partners-inner">
          <span className="label label--muted">Organisers &amp; Partners</span>
          <div className="footer__logos">
            {partners.map(({ src, alt, href, square }) => (
              <a key={alt} href={href} target="_blank" rel="noopener noreferrer"
                className="footer__logo-link" title={alt}>
                <img src={src} alt={alt} className={square ? 'footer__logo--square' : ''} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Dark main footer */}
      <div className="footer__main">
        <div className="container footer__main-inner">
          <div className="footer__brand">
            {/* White version of logo for dark footer background */}
            <img src="/fwbb_logo_white.png" alt="Forum Wood Building Baltic" className="footer__brand-logo" />
            <p className="footer__tagline">8th Edition · 1–2 February 2027 · Tallinn, Estonia</p>
            <p className="footer__venue">Tallinn Creative Hub (Kultuurikatel)</p>
            <p className="footer__photo-credit">
              Photography: Tõnu Tunnel · Loodusmaja "Taru", Tallinn<br />
              Design: Kavakava Arhitektid · General contractor: Nordecon
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <div className="footer__col">
              <h4>Conference</h4>
              <ul>
                {['about','program','exhibition','registration'].map(id => (
                  <li key={id}>
                    <a href={`#${id}`} onClick={e => { e.preventDefault(); go(id); }}>
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__col">
              <h4>Visit</h4>
              <ul>
                <li><a href="#destination" onClick={e => { e.preventDefault(); go('destination'); }}>Destination</a></li>
                <li><a href="https://www.visittallinn.ee/eng" target="_blank" rel="noopener noreferrer">Visit Tallinn</a></li>
                <li><a href="https://kultuurikatel.ee/en/" target="_blank" rel="noopener noreferrer">Kultuurikatel</a></li>
              </ul>
            </div>
            <div className="footer__col">
              <h4>Organisation</h4>
              <ul>
                <li><a href="https://taltech.ee/en/" target="_blank" rel="noopener noreferrer">TalTech</a></li>
                <li><a href="https://www.artun.ee/en/home/" target="_blank" rel="noopener noreferrer">Estonian Academy of Arts</a></li>
                <li><a href="https://forum-holzbau.com/de" target="_blank" rel="noopener noreferrer">Forum Holzbau</a></li>
                <li><a href="https://woodhouse.ee/" target="_blank" rel="noopener noreferrer">Woodhouse Estonia</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} Forum Wood Building Baltic. All rights reserved.</p>
          <p>Part of the <a href="https://www.forum-holzbau.com/baltic/" target="_blank" rel="noopener noreferrer">Forum Holzbau</a> international conference series.</p>
        </div>
      </div>
    </footer>
  );
}
