import { useLang, PARTNERS } from '../i18n';
import './About.css';

const ArrowIcon = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function About() {
  const { c } = useLang();
  const A = c.about;

  return (
    <section id="about" className="section about">
      {/* Background photo */}
      <div className="about__bg" aria-hidden="true" />
      <div className="container">

        {/* Main grid: text + stats */}
        <div className="about__grid">
          <div className="about__text">
            <span className="label">{A.label}</span>
            <h2 className="about__title">{A.title}</h2>
            <div className="brand-line" />
            <p className="about__lead">
              {A.leadA}<strong>{A.leadBold}</strong>{A.leadB}
            </p>
            <p>
              {A.themeA}<strong>{A.themeBold}</strong>{A.themeB}
            </p>

            {/* Venue card — liquid glass with brand left border */}
            <div className="about__venue glass">
              <span className="label">{A.venueLabel}</span>
              <h3>{A.venueName} <span>{A.venueParen}</span></h3>
              <p>{A.address}</p>
              <a
                href="https://www.google.com/maps/place/Kultuurikatel/@59.4442891,24.7512768,15z"
                target="_blank"
                rel="noopener noreferrer"
                className="about__map-link"
              >
                {A.mapLink}
                <ArrowIcon />
              </a>
            </div>
          </div>

          {/* Right column: stats + previous */}
          <div className="about__aside">
            <div className="about__stats">
              {A.stats.map(({ value, label }) => (
                <div key={label} className="about__stat glass">
                  <span className="about__stat-val">{value}</span>
                  <span className="about__stat-label">{label}</span>
                </div>
              ))}
            </div>

            <div className="about__prev glass">
              <span className="label label--muted">{A.previousLabel}</span>
              <ul className="about__prev-list">
                {A.previous.map(({ year, info, url }) => (
                  <li key={year}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="about__prev-row">
                      <span className="about__prev-year">{year}</span>
                      <span className="about__prev-info">{info}</span>
                      <ArrowIcon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Organisers strip */}
        <div className="about__org">
          <p className="about__bg-credit">{A.photoCredit}</p>
          <span className="label label--muted">{A.partnersLabel}</span>
          <div className="about__org-row">
            {PARTNERS.map(({ id, name, url, logo, square }) => (
              <a key={id} href={url} target="_blank" rel="noopener noreferrer" className="about__org-card glass">
                <span className="about__org-role">{c.partnerRoles[id]}</span>
                <img src={logo} alt={name} className={`about__org-logo${square ? ' about__org-logo--square' : ''}`} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
