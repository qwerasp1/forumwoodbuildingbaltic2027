import { useLang } from '../i18n';
import './Contact.css';

export default function Contact() {
  const { c } = useLang();
  const C = c.contact;

  return (
    <section id="contact" className="section section--white contact">
      <div className="container">
        <span className="label">{C.label}</span>
        <h2 className="ct__title">{C.title}</h2>
        <div className="brand-line" />
        <p className="ct__sub">{C.sub}</p>
        <p className="ct__headshot-note">{C.headshotNote}</p>

        <div className="ct__grid">
          {C.groups.map(({ group, people }) => (
            <div key={group} className="ct__group glass">
              <span className="ct__group-label">{group}</span>
              {people.map(({ name, title, org, addr, phone, email }) => (
                <div key={name} className="ct__person">
                  <div className="ct__avatar" aria-hidden="true">
                    {name.split(' ').map(n => n[0]).join('').slice(0,2)}
                  </div>
                  <div className="ct__info">
                    <strong>{name}</strong>
                    <span className="ct__role">{title}</span>
                    <span className="ct__org">{org}</span>
                    <span className="ct__addr">{addr}</span>
                    {phone && <a href={`tel:${phone.replace(/\s/g,'')}`} className="ct__link">{phone}</a>}
                    {email && <a href={`mailto:${email}`} className="ct__link">{email}</a>}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* FH banner */}
        <div className="ct__fh">
          <img src="/Forum-Holzbau.png" alt="Forum Holzbau" className="ct__fh-logo" />
          <div>
            <h3>{C.fhTitle}</h3>
            <p>{C.fhBody}</p>
          </div>
          <a href="https://www.forum-holzbau.com/baltic/" target="_blank" rel="noopener noreferrer" className="btn btn--brand">
            {C.fhButton}
          </a>
        </div>
      </div>
    </section>
  );
}
