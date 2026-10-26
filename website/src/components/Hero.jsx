import { useState } from 'react';
import { useLang, PARTNERS } from '../i18n';
import './Hero.css';

export default function Hero() {
  const { c } = useLang();
  const H = c.hero;
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const [calOpen, setCalOpen] = useState(false);

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//FWBB//Forum Wood Building Baltic 2027//EN',
    'BEGIN:VEVENT',
    'DTSTART:20270201T090000Z',
    'DTEND:20270202T170000Z',
    `SUMMARY:${H.icsSummary}`,
    `LOCATION:${H.icsLocation}`,
    `DESCRIPTION:${H.icsDescription}`,
    'URL:https://www.forum-holzbau.com/baltic/',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

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

  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(H.icsSummary)}&dates=20270201T090000/20270202T170000&location=${encodeURIComponent(H.icsLocation)}`;

  return (
    <>
      {/* ===== Two-panel hero ===== */}
      <section id="home" className="hero" aria-label="Forum Wood Building Baltic 2027">

        {/* Left — brand green panel */}
        <div className="hero__left">
          <span className="hero__edition">{H.edition}</span>

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
              <span className="hero__meta-label">{H.dateLabel}</span>
              <span className="hero__meta-val">{H.dateValue}</span>
            </div>
            <div className="hero__meta-row">
              <span className="hero__meta-label">{H.venueLabel}</span>
              <span className="hero__meta-val">{H.venueValue}</span>
            </div>
          </div>

          <p className="hero__theme">{H.theme}</p>

          <div className="hero__actions">
            <button className="btn btn--dark" onClick={() => go('registration')}>{H.registerSoon}</button>
            <button className="btn btn--outline" onClick={() => go('program')}>{H.viewProgram}</button>
            <div className="hero__cal">
              <button
                className="btn hero__cal-btn"
                onClick={() => setCalOpen(v => !v)}
                aria-expanded={calOpen}
                aria-haspopup="true"
              >
                {H.addToCalendar}
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
                      {H.googleCalendar}
                    </a>
                    <button className="hero__cal-item" role="menuitem" onClick={downloadIcs}>
                      {H.downloadIcs}
                    </button>
                    <button className="hero__cal-item" role="menuitem" onClick={downloadIcs}>
                      {H.outlook}
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
          <div className="hero__photo-caption">{H.photoCaption}</div>
        </div>
      </section>

      {/* ===== Partners strip ===== */}
      <div className="hero__partners">
        <div className="container hero__partners-inner">
          <span className="label label--muted">{H.partnersLabel}</span>
          <div className="hero__partners-logos">
            {PARTNERS.map(({ id, name, url, logo, square }) => (
              <a key={id} href={url} target="_blank" rel="noopener noreferrer"
                className={`hero__partner-logo${square ? ' hero__partner-logo--square' : ''}`} title={name}>
                <img src={logo} alt={name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
