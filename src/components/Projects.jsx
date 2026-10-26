import { Github, ExternalLink } from 'lucide-react'
import Icon from './Icons.jsx'
import { projects } from '../data/portfolioData.js'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="reveal">Featured Projects</h2>
        <div className="grid g2">
          {projects.map((p, i) => (
            <article key={p.title} className={`project glass reveal pv${i}`}>
              <div className="art" aria-hidden="true"><Icon name={p.icon} size={44} /></div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <ul className="tags">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
                <div className="btn-row">
                  {p.code && (
                    <a className="btn btn-primary sm" href={p.code} target="_blank" rel="noreferrer">
                      <Github size={16} aria-hidden="true" /> View Code
                    </a>
                  )}
                  {p.demo && (
                    <a className="btn btn-ghost sm" href={p.demo} target="_blank" rel="noreferrer">
                      <ExternalLink size={16} aria-hidden="true" /> Live Demo
                    </a>
                  )}
                  {!p.code && !p.demo && <span className="muted">Code link not added yet</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
