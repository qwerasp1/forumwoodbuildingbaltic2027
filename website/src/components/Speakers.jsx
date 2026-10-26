import { useLang } from '../i18n';
import './Speakers.css';

export default function Speakers() {
  const { c } = useLang();
  const S = c.speakers;

  return (
    <section id="speakers" className="section section--white speakers">
      <div className="container">
        <span className="label">{S.label}</span>
        <h2 className="speakers__title">{S.title}</h2>
        <div className="brand-line" />
        <p className="speakers__sub">{S.sub}</p>

        <div className="speakers__grid">
          {S.topics.map(topic => (
            <div key={topic} className="speakers__card glass">
              <div className="speakers__photo-wrap">
                <div className="speakers__photo-placeholder">
                  <span className="speakers__initials">{S.initials}</span>
                </div>
              </div>
              <div className="speakers__info">
                <p className="speakers__name">{S.name}</p>
                <p className="speakers__affil">{S.role} &mdash; {S.affiliation}</p>
                <p className="speakers__topic">{topic}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
