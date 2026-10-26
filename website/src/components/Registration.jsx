import { useLang, PRICE_ROWS } from '../i18n';
import './Registration.css';

export default function Registration() {
  const { c } = useLang();
  const R = c.registration;

  return (
    <section id="registration" className="section section--light reg">
      <div className="container">
        <span className="label">{R.label}</span>
        <h2 className="reg__title">{R.title}</h2>
        <div className="brand-line" />
        <p className="reg__sub">{R.sub}</p>

        {/* Deadline strip */}
        <div className="reg__deadlines">
          {R.deadlines.map(({ label, date }) => (
            <div key={label} className="reg__deadline glass">
              <span className="reg__dl-label">{label}</span>
              <span className="reg__dl-date">{date}</span>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="reg__table-wrap">
          <table className="reg__table">
            <thead>
              <tr>
                <th scope="col">{R.tableHeaders.category}</th>
                <th scope="col">{R.tableHeaders.eb}</th>
                <th scope="col">{R.tableHeaders.reg}</th>
                <th scope="col">{R.tableHeaders.on}</th>
              </tr>
            </thead>
            <tbody>
              {PRICE_ROWS.map(row => (
                <tr key={row.id} className={row.hi ? 'reg__row--hi' : ''}>
                  <td>{R.categories[row.id]}</td>
                  <td className="reg__price">€ {row.eb}</td>
                  <td className="reg__price">€ {row.reg}</td>
                  <td className="reg__price">{row.on === '—' ? '—' : `€ ${row.on}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom */}
        <div className="reg__bottom">
          <div className="reg__payment">
            <h3>{R.paymentTitle}</h3>
            <p>
              {R.payA}<strong>{R.payBold}</strong>{R.payB}
            </p>
            <p className="reg__payment-note">{R.payNote}</p>
          </div>

          <div className="reg__cta glass">
            <span className="label">{R.ctaLabel}</span>
            <h3>{R.ctaTitle}</h3>
            <p>{R.ctaBody}</p>
            <button className="btn btn--brand" disabled aria-disabled="true" style={{opacity:0.5,cursor:'not-allowed'}}>
              {R.ctaButton}
            </button>
            <ul className="reg__perks">
              {R.perks.map(perk => <li key={perk}>{perk}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
