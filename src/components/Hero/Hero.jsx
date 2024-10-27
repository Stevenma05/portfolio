import React from 'react';
import './Hero.css';
import animeMe from '../../assets/animation.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; 

function Hero() {
  return (
    <div className="hero">
      <img className="image" src={animeMe} alt="Me animated" />
      <div className="heroText">
        <p>Hello, I'm</p>
        <h1>Steven Abdalla</h1>
        <h2>I am a passionate computer science student</h2>
        <a
          href="https://drive.google.com/file/d/13itJ2LjAfkjh71Ktlg1LxQU8zQHJsFy_/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className="ref">Get Resume</button>
        </a>

        {/* Social Links */}
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/steven-abdalla-2b0727309/"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Stevenma05"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
