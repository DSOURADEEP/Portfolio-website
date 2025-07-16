import React from 'react';
import { projects } from '../data/projects';
import '../styles/components/projects.css';

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(p => (
          <div key={p.title} className="project-card">
            <h3>{p.title}</h3>
            <p className="tech">{p.tech.join(' • ')}</p>
            <p>{p.desc}</p>
            <div className="project-links">
              {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live</a>}
              {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Demo</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}