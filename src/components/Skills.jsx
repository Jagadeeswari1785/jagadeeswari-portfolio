import Icon from './Icons.jsx'
import { skills } from '../data/portfolioData.js'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="reveal">Technical Skills</h2>
        <p className="lead reveal">Labels show where I honestly am with each: familiar, currently learning, or interested in exploring.</p>
        <div className="grid g3">
          {skills.map((g) => (
            <article key={g.category} className="card glass reveal">
              <span className="ico"><Icon name={g.icon} /></span>
              <h3>{g.category}</h3>
              <ul className="skill-list">
                {g.items.map((s) => (
                  <li key={s.name}><strong>{s.name}</strong><small>{s.level}</small></li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
