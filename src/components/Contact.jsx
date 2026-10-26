import { useState } from 'react'
import { Mail } from 'lucide-react'
import Icon from './Icons.jsx'
import { EMAIL, socials } from '../data/portfolioData.js'

export default function Contact() {
  const [f, setF] = useState({ name: '', message: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const href = `mailto:${EMAIL}?subject=${encodeURIComponent('Hello from ' + (f.name || 'your portfolio'))}&body=${encodeURIComponent(f.message)}`

  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <div className="reveal">
          <h2>Let's Connect</h2>
          <p className="lead">I'm looking for opportunities to learn and contribute as a software developer. If you have a role, project or idea, I would be glad to hear from you.</p>
          <ul className="contact-links">
            {socials.map((s) => (
              <li key={s.id}>
                <a href={s.url} target="_blank" rel="noreferrer"><Icon name={s.id} size={18} /> {s.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="card glass reveal">
          <h3><Mail size={18} aria-hidden="true" /> Send an email</h3>
          {EMAIL ? (
            <p className="muted">This opens your email app with the message filled in.</p>
          ) : (
            <p className="notice">Email is not set yet. Add it to <code>EMAIL</code> in <code>src/data/portfolioData.js</code> to enable this form.</p>
          )}
          <label>Your name<input value={f.name} onChange={set('name')} autoComplete="name" /></label>
          <label>Message<textarea rows="4" value={f.message} onChange={set('message')} /></label>
          <a className={`btn btn-primary ${EMAIL ? '' : 'disabled'}`} href={EMAIL ? href : undefined} aria-disabled={!EMAIL} role={EMAIL ? undefined : 'link'}>
            Open Email App
          </a>
        </div>
      </div>
    </section>
  )
}
