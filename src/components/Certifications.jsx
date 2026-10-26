import Icon from './Icons.jsx'
import { certifications } from '../data/portfolioData.js'

export default function Certifications() {
  return (
    <section id="learning" className="section">
      <div className="container">
        <h2 className="reveal">Courses and Learning</h2>
        <div className="grid g3">
          {certifications.map((c) => (
            <article key={c.title} className="card glass reveal">
              <span className="ico"><Icon name="book" /></span>
              <h3>{c.title}</h3>
              <p>{c.provider}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
