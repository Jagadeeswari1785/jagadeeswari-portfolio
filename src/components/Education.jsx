import Icon from './Icons.jsx'
import { education } from '../data/portfolioData.js'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="reveal">Education</h2>
        <article className="card glass edu reveal">
          <span className="ico"><Icon name="edu" /></span>
          <div>
            <h3>{education.degree}</h3>
            <p>{education.college}</p>
          </div>
          <span className="years">{education.years}</span>
        </article>
      </div>
    </section>
  )
}
