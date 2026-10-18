import './About.css';

const stats = [
  { value: '8th', label: 'Edition' },
  { value: '28+', label: 'Years of Forum Holzbau' },
  { value: '3',   label: 'Baltic Countries' },
  { value: '2',   label: 'Conference Days' },
];

export default function About() {
  return (
    <section id="about" className="section about">
      {/* Background photo */}
      <div className="about__bg" aria-hidden="true" />
      <div className="container">

        {/* Main grid: text + stats */}
        <div className="about__grid">
          <div className="about__text">
            <span className="label">About the Conference</span>
            <h2 className="about__title">
              The leading timber construction conference in the Baltic Sea region
            </h2>
            <div className="brand-line" />
            <p className="about__lead">
              Forum Wood Building Baltic (FWBB) covers design for manufacturing and assembly,
              building physics, energy performance, fire safety, and timber structures. It is
              part of the international <strong>Forum Holzbau</strong> organisation — a platform of
              leading universities for knowledge and technology transfer in timber construction,
              established over 28 years ago.
            </p>
            <p>
              The overarching theme of FWBB 2027 is <strong>Integrated Design</strong> — where
              engineering and architecture cooperate to push the boundaries of what is possible
              in timber construction.
            </p>

            {/* Venue card — liquid glass with brand left border */}
            <div className="about__venue glass">
              <span className="label">Conference Venue</span>
              <h3>Tallinn Creative Hub <span>(Kultuurikatel)</span></h3>
              <p>Kursi 3, 10415 Tallinn, Estonia</p>
              <a
                href="https://www.google.com/maps/place/Kultuurikatel/@59.4442891,24.7512768,15z"
                target="_blank"
                rel="noopener noreferrer"
                className="about__map-link"
              >
                View on Google Maps
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right column: stats + previous + photo accent */}
          <div className="about__aside">
            <div className="about__stats">
              {stats.map(({ value, label }) => (
                <div key={label} className="about__stat glass">
                  <span className="about__stat-val">{value}</span>
                  <span className="about__stat-label">{label}</span>
                </div>
              ))}
            </div>

            <div className="about__prev glass">
              <span className="label label--muted">Previous Editions</span>
              <ul className="about__prev-list">
                {[
                  { year: '2024', info: 'Feb 27–28 · Tallinn', url: 'https://taltech.ee/en/events/forum-wood-building-baltic-2024' },
                  { year: '2025', info: 'Apr 24–25 · Riga',    url: 'https://forumwoodbuilding.rtu.lv/' },
                  { year: '2026', info: 'Feb 26–27 · Vilnius', url: 'https://conferences.vilniustech.lt/index.php/FWBB' },
                ].map(({ year, info, url }) => (
                  <li key={year}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="about__prev-row">
                      <span className="about__prev-year">{year}</span>
                      <span className="about__prev-info">{info}</span>
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Organisers strip */}
        <div className="about__org">
          <p className="about__bg-credit">Loodusmaja "Taru", Tallinn · Photo: Tõnu Tunnel · General contractor: Nordecon</p>
          <span className="label label--muted">Organisers &amp; Partners</span>
          <div className="about__org-row">
            {[
              { name:'Tallinn University of Technology', url:'https://taltech.ee/en/',           logo:'/taltech_logo.png',                            role:'Organiser',             square: false },
              { name:'Estonian Academy of Arts',         url:'https://www.artun.ee/en/home/',    logo:'/eka_logo.png',                                role:'Co-Organiser',          square: false },
              { name:'Forum Holzbau',                    url:'https://forum-holzbau.com/de',     logo:'/Forum-Holzbau.png',                           role:'International Partner', square: true  },
              { name:'Woodhouse Estonia',                url:'https://woodhouse.ee/',            logo:'/woodhouse-estonia_logo_green_CMYK_print.png', role:'Partner',               square: false },
              { name:'City of Tallinn',                  url:'https://www.visittallinn.ee/eng',  logo:'/tallinn_logo.png',                            role:'Destination Partner',   square: false },
            ].map(({ name, url, logo, role, square }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="about__org-card glass">
                <span className="about__org-role">{role}</span>
                <img src={logo} alt={name} className={`about__org-logo${square ? ' about__org-logo--square' : ''}`} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
