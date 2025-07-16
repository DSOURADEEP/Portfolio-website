import React from 'react';
import '../styles/components/skills.css';

const categories = [
  { title: 'Languages & Backend', list: ['Java', 'Python', 'JavaScript (ES6)', 'Spring Boot', 'Flask', 'Node.js'] },
  { title: 'Frontend & Frameworks', list: ['React.js', 'Bootstrap', 'Recharts'] },
  { title: 'DevOps / Tools', list: ['Git', 'GitHub', 'Maven', 'Docker', 'Postman', 'Heroku', 'Render', 'Vercel'] },
  { title: 'Databases', list: ['MySQL', 'PostgreSQL', 'H2', 'Firebase'] },
  
];

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {categories.map(cat => (
          <div key={cat.title} className="skill-card">
            <h3>{cat.title}</h3>
            <div className="badges">
              {cat.list.map(skill => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}