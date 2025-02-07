import React from 'react';
import '../styles/Card.css';

const Skills = () => {
  const skills = [
    'React',
    'JavaScript',
    'CSS',
    'Redux',
    'HTML',
    'Node.js',
    'Git',
    'TypeScript',
    'CSS Preprocessors (SASS/LESS)'
  ];

  return (
    <div className="card">
      <h2>My Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;


