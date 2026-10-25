import { useState } from 'react';
import './Hero.css';

export default function Hero() {
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const [calOpen, setCalOpen] = useState(false);

  const icsContent = `BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//FWBB//Forum Wood Building Baltic 2027//EN\r\nBEGIN:VEVENT\r\nDTSTART:20270201T090000Z\r\nDTEND:20270202T170000Z\r\nSUMMARY:Forum Wood Building Baltic 2027\r\nLOCATION:Tallinn Creative Hub (Kultuurikatel), Kursi 3, Tallinn, Estonia\r\nDESCRIPTION:8th Forum Wood Building Baltic conference on timber construction.\r\nURL:https://forumwoodbuilding.rtu.lv/\r\nEND:VEVENT\r\nEND:VCALENDAR`;

  const downloadIcs = () => {
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'forum-wood-building-baltic-2027.ics';
    a.click();
    URL.revokeObjectURL(url);
    setCalOpen(false);
  };

  const googleUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Forum+Wood+Building+Baltic+2027&dates=20270201T090000/20270202T170000&location=Kultuurikatel,+Tallinn,+Estonia';

  return (
    <>
      {/* ===== Two-panel hero ===== */}
      <section id="home" className="hero" aria-label="Forum Wood Building Baltic 2027">

        {/* Left — brand green panel */}
        <div className="hero__left">
          <span className="hero__edition">8th Forum Wood Building Baltic 2027</span>

          {/* White-on-transparent logo for the green background */}
          <img
            src="/fwbb_logo_white.png"
            alt="Forum Wood Building Baltic"
            className="hero__logo"
          />
          <h1 className="sr-only">Forum Wood Building Baltic 2027</h1>

          <p className="hero__year">2027</p>

          <div className="hero__meta">
            <div className="hero__meta-row">
              <span className="hero__meta-label">Date</span>
              <span className="hero__meta-val">1–2 February 2027</span>
            </div>
            <div className="hero__meta-row">
              <span className="hero__meta-label">Venue</span>
              <span className="hero__meta-val">Tallinn Creative Hub, Estonia</span>
            </div>
          </div>

          <p className="hero__theme">
            Integrated design — where engineering and architecture push the boundaries of timber construction
          </p>

          <div className="hero__actions">
            <button className="btn btn--dark" onClick={() => go('registration')}>Registration opening soon</button>
            <button className="btn btn--outline" onClick={() => go('program')}>View Program</button>
            <div className="hero__cal">
              <button
                className="btn hero__cal-btn"
                onClick={() => setCalOpen(v => !v)}
                aria-expanded={calOpen}
                aria-haspopup="true"
              >
                Add to Calendar
              </button>
              {calOpen && (
                <>
                  <div className="hero__cal-backdrop" onClick={() => setCalOpen(false)} aria-hidden="true" />
                  <div className="hero__cal-dropdown" role="menu">
                    <a
                      href={googleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hero__cal-item"
                      role="menuitem"
                      onClick={() => setCalOpen(false)}
                    >
                      Google Calendar
                    </a>
                    <button className="hero__cal-item" role="menuitem" onClick={downloadIcs}>
                      Download .ics file
                    </button>
                    <button className="hero__cal-item" role="menuitem" onClick={downloadIcs}>
                      Outlook / iCal
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right — photo 54 (portrait interior timber detail) */}
        <div className="hero__right">
          <img
            src="/loodusmaja-interior-54.jpg"
            alt="Timber structure interior — Loodusmaja 'Taru', Tallinn. Photo: Tõnu Tunnel"
            className="hero__photo"
          />
          <div className="hero__photo-caption">
            Loodusmaja "Taru", Tallinn · Photo: Tõnu Tunnel · General contractor: Nordecon
          </div>
        </div>
      </section>

      {/* ===== Partners strip ===== */}
      <div className="hero__partners">
        <div className="container hero__partners-inner">
          <span className="label label--muted">Organisers &amp; Partners</span>
          <div className="hero__partners-logos">
            {[
              { src: '/taltech_logo.png',                            alt: 'TalTech',                  href: 'https://taltech.ee/en/',           square: false },
              { src: '/eka_logo.png',                                alt: 'Estonian Academy of Arts', href: 'https://www.artun.ee/en/home/',    square: false },
              { src: '/Forum-Holzbau.png',                           alt: 'Forum Holzbau',            href: 'https://forum-holzbau.com/de',     square: true  },
              { src: '/woodhouse-estonia_logo_green_CMYK_print.png', alt: 'Woodhouse Estonia',        href: 'https://woodhouse.ee/',            square: false },
              { src: '/tallinn_logo.png',                            alt: 'City of Tallinn',          href: 'https://www.visittallinn.ee/eng',  square: false },
            ].map(({ src, alt, href, square }) => (
              <a key={alt} href={href} target="_blank" rel="noopener noreferrer"
                className={`hero__partner-logo${square ? ' hero__partner-logo--square' : ''}`} title={alt}>
                <img src={src} alt={alt} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
