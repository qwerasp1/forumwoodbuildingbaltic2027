import './Exhibition.css';

export default function Exhibition() {
  return (
    <section id="exhibition" className="section section--white exhibition">
      <div className="container">
        <span className="label">Exhibition</span>
        <h2 className="exh__title">Show Your Work to the Industry</h2>
        <div className="brand-line" />

        {/* Full-width photo banner */}
        <figure className="exh__banner">
          <img
            src="/loodusmaja-interior-44.jpg"
            alt="Timber structure interior — Loodusmaja 'Taru', Tallinn"
          />
          <figcaption>
            Loodusmaja "Taru" · Vesilennuki 12, Kalamaja / Noblessner, Tallinn ·
            Design: Kavakava Arhitektid · General contractor: Nordecon · Photo: Tõnu Tunnel
          </figcaption>
        </figure>

        <div className="exh__grid">
          {/* Main text */}
          <div className="exh__main">
            <p className="exh__lead">
              The 8th Forum Wood Building Baltic includes an accompanying exhibition of
              selected companies at the forefront of timber construction. The aim is to
              bridge the academic world with practice — presenting the latest international
              developments to an audience of architects, engineers, contractors, housing
              organisations, planners, manufacturers and urban designers.
            </p>

            <blockquote className="exh__quote">
              Timber is the building material of the future — that will be addressed in this important conference.
            </blockquote>

            <div className="exh__details">
              {[
                { label: 'Venue',   value: 'Tallinn Creative Hub (Kultuurikatel)' },
                { label: 'Dates',   value: '1–2 February 2027' },
                { label: 'Contact', value: 'hugo.karre@forum-holz.com', href: 'mailto:hugo.karre@forum-holz.com' },
              ].map(({ label, value, href }) => (
                <div key={label} className="exh__detail-row">
                  <span className="exh__detail-label">{label}</span>
                  {href
                    ? <a href={href} className="exh__detail-val exh__detail-link">{value}</a>
                    : <span className="exh__detail-val">{value}</span>
                  }
                </div>
              ))}
            </div>

            <div className="exh__plans">
              <span className="label label--muted">Venue Floor Plans</span>
              {[
                '1st Floor / Atrium — Main Plan',
                '1st Floor / Atrium — Cross Section',
                'Ground Floor Plan',
              ].map(name => (
                <a key={name} href="https://kultuurikatel.ee/en/" target="_blank" rel="noopener noreferrer" className="exh__plan-link">
                  {name}
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="exh__sidebar">
            <div className="exh__cta glass">
              <span className="label">Exhibitors &amp; Sponsors</span>
              <h3>Reserve Your Space</h3>
              <p>
                Companies interested in exhibiting are welcome to submit a request
                to Hugo Karre at Forum Holzbau International.
              </p>
              <a
                href="mailto:hugo.karre@forum-holz.com?subject=Exhibition%20Interest%20FWBB%202027"
                className="btn btn--brand"
              >
                Request Exhibition Space
              </a>
              <div className="exh__contact">
                <strong>Hugo Karre</strong>
                <span>Forum Holzbau International</span>
                <span>Auenweg 2, 9813 Möllbrücke, Austria</span>
                <a href="tel:+436601442020">+43 660 144 20 20</a>
              </div>
            </div>

            <div className="exh__downloads glass">
              <span className="label label--muted">Downloads</span>
              {[
                'Exhibition Opportunities PDF',
                'Exhibitor Application Form',
              ].map(name => (
                <a key={name} href="https://www.forum-holzbau.com/baltic/Exhibition.php"
                  target="_blank" rel="noopener noreferrer" className="exh__plan-link">
                  {name}
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
