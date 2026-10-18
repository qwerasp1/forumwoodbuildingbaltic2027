import './Destination.css';
import DarkMap from './DarkMap';

const transport = [
  { label:'Plane',  title:'By Plane',        body:'Lennart Meri Tallinn Airport — just 4 km from the city centre. Named the most enjoyable airport in Europe by ACI in 2025. A direct tram to the venue opens in 2027.' },
  { label:'Ferry',  title:'By Ferry',         body:'Regular connections to Helsinki (from 2 h, several daily) and Stockholm (overnight). The passenger port is approx. 1 km from Kultuurikatel.' },
  { label:'Bus',    title:'By Bus & Car',     body:'International bus routes serve Tallinn Central Bus Station. The city is also accessible by car from Riga, Vilnius, and Helsinki via ferry.' },
  { label:'Tram',   title:'Public Transport', body:'Delegates receive FREE public transport passes Jan 30 – Feb 5, 2027, supported by the City of Tallinn. A new tram line from the airport opens in 2027.' },
];

const highlights = [
  { tag:'Heritage', title:'UNESCO Old Town',     body:'A medieval gem and UNESCO World Heritage Site, just steps from the venue.' },
  { tag:'Culture',  title:'Kadriorg District',   body:'Imperial palaces, lush parks and KUMU — Estonia\'s premier art institution.' },
  { tag:'Design',   title:'Kalamaja Quarter',    body:'Bohemian neighbourhood famous for its colourful wooden architecture.' },
  { tag:'Food',     title:'Culinary Scene',      body:'A thriving restaurant culture from traditional Estonian fare to world-class fine dining.' },
  { tag:'Digital',  title:'Most Digital Nation', body:'Estonia leads Europe in digital governance — fast Wi-Fi everywhere, e-residency available.' },
  { tag:'Winter',   title:'February in Tallinn', body:'Snow-dusted cobblestones, cosy bars and crisp Baltic air — the city is magical in winter.' },
];

export default function Destination() {
  return (
    <section id="destination" className="section section--light dest">
      <div className="container">
        <span className="label">Destination</span>
        <h2 className="dest__title">Tallinn, Estonia</h2>
        <div className="brand-line" />

        {/* Tallinn panorama — Wikimedia CC BY-SA 4.0, Hendrik Mändla */}
        <figure className="dest__city-photo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/64/Tallinna_vanalinn_p%C3%A4ikeset%C3%B5usu_ajal.jpg"
            alt="Tallinn Old Town at sunrise, Estonia"
            loading="lazy"
          />
          <figcaption>
            Tallinn Old Town at sunrise · Photo: Hendrik Mändla · CC BY-SA 4.0
          </figcaption>
        </figure>

        <p className="dest__sub">
          A UNESCO-listed medieval capital combined with cutting-edge digital innovation —
          the perfect setting for an international conference.
        </p>

        {/* Highlights */}
        <div className="dest__highlights">
          {highlights.map(({ tag, title, body }) => (
            <div key={title} className="dest__highlight glass">
              <span className="label">{tag}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>

        {/* Transport */}
        <h3 className="dest__sub-heading">Getting to Tallinn</h3>
        <div className="dest__transport">
          {transport.map(({ label, title, body }) => (
            <div key={label} className="dest__transport-card glass">
              <span className="dest__transport-label">{label}</span>
              <h4>{title}</h4>
              <p>{body}</p>
            </div>
          ))}
        </div>

        {/* Venue: photo left, info + dark map right */}
        <h3 className="dest__sub-heading">Conference Venue</h3>
        <div className="dest__venue">

          {/* Venue photo — Wikimedia CC BY-SA 4.0, Liilia Moroz */}
          <figure className="dest__venue-photo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Tallinn_Kultuurikatel.jpg"
              alt="Tallinn Creative Hub (Kultuurikatel) exterior"
              loading="lazy"
            />
            <figcaption>
              Tallinn Creative Hub (Kultuurikatel) · Photo: Liilia Moroz · CC BY-SA 4.0
            </figcaption>
          </figure>

          <div className="dest__venue-right">
            <div className="dest__venue-info">
              <p className="dest__venue-name">Tallinn Creative Hub <span>(Kultuurikatel)</span></p>
              <p className="dest__venue-addr">Kursi 3, 10415 Tallinn, Estonia</p>
              <p className="dest__venue-body">
                A multifunctional creative centre within walking distance of the Old Town and
                most city-centre hotels. Well-served by public transport and directly connected
                to the new 2027 tram line.
              </p>
              <div className="dest__venue-actions">
                <a href="https://kultuurikatel.ee/en/" target="_blank" rel="noopener noreferrer" className="btn btn--brand">Kultuurikatel Website</a>
                <a href="https://www.visittallinn.ee/eng" target="_blank" rel="noopener noreferrer" className="btn btn--outline">Visit Tallinn</a>
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
            <h4>Accommodation</h4>
            <p>
              Special hotel rates have been negotiated for 30 January – 5 February 2027.
              Details will be published closer to the event. Most conference hotels are
              within walking distance of the venue. More inspiration at{' '}
              <a href="https://www.visittallinn.ee/eng" target="_blank" rel="noopener noreferrer">visittallinn.ee</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
