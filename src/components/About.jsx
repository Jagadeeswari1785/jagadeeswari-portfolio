import Icon from './Icons.jsx'
import { profile, aboutCards } from '../data/portfolioData.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="reveal">About Me</h2>
        <p className="lead reveal">{profile.about}</p>
        <div className="grid g3">
          {aboutCards.map((c) => (
            <article key={c.title} className="card glass reveal">
              <span className="ico"><Icon name={c.icon} /></span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
