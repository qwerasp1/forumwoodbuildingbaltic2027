# Review — Forum Wood Building Baltic 2027 Website Changes

## Build Log

**BLOCKER:** The required artifact `/Users/artur/Documents/Dev/ForumWoodBuildingBaltic2027/website/.agents/tasks/build_log.txt` does not exist. The `.agents/tasks/` directory was not present on disk at all. Build exit code 0 cannot be confirmed. This is missing required verification.

---

## Per-requirement Verification

### 1. Hero.jsx — edition span, venue, date

- **hero__edition span:** `Hero.jsx` line 36: `<span className="hero__edition">8th Forum Wood Building Baltic 2027</span>` ✓
- **Venue meta value:** line 45: `<span className="hero__meta-val">Tallinn Creative Hub, Estonia</span>` — single value in one element, no line-break forcing, renders on a single line ✓
- **Date:** line 42: `<span className="hero__meta-val">1–2 February 2027</span>` — en-dash U+2013 character present ✓

### 2. Program.jsx — no tabs, both days sequential, pre-tour photo, PDF button, notice

- No `useState`, no `role="tab"`, no `role="tabpanel"`, no `hidden` prop anywhere in the file ✓
- Both day panels rendered via `.map(days)` sequentially with no toggling ✓
- Pre-tour photo: `slot.photo && (<figure className="prog__tour-figure"><img src="/loodusmaja-exterior.jpg" .../>` ✓
- PDF button: `<a href="#" className="btn btn--outline prog__pdf-btn" download>Download Program (PDF)</a>` ✓
- `prog__notice` paragraph present at bottom ✓

### 3. Registration.jsx — Early Bird deadline, no payment badges, plain sentence, perks item

- Early Bird deadline: `{ label: 'Early Bird', date: 'Until 20 December 2026' }` ✓
- No `payment` array with badge/logo objects; no Visa/MasterCard/Amex etc. logos ✓
- Plain sentence: `<p className="reg__payment-note">Secure payment via card, bank transfer, or invoice upon registration.</p>` ✓
- Perks list item: `<li>Tallinn public transport pass (pending final confirmation)</li>` ✓

### 4. Hero.jsx — "Add to Calendar" button, dropdown, outside-click backdrop, ICS content

- Button present inside `hero__actions`: `<button className="btn hero__cal-btn" onClick={() => setCalOpen(v => !v)} aria-expanded={calOpen} aria-haspopup="true">Add to Calendar</button>` ✓
- Dropdown menu with `role="menu"` containing three `role="menuitem"` entries: Google Calendar link, Download .ics file, Outlook / iCal ✓
- Backdrop: `<div className="hero__cal-backdrop" onClick={() => setCalOpen(false)} aria-hidden="true" />` closes on outside click ✓
- ICS content contains `BEGIN:VCALENDAR`, `DTSTART:20270201T090000Z`, `DTEND:20270202T170000Z`, correct SUMMARY, LOCATION, DESCRIPTION ✓

### 5. Navbar.jsx — lang toggle EN | ET

- `useState` for `lang` with initial `'EN'` ✓
- Two `<button>` elements with conditional class `navbar__lang-btn--active` ✓
- `Navbar.css` `.navbar__lang-btn--active` sets `color: var(--brand-dark); font-weight: 700;` ✓

### 6. Speakers.jsx and Speakers.css — new files, section id, className, three TBA cards, mailto

- `Speakers.jsx` exists with `<section id="speakers" className="section section--white speakers">` ✓
- Three speaker objects all with `name: 'TBA'`, `affiliation: 'To be announced'` rendered as cards ✓
- `mailto:hugo.karre@forum-holz.com` present in the CTA anchor ✓
- `Speakers.css` exists with grid layout, card, photo-placeholder, initials, info, cta classes ✓

### 7. App.jsx — Speakers imported and placed between Program and Exhibition

- Import: `import Speakers from './components/Speakers';` ✓
- JSX order: `<Program />` → `<Speakers />` → `<Exhibition />` ✓

### 8. Navbar.jsx navLinks — Speakers between Program and Exhibition

- navLinks array: `{ label: 'Program', href: '#program' }` → `{ label: 'Speakers', href: '#speakers' }` → `{ label: 'Exhibition', href: '#exhibition' }` ✓

### 9. Footer.jsx — 'speakers' in conference links array

- `['about','program','speakers','exhibition','registration'].map(...)` ✓

### 10. Build exits with code 0

- **BLOCKER:** `build_log.txt` does not exist at the required path. Build outcome cannot be verified from the artifact. This blocks approval.

---

## Summary

Nine of ten requirements are fully satisfied by source inspection. Requirement 10 (build verification) cannot be confirmed because the required build log artifact was never created.
