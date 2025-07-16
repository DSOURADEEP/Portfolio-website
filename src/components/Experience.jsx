import React from 'react';
import '../styles/components/experience.css';

const experience = [
  {
    company: 'Accenture',
    role: 'Packaged App Developer Associate Intern',
    duration: 'Feb 2025 – Jun 2025',
    description:
      'Developed a backend banking system using Spring Boot, implemented REST APIs, participated in Agile teams, CI/CD, and microservices.',
  },
  {
    company: 'Blackcoffer',
    role: 'Data Processing Intern',
    duration: 'Jun 2024 – Sep 2024',
    description:
      'Assisted in data processing and validation for business datasets. Used collaboration tools and handled structured data.',
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-grid">
        {experience.map((exp, i) => (
          <div key={i} className="experience-card">
            <h3 className="company">{exp.company}</h3>
            <p className="role">{exp.role}</p>
            <p className="duration">{exp.duration}</p>
            <p className="description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}