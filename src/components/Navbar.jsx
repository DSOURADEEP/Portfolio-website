import React from 'react';
import '../styles/components/navbar.css';
import { ReactComponent as Sun } from '../images/sun.svg';
import { ReactComponent as Moon } from '../images/moon.svg';

export default function Navbar() {
  const toggle = () => {
    const html = document.documentElement;
    html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
  };

  return (
    <nav className="navbar">
      <h1>Souradeep Das</h1>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
        <button className="theme-toggle" onClick={toggle}>
          {document.documentElement.dataset?.theme === 'dark' ? <Sun /> : <Moon />}
        </button>
      </div>
    </nav>
  );
}