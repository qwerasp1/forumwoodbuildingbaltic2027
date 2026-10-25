import './Speakers.css';

const speakers = [
  {
    initials: 'TBA',
    name: 'TBA',
    title: 'Keynote Speaker',
    affiliation: 'To be announced',
    topic: 'Integrated Design in Timber Construction',
  },
  {
    initials: 'TBA',
    name: 'TBA',
    title: 'Keynote Speaker',
    affiliation: 'To be announced',
    topic: 'Innovation in Wood Building Technology',
  },
  {
    initials: 'TBA',
    name: 'TBA',
    title: 'Keynote Speaker',
    affiliation: 'To be announced',
    topic: 'Sustainable Timber Architecture',
  },
];

export default function Speakers() {
  return (
    <section id="speakers" className="section section--white speakers">
      <div className="container">
        <span className="label">Speakers</span>
        <h2 className="speakers__title">Keynote Speakers &amp; Presenters</h2>
        <div className="brand-line" />
        <p className="speakers__sub">
          The full speaker lineup will be announced in due course. Below are confirmed keynote speakers.
        </p>

        <div className="speakers__grid">
          {speakers.map((s, i) => (
            <div key={i} className="speakers__card glass">
              <div className="speakers__photo-wrap">
                <div className="speakers__photo-placeholder">
                  <span className="speakers__initials">{s.initials}</span>
                </div>
              </div>
              <div className="speakers__info">
                <p className="speakers__name">{s.name}</p>
                <p className="speakers__affil">{s.title} &mdash; {s.affiliation}</p>
                <p className="speakers__topic">{s.topic}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="speakers__cta">
          <p>
            Are you interested in presenting?{' '}
            <a href="mailto:hugo.karre@forum-holz.com" className="speakers__cta-link">
              Submit an abstract.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
