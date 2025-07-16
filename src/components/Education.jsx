import React from 'react';
export default function Education() {
  const certificates = [
    {
      name: '100 Days of Code – Python Bootcamp',
      link: 'https://drive.google.com/file/d/157MO6U92wahIjrqq-3xaKNkGgNedFy-V/view?usp=drivesdk',
    },
    {
      name: 'Java Masterclass 2025',
      link: 'https://drive.google.com/file/d/1uov_68XBdJKxj3shzcQXX6rRIL0TWwt3/view?usp=drivesdk',
    },
    {
      name: 'AWS Cloud Security Foundations',
      link: '#', // add later
    },
  ];

  return (
    <section id="education">
      <h2>Education & Certifications</h2>
      <br></br>

      <div className="education-card">
        <h3>B.Tech in Computer Science and Engineering</h3>
        <p>SRM Institute of Science and Technology, Chennai</p>
        <p>2021 – 2025</p>
      </div>
        <br></br>
        <br></br>
      <h4>Certifications</h4>
      <br></br>
      <ul className="certs-list">
        {certificates.map((c) => (
          <li key={c.name}>
            <a href={c.link} target="_blank" rel="noreferrer">
              {c.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}