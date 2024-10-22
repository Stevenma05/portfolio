import React from 'react';
import './Projects.css';
import mathlogo from "../../assets/mathgame.png";
import predictlogo from "../../assets/predictlogo.jpg";
import notespic from "../../assets/notepic.png";
import personal from "../../assets/animation.png";
import robot from "../../assets/robot.jpg";
import smart from "../../assets/smart.png"

function Projects() {
  const projects = [
    {
      title: "Sugar Smart",
      image: smart, 
      github: 'https://github.com/Stevenma05/Sugar-Smart.git',
      liveDemo: 'https://sugarsmart.netlify.app/',
    },
    {
      title: "Diabetes ML Predictor",
      image: predictlogo, 
      github: 'https://github.com/Stevenma05/Diabetes-ML.git',
      liveDemo: 'https://drive.google.com/file/d/1L6mwxDuxpsM2zjmK3Xh8zuzbFhAaqW6L/view?usp=sharing',
    },
    {
      title: 'Math Dash',
      image: mathlogo, 
      github: 'https://github.com/Stevenma05/math-dash.git',
      liveDemo: 'https://math-dash.netlify.app/',
    },
    {
      title: 'Notie',
      image: notespic,
      github: 'https://github.com/Stevenma05/Notie.git',
      liveDemo: 'https://keepernotie.netlify.app',
    },
    {
      title: 'Object-following Robot',
      image: robot, 
      github: 'https://github.com/kalyanoliveira/arduinoFollow',
      liveDemo: 'https://www.youtube.com/watch?v=WMERjh2hVWc',
    },
    {
      title: 'Personal Portfolio',
      image: personal, 
      github: 'https://github.com/Stevenma05/portfolio.git',
      liveDemo: 'https://www.stevenabdalla.com',
    },
  ];

  return (
    <div >
      <div className="projects-container" id="projects">
        <h2 className="projects-heading">My Recent Projects</h2>
        <h1 className="portfolio-title">Portfolio</h1>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <h3 className="project-title">{project.title}</h3>
              <div className="project-buttons">
                <a href={project.github} target="_blank" rel="noreferrer" className="btn github-btn">Github</a>
                <a href={project.liveDemo} target="_blank" rel="noreferrer" className="btn demo-btn">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
