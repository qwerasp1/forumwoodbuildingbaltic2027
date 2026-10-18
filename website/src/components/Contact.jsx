import './Contact.css';

const contacts = [
  {
    group: 'Conference Chairs',
    people: [
      { name:'Targo Kalamees', title:'Professor of Building Physics',      org:'Tallinn University of Technology', addr:'Ehitajate tee 5, 19086 Tallinn' },
      { name:'Alar Just',      title:'Professor of Timber Structures',     org:'Tallinn University of Technology', addr:'Ehitajate tee 5, 19086 Tallinn' },
    ],
  },
  {
    group: 'Estonian Academy of Arts',
    people: [
      { name:'Anna Tommingas', title:'Manager, Timber Architecture Research Center PAKK', org:'Estonian Academy of Arts', addr:'Põhja puiestee 7, 10412 Tallinn' },
      { name:'Sille Pihlak',   title:'Dean, Faculty of Architecture',                    org:'Estonian Academy of Arts', addr:'Põhja puiestee 7, 10412 Tallinn' },
    ],
  },
  {
    group: 'Organisation',
    people: [
      { name:'Mariann Lugus', title:'Organisational Coordinator', org:'Tallinn University of Technology', addr:'Ehitajate tee 5, 19086 Tallinn' },
    ],
  },
  {
    group: 'Exhibition',
    people: [
      { name:'Hugo Karre', title:'Exhibition Manager', org:'Forum Holzbau International', addr:'Auenweg 2, 9813 Möllbrücke, Austria', phone:'+43 660 144 20 20', email:'hugo.karre@forum-holz.com' },
    ],
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section section--white contact">
      <div className="container">
        <span className="label">Contact</span>
        <h2 className="ct__title">Get in Touch</h2>
        <div className="brand-line" />
        <p className="ct__sub">Reach the relevant team for program, exhibition or organisational enquiries.</p>
        <p className="ct__headshot-note">
          Profile photos will be added once confirmed by each contact. If you are listed here and would like to add a photo, please send it to the organisers.
        </p>

        <div className="ct__grid">
          {contacts.map(({ group, people }) => (
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
            <h3>Forum Holzbau International</h3>
            <p>Learn more about the full international Forum Holzbau conference series.</p>
          </div>
          <a href="https://www.forum-holzbau.com/baltic/" target="_blank" rel="noopener noreferrer" className="btn btn--brand">
            forum-holzbau.com
          </a>
        </div>
      </div>
    </section>
  );
}
