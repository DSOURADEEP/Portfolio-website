import React from 'react';
import '../styles/components/hero.css';
import { ReactComponent as Github } from '../images/github.svg';
import { ReactComponent as Linkedin } from '../images/linkedin.svg';
import { ReactComponent as Mail } from '../images/mail.svg';

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1>Souradeep Das</h1>
        <p className="role">Full Stack Developer</p>
        <p className="tagline">Turning ideas into scalable, elegant code.</p>
        <div className="hero-links">
          <a href="https://github.com/DSOURADEEP" target="_blank" rel="noreferrer">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/souradeep-das-dgp03211407" target="_blank" rel="noreferrer">
            <Linkedin />
          </a>
          <a href="mailto:dsouradeep728@gmail.com">
            <Mail />
          </a>
        </div>
      </div>
      <div className="hero-bg" />
    </header>
  );
}