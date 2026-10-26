import { useLang } from '../i18n';
import './Program.css';

const BRAND = [201, 212, 1];
const INK = [34, 34, 34];
const MID = [85, 85, 85];
const MUTED = [136, 136, 136];

/* Flatten a slot's parallel sessions into printable lines. */
function parallelLines(slot, P) {
  if (!slot.parallel?.length) return [];
  const hasTopics = slot.parallel.some(t => t.topics?.length);
  if (!hasTopics) return [{ text: `${P.parallelHeading}: ${P.parallelTba}`, style: 'muted' }];

  const lines = [{ text: P.parallelHeading, style: 'label' }];
  slot.parallel.forEach(track => {
    if (track.name) lines.push({ text: track.name, style: 'label' });
    (track.topics ?? []).forEach(t => lines.push({ text: `•  ${t}`, style: 'muted' }));
  });
  return lines;
}

async function downloadProgramPdf(P) {
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });

  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 18;
  const contentW = pageW - margin * 2;
  const timeW = 26;
  const textW = contentW - timeW;
  let y = margin;

  const ensureSpace = (needed) => {
    if (y + needed > pageH - margin) {
      doc.addPage();
      y = margin;
    }
  };

  const writeLines = (lines, x, startY, size, color) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(size);
    doc.setTextColor(...color);
    doc.text(lines, x, startY);
  };

  // Brand bar
  doc.setFillColor(...BRAND);
  doc.rect(0, 0, pageW, 6, 'F');

  y += 12;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(...INK);
  doc.text(P.pdfTitle, margin, y);

  y += 8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(...MID);
  doc.text(P.pdfSubtitle, margin, y);

  y += 6;
  doc.setFontSize(9);
  doc.setTextColor(...MUTED);
  doc.text(P.pdfMeta, margin, y);

  y += 4;
  doc.setDrawColor(...BRAND);
  doc.setLineWidth(0.8);
  doc.line(margin, y, pageW - margin, y);
  y += 12;

  P.days.forEach((d) => {
    ensureSpace(24);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(...INK);
    doc.text(d.full, margin, y);
    y += 2.5;
    doc.setDrawColor(225, 225, 225);
    doc.setLineWidth(0.3);
    doc.line(margin, y, pageW - margin, y);
    y += 7.5;

    d.slots.forEach((slot) => {
      const titleLines = doc.splitTextToSize(slot.title, textW);
      const noteLines = slot.note ? doc.splitTextToSize(slot.note, textW) : [];
      const details = [
        ...noteLines.map(t => ({ text: t, style: 'muted' })),
        ...parallelLines(slot, P),
      ].map(l => ({ ...l, lines: doc.splitTextToSize(l.text, textW) }));

      const detailH = details.reduce((h, l) => h + l.lines.length * 4 + 1, 0);
      const blockH = titleLines.length * 5 + detailH + 5;

      ensureSpace(blockH);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(...INK);
      doc.text(slot.time, margin, y);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(...INK);
      doc.text(titleLines, margin + timeW, y);

      if (P.badge[slot.type]) {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7);
        doc.setTextColor(168, 176, 0);
        doc.text(P.badge[slot.type].toUpperCase(), pageW - margin, y, { align: 'right' });
      }

      let rowY = y + titleLines.length * 5;
      details.forEach((l) => {
        doc.setFont('helvetica', l.style === 'label' ? 'bold' : 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(...(l.style === 'label' ? MID : MUTED));
        doc.text(l.lines, margin + timeW, rowY);
        rowY += l.lines.length * 4 + 1;
      });
      y = rowY + 5;
    });

    y += 4;
  });

  // Closing notice
  ensureSpace(20);
  const noticeLines = doc.splitTextToSize(P.notice, contentW);
  writeLines(noticeLines, margin, y, 8.5, MUTED);

  // Page numbers + footer
  const pageCount = doc.internal.getNumberOfPages();
  for (let p = 1; p <= pageCount; p++) {
    doc.setPage(p);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...MUTED);
    doc.text(`${P.pdfPageLabel} ${p} / ${pageCount}`, pageW - margin, pageH - 10, { align: 'right' });
    doc.text('www.forum-holzbau.com/baltic', margin, pageH - 10);
  }

  doc.save(P.pdfFileName);
}

export default function Program() {
  const { c } = useLang();
  const P = c.program;

  return (
    <section id="program" className="section section--white program">
      <div className="container">
        <span className="label">{P.label}</span>
        <h2 className="prog__title">{P.title}</h2>
        <div className="brand-line" />
        <p className="prog__sub">{P.sub}</p>

        {/* Day panels — sequential, no tabs */}
        {P.days.map((d) => (
          <div key={d.full} className="prog__panel glass">
            <h3 className="prog__day-heading">{d.full}</h3>
            <div className="prog__timeline">
              {d.slots.map((slot, j) => (
                <div key={j} className={`prog__slot prog__slot--${slot.type}`}>
                  <span className="prog__time">{slot.time}</span>
                  <div className="prog__body">
                    <span className="prog__slot-title">{slot.title}</span>
                    {slot.note && <span className="prog__slot-note">{slot.note}</span>}

                    {slot.parallel && (
                      <div className="prog__parallel">
                        <span className="prog__parallel-heading">{P.parallelHeading}</span>
                        {slot.parallel.some(t => t.topics?.length) ? (
                          <div className="prog__parallel-grid">
                            {slot.parallel.map((track, k) => (
                              <div key={k} className="prog__parallel-track">
                                {track.name && <span className="prog__parallel-name">{track.name}</span>}
                                <ul className="prog__parallel-list">
                                  {track.topics.map(t => <li key={t}>{t}</li>)}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <span className="prog__parallel-tba">{P.parallelTba}</span>
                        )}
                      </div>
                    )}

                    {/* Pre-tour photo inline */}
                    {slot.photo && (
                      <figure className="prog__tour-figure">
                        <img
                          src="/loodusmaja-exterior.jpg"
                          alt="Loodusmaja 'Taru', Vesilennuki 12, Kalamaja, Tallinn — exterior view"
                          className="prog__tour-photo"
                        />
                        <figcaption className="prog__tour-caption">{P.photoCaption}</figcaption>
                      </figure>
                    )}
                  </div>
                  {P.badge[slot.type] && (
                    <span className="prog__badge">{P.badge[slot.type]}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <button type="button" className="btn btn--outline prog__pdf-btn" onClick={() => downloadProgramPdf(P)}>
          {P.pdfButton}
        </button>

        <p className="prog__notice">{P.notice}</p>
      </div>
    </section>
  );
}
