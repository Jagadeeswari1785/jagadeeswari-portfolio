import { useEffect, useState } from 'react'
import { Github, Linkedin } from 'lucide-react'
import { profile, socials } from '../data/portfolioData.js'

function useTyping(words) {
  const [text, setText] = useState(words[0])
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let w = 0, c = words[0].length, del = true, t
    const tick = () => {
      const word = words[w]
      c += del ? -1 : 1
      setText(word.slice(0, c))
      let delay = del ? 45 : 85
      if (!del && c === word.length) { del = true; delay = 1600 }
      else if (del && c === 0) { del = false; w = (w + 1) % words.length; delay = 300 }
      t = setTimeout(tick, delay)
    }
    t = setTimeout(tick, 1600)
    return () => clearTimeout(t)
  }, [words])
  return text
}

export default function Hero() {
  const role = useTyping(profile.roles)
  const gh = socials.find((s) => s.id === 'github').url
  const li = socials.find((s) => s.id === 'linkedin').url

  return (
    <section id="home" className="section hero">
      <div className="container hero-grid">
        <div>
          <span className="badge"><i className="dot" /> Open to Software Development Opportunities</span>
          <h1>Hi, I'm <span className="grad">{profile.firstName}.</span></h1>
          <p className="role" aria-live="off">{role}<span className="caret" aria-hidden="true" /></p>
          <p className="lead">{profile.intro}</p>
          <div className="btn-row">
            <a className="btn btn-primary" href="#projects">Explore My Work</a>
            <a className="btn btn-ghost" href="#contact">Contact Me</a>
          </div>
          <div className="social-row">
            <a className="icon-btn" href={gh} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={20} /></a>
            <a className="icon-btn" href={li} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={20} /></a>
          </div>
        </div>

        <div className="editor glass" aria-hidden="true">
          <div className="editor-bar"><i /><i /><i /><span>jagadeeswari.py</span></div>
<pre>{`class Developer:
    name = "Jagadeeswari D"
    degree = "B.E. ECE"
    college = "Saveetha Engineering"
    graduating = 2027

    learning = [
        "Python Full Stack",
        "React", "SQL", "Cloud",
    ]

    def goal(self):
        return "Build useful software"`}</pre>
          <span className="chip c1">Python</span>
          <span className="chip c2">React</span>
          <span className="chip c3">SQL</span>
        </div>
      </div>
    </section>
  )
}
