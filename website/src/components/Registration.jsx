import './Registration.css';

const pricing = [
  { cat: 'Conference — 1 Day',                                     eb: '210',   reg: '260',   on: '300' },
  { cat: 'Conference — 1 Day + Reception',                         eb: '260',   reg: '310',   on: '350' },
  { cat: 'Conference — 2 Days',                                     eb: '300',   reg: '360',   on: '400',  hi: true },
  { cat: 'Conference — 2 Days + Reception',                        eb: '350',   reg: '410',   on: '450',  hi: true },
  { cat: '5-pax Package — Conference + Reception (1 day)',          eb: '1 105', reg: '1 318', on: '—' },
  { cat: '5-pax Package — Conference + Reception (2 days)',         eb: '1 275', reg: '1 530', on: '—' },
  { cat: 'Student / Academic (1 or 2 days, incl. Reception)',       eb: '80',    reg: '80',    on: '100' },
  { cat: 'Conference Reception only (1 Feb)',                       eb: '60',    reg: '60',    on: '80' },
];

const deadlines = [
  { label: 'Early Bird', date: 'Until 4 January 2027' },
  { label: 'Regular',    date: '5 – 20 January 2027' },
  { label: 'On-site',    date: '21 Jan – 2 Feb 2027' },
];

const payment = ['Visa','MasterCard','Amex','Maestro','Union Pay','Apple Pay','Google Pay','Revolut','Bank Transfer'];

export default function Registration() {
  return (
    <section id="registration" className="section section--light reg">
      <div className="container">
        <span className="label">Registration</span>
        <h2 className="reg__title">Secure Your Seat</h2>
        <div className="brand-line" />
        <p className="reg__sub">All rates include 24% local VAT. Registration opens October 2026 via Fienta Ticketing.</p>

        {/* Deadline strip */}
        <div className="reg__deadlines">
          {deadlines.map(({ label, date }) => (
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
                <th scope="col">Category</th>
                <th scope="col">Early Bird</th>
                <th scope="col">Regular</th>
                <th scope="col">On-site</th>
              </tr>
            </thead>
            <tbody>
              {pricing.map(row => (
                <tr key={row.cat} className={row.hi ? 'reg__row--hi' : ''}>
                  <td>{row.cat}</td>
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
            <h3>Payment</h3>
            <p>
              Registration and payments are processed by <strong>Fienta Ticketing OÜ</strong>.
              Invoices — both e-invoice and PDF — are issued automatically.
              Delegates also receive a free Tallinn public transport pass for 30 Jan – 5 Feb 2027.
            </p>
            <div className="reg__badges">
              {payment.map(m => <span key={m} className="reg__badge">{m}</span>)}
            </div>
          </div>

          <div className="reg__cta glass">
            <span className="label">Opens October 2026</span>
            <h3>Ready to Register?</h3>
            <p>Online registration opens October 2026 via Fienta. Instant confirmation and invoice included.</p>
            <button className="btn btn--brand" disabled aria-disabled="true" style={{opacity:0.5,cursor:'not-allowed'}}>
              Registration Opening Soon
            </button>
            <ul className="reg__perks">
              <li>Secure online payment</li>
              <li>Instant confirmation email</li>
              <li>Automatic invoice (e-invoice or PDF)</li>
              <li>Free Tallinn public transport pass</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
