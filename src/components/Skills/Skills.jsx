import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div id="skills" className="container">
      <div className='skill'>
        <h2>Experience</h2>
        <h1>My Skills</h1>

        <div className="grid-container">
          <SkillBox
            title="Technical Skills"
            skills={[
              'Web Development',
              'Object-Oriented Programming',
              'Data Structures & Algorithms',
              'Development & Operations',
            ]}
          />

          <SkillBox
            title="Web & Database"
            skills={[
              'HTML/CSS',
              'Node.js',
              'React',
              'Bootstrap',
              'Material UI',
              'Axios'
            ]}
          />

          <SkillBox
            title="Programming Languages"
            skills={[
              'C',
              'C++',
              'Python',
              'JavaScript/ES6'
            ]}
          />

          <SkillBox
            title="Relevant Coursework"
            skills={[
              'Data Strcutures and Algorithms in C++',
              'Porgramming Concepts',
              'Computer Organization',
              'Computer Architecture',
              'Discrete Structures',
              'Program Design'
            ]}
          />
        </div>
      </div>
    </div>
  );
};

const SkillBox = ({ title, skills }) => (
  <div className="skill-box">
    <h3>{title}</h3>
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>
          <span>✔</span> {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default Skills;
