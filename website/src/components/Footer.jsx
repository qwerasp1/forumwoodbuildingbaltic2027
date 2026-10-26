import { useLang, PARTNERS } from '../i18n';
import './Footer.css';

const CONFERENCE_LINKS = ['about', 'program', 'speakers', 'exhibition', 'registration'];

export default function Footer() {
  const { c } = useLang();
  const F = c.footer;
  const year = new Date().getFullYear();
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer" role="contentinfo">
      {/* White partners bar above dark footer */}
      <div className="footer__partners-bar">
        <div className="container footer__partners-inner">
          <span className="label label--muted">{F.partnersLabel}</span>
          <div className="footer__logos">
            {PARTNERS.map(({ id, name, url, logo, square }) => (
              <a key={id} href={url} target="_blank" rel="noopener noreferrer"
                className="footer__logo-link" title={name}>
                <img src={logo} alt={name} className={square ? 'footer__logo--square' : ''} />
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
            <p className="footer__tagline">{F.tagline}</p>
            <p className="footer__venue">{F.venue}</p>
            <p className="footer__photo-credit">
              {F.photoCredit1}<br />
              {F.photoCredit2}
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <div className="footer__col">
              <h4>{F.colConference}</h4>
              <ul>
                {CONFERENCE_LINKS.map(id => (
                  <li key={id}>
                    <a href={`#${id}`} onClick={e => { e.preventDefault(); go(id); }}>
                      {c.nav[id]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__col">
              <h4>{F.colVisit}</h4>
              <ul>
                <li><a href="#destination" onClick={e => { e.preventDefault(); go('destination'); }}>{c.nav.destination}</a></li>
                <li><a href="https://www.visittallinn.ee/eng" target="_blank" rel="noopener noreferrer">{c.destination.visitTallinn}</a></li>
                <li><a href="https://kultuurikatel.ee/en/" target="_blank" rel="noopener noreferrer">Kultuurikatel</a></li>
              </ul>
            </div>
            <div className="footer__col">
              <h4>{F.colOrganisation}</h4>
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
          <p>© {year} {F.rights}</p>
          <p>{F.seriesA}<a href={F.partnersUrl} target="_blank" rel="noopener noreferrer">{F.seriesBold}</a>{F.seriesB}</p>
        </div>
      </div>
    </footer>
  );
}
