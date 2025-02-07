import React from 'react';
import '../styles/Card.css'; // Reusing the card styling

const Experience = () => {
  return (
    <div className="card">
      <h2>My Work Experience</h2>
      <ul>
        <li>
          <h3>Foreman/Working Supervisor at Bergslagshus AB</h3>
          <p>2022 - 2024</p>
        </li>
        <li>
          <h3>Carpenter/Woodworker at NID Group AB</h3>
          <p>2019 - 2022</p>
        </li>
        <li>
          <h3>Carpenter/Woodworker at Bo & Bygg AB</h3>
          <p>2018 - 2019</p>
        </li>
        <li>
          <h3>Carpenter/Woodworker Apprentice at Bo & Bygg AB</h3>
          <p>2015 - 2018</p>
        </li>
      </ul>
    </div>
  );
};

export default Experience;

