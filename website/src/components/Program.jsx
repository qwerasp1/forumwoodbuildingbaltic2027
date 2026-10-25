import './Program.css';

const days = [
  {
    short: 'Day 1 — Feb 1',
    full: 'Monday, 1 February 2027',
    slots: [
      { time: '08:00 – 13:00', title: 'Exhibition Setup',                                      type: 'logistics' },
      { time: '10:00 – 13:00', title: 'Pre-Conference Tour — Loodusmaja "Taru", Tallinn',      type: 'tour',
        note: 'Guided architectural tour of Loodusmaja "Taru" (Estonia\'s largest wooden public building), located at Vesilennuki 12, Kalamaja / Noblessner — a short distance from the main conference venue. The building houses the Estonian Museum of Natural History and agencies of the Ministry of Climate. Design: Kavakava Arhitektid. General contractor: Nordecon. Meeting point: Tallinn Creative Hub.',
        photo: true },
      { time: '13:00 – 13:45', title: 'Registration / Welcome Coffee / Exhibition Opening',   type: 'logistics' },
      { time: '13:45 – 17:45', title: 'Conference Program',                                    type: 'session',  note: 'Including refreshment break. Venue: Tallinn Creative Hub (Kultuurikatel).' },
      { time: '18:00 – 21:00', title: 'Conference Reception',                                  type: 'social',   note: 'Evening networking reception. Venue: Tallinn Creative Hub.' },
    ],
  },
  {
    short: 'Day 2 — Feb 2',
    full: 'Tuesday, 2 February 2027',
    slots: [
      { time: '08:30 – 09:00', title: 'Registration / Coffee / Exhibition',  type: 'logistics' },
      { time: '09:00 – 16:00', title: 'Conference Program',                   type: 'session',  note: 'Including lunch and coffee break. Venue: Tallinn Creative Hub (Kultuurikatel).' },
      { time: '16:00 – 16:30', title: 'Farewell Refreshments',                type: 'social' },
    ],
  },
];

const typeLabel = { session: 'Session', social: 'Social', tour: 'Tour' };

export default function Program() {
  return (
    <section id="program" className="section section--white program">
      <div className="container">
        <span className="label">Schedule</span>
        <h2 className="prog__title">Conference Program</h2>
        <div className="brand-line" />
        <p className="prog__sub">
          Two days of keynotes, technical sessions, exhibitions and networking at
          Tallinn Creative Hub (Kultuurikatel). Full speaker program to be announced closer to the event.
        </p>

        {/* Day panels — sequential, no tabs */}
        {days.map((d) => (
          <div key={d.short} className="prog__panel glass">
            <h3 className="prog__day-heading">{d.full}</h3>
            <div className="prog__timeline">
              {d.slots.map((slot, j) => (
                <div key={j} className={`prog__slot prog__slot--${slot.type}`}>
                  <span className="prog__time">{slot.time}</span>
                  <div className="prog__body">
                    <span className="prog__slot-title">{slot.title}</span>
                    {slot.note && <span className="prog__slot-note">{slot.note}</span>}
                    {/* Pre-tour photo inline */}
                    {slot.photo && (
                      <figure className="prog__tour-figure">
                        <img
                          src="/loodusmaja-exterior.jpg"
                          alt="Loodusmaja 'Taru', Vesilennuki 12, Kalamaja, Tallinn — exterior view"
                          className="prog__tour-photo"
                        />
                        <figcaption className="prog__tour-caption">
                          Loodusmaja "Taru" · Vesilennuki 12, Kalamaja / Noblessner, Tallinn ·
                          Design: Kavakava Arhitektid · General contractor: Nordecon · Photo: Tõnu Tunnel
                        </figcaption>
                      </figure>
                    )}
                  </div>
                  {typeLabel[slot.type] && (
                    <span className="prog__badge">{typeLabel[slot.type]}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* PDF link to be added when available */}
        <a href="#" className="btn btn--outline prog__pdf-btn" download>Download Program (PDF)</a>

        <p className="prog__notice">
          All conference sessions take place at Tallinn Creative Hub (Kultuurikatel), Kursi 3, Tallinn.
          The pre-conference tour departs from the same venue.
        </p>
      </div>
    </section>
  );
}
