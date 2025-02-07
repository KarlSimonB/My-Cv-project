import React from 'react';
import '../styles/Card.css'; // Reusing the card styles

const Education = () => {
  return (
    <div className="card">
      <h2>My Education</h2>
      <ul>
        <li>
          <h3>Front-End Web Development YH</h3>
          <p>2024 - 2026</p>
        </li>
        <li>
          <h3>Woodworking Gymnasium Program</h3>
          <p>2012 - 2015</p>
        </li>
      </ul>
    </div>
  );
};

export default Education;
