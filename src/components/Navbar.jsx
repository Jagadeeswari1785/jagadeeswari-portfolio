import { useEffect, useState } from 'react'
import { Menu, X, Download, Sun, Moon } from 'lucide-react'
import { profile, navLinks } from '../data/portfolioData.js'

export default function Navbar({ theme, onToggle }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const resume = `${import.meta.env.BASE_URL}${profile.resume}`

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-inner" aria-label="Main navigation">
        <a href="#home" className="logo" aria-label="Go to top">{profile.logo}<span>.</span></a>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a></li>
          ))}
          <li className="nav-cta-mobile">
            <a className="btn btn-primary" href={resume} download>Download Resume</a>
          </li>
        </ul>
        <div className="nav-actions">
          <button className="icon-btn" onClick={onToggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="btn btn-primary nav-cta" href={resume} download><Download size={16} aria-hidden="true" /> Download Resume</a>
          <button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>
  )
}
