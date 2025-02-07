import React from 'react';
import '../styles/Card.css';  // Reuse the card styling

const Projects = () => {
  const projects = [
    {
      title: "School Group Project - Pärmar & Poesi",
      description: "Book store website with stock, contact, recommendations & event info.",
      link: "https://karlsimonb.github.io/ParmarPoesiFinal/"
    },
    {
      title: "School Group Project - Mavisige Grillhouse",
      description: "Web-App for customers to order food & drinks from their tables at the restaurant.",
      link: "https://github.com/KarlSimonB/restaurant-project"
    }
  ];

  return (
    <div className="card">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">🔗View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;


