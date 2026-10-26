import { useLang } from '../i18n';
import './Destination.css';
import DarkMap from './DarkMap';

export default function Destination() {
  const { c } = useLang();
  const D = c.destination;

  return (
    <section id="destination" className="section section--light dest">
      <div className="container">
        <span className="label">{D.label}</span>
        <h2 className="dest__title">{D.title}</h2>
        <div className="brand-line" />

        {/* Tallinn panorama — Wikimedia CC BY-SA 4.0, Hendrik Mändla */}
        <figure className="dest__city-photo">
          <img
            src="/tallinn-oldtown.jpg"
            alt="Tallinn Old Town at sunrise, Estonia"
            loading="lazy"
          />
          <figcaption>{D.cityCaption}</figcaption>
        </figure>

        <p className="dest__sub">{D.sub}</p>

        {/* Highlights */}
        <div className="dest__highlights">
          {D.highlights.map(({ tag, title, body }) => (
            <div key={title} className="dest__highlight glass">
              <span className="label">{tag}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>

        {/* Transport */}
        <h3 className="dest__sub-heading">{D.transportHeading}</h3>
        <div className="dest__transport">
          {D.transport.map(({ label, title, body }) => (
            <div key={label} className="dest__transport-card glass">
              <span className="dest__transport-label">{label}</span>
              <h4>{title}</h4>
              <p>{body}</p>
            </div>
          ))}
        </div>

        {/* Venue: photo left, info + dark map right */}
        <h3 className="dest__sub-heading">{D.venueHeading}</h3>
        <div className="dest__venue">

          {/* Venue photo — Wikimedia CC BY-SA 4.0, Liilia Moroz */}
          <figure className="dest__venue-photo">
            <img
              src="/kultuurikatel.jpg"
              alt="Tallinn Creative Hub (Kultuurikatel) exterior"
              loading="lazy"
            />
            <figcaption>{D.venueCaption}</figcaption>
          </figure>

          <div className="dest__venue-right">
            <div className="dest__venue-info">
              <p className="dest__venue-name">{D.venueName} <span>{D.venueParen}</span></p>
              <p className="dest__venue-addr">{D.venueAddr}</p>
              <p className="dest__venue-body">{D.venueBody}</p>
              <div className="dest__venue-actions">
                <a href="https://kultuurikatel.ee/en/" target="_blank" rel="noopener noreferrer" className="btn btn--brand">{D.venueWebsite}</a>
                <a href="https://www.visittallinn.ee/eng" target="_blank" rel="noopener noreferrer" className="btn btn--outline">{D.visitTallinn}</a>
              </div>
            </div>

            {/* Dark Leaflet map with CartoDB Dark Matter tiles */}
            <DarkMap />
          </div>
        </div>

        {/* Accommodation */}
        <div className="dest__accommodation glass">
          <div className="dest__acc-rule" aria-hidden="true" />
          <div>
            <h4>{D.accommodationTitle}</h4>
            <p>
              {D.accommodationA}
              <a href="https://www.visittallinn.ee/eng" target="_blank" rel="noopener noreferrer">visittallinn.ee</a>
              {D.accommodationB}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
