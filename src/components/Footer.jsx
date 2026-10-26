import Icon from './Icons.jsx'
import { profile, socials, navLinks } from '../data/portfolioData.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container foot">
        <div>
          <strong>{profile.name}</strong>
          <p className="muted">Designed and built with care</p>
        </div>
        <nav aria-label="Footer navigation"><ul className="foot-links">
          {navLinks.map((l) => <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>)}
        </ul></nav>
        <ul className="foot-social">
          {socials.map((s) => (
            <li key={s.id}><a className="icon-btn" href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}><Icon name={s.id} size={18} /></a></li>
          ))}
        </ul>
      </div>
      <p className="copy">© {new Date().getFullYear()} {profile.name}</p>
    </footer>
  )
}
