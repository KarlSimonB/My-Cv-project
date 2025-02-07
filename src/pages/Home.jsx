import React from 'react';
import '../styles/Card.css'; // Reuse the card styles

const Home = () => {
  return (
    <div className="card">
      <h2>Welcome to My Resume Page!</h2>
      <p>
        Hello! I’m Simon Bergstrand, a Web Developer transitioning from a career in carpentry. 
        This page is an overview of my work, education, and skills, as well as different ways to contact me.
      </p>
      <p>
        Feel free to explore my <a href="/projects">projects</a>, learn more about my <a href="/experience">work experience</a>, and check out my <a href="/skills">skills</a>.
      </p>
    </div>
  );
};

export default Home;

