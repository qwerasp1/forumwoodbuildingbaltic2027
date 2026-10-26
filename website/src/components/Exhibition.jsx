import { useLang } from '../i18n';
import './Exhibition.css';

const ArrowIcon = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function Exhibition() {
  const { c } = useLang();
  const E = c.exhibition;

  return (
    <section id="exhibition" className="section section--white exhibition">
      <div className="container">
        <span className="label">{E.label}</span>
        <h2 className="exh__title">{E.title}</h2>
        <div className="brand-line" />

        {/* Full-width photo banner */}
        <figure className="exh__banner">
          <img
            src="/loodusmaja-interior-44.jpg"
            alt="Timber structure interior — Loodusmaja 'Taru', Tallinn"
          />
          <figcaption>{E.bannerCaption}</figcaption>
        </figure>

        <div className="exh__grid">
          {/* Main text */}
          <div className="exh__main">
            <p className="exh__lead">{E.lead}</p>

            <blockquote className="exh__quote">{E.quote}</blockquote>

            <div className="exh__details">
              {E.details.map(({ label, value, href }) => (
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
              <span className="label label--muted">{E.floorPlansLabel}</span>
              {E.floorPlans.map(({ name, url }) => (
                <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="exh__plan-link">
                  {name}
                  <ArrowIcon />
                </a>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="exh__sidebar">
            <div className="exh__cta glass">
              <span className="label">{E.ctaLabel}</span>
              <h3>{E.ctaTitle}</h3>
              <p>{E.ctaBody}</p>
              <a
                href="mailto:hugo.karre@forum-holz.com?subject=Exhibition%20Interest%20FWBB%202027"
                className="btn btn--brand"
              >
                {E.ctaButton}
              </a>
              <div className="exh__contact">
                <strong>{E.contactName}</strong>
                <span>{E.contactOrg}</span>
                <span>{E.contactAddr}</span>
                <a href="tel:+436601442020">{E.contactPhone}</a>
              </div>
            </div>

            <div className="exh__downloads glass">
              <span className="label label--muted">{E.downloadsLabel}</span>
              {E.downloads.map(name => (
                <a key={name} href={E.downloadsUrl}
                  target="_blank" rel="noopener noreferrer" className="exh__plan-link">
                  {name}
                  <ArrowIcon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
