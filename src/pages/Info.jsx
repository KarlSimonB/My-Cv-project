import React from 'react';
import '../styles/Card.css'; // Reuse the card styling

const Info = () => {
  return (
    <div className="card">
      <h2>Contact Information</h2>
      <p><strong>Phone:</strong> +46 73-319-2212</p>
      <p><strong>Address:</strong> Hebbegatan 4B, 73830, Norberg, Sweden</p>
      <p><strong>Email:</strong> Karlsimonbergstrand@outlook.com</p>
      
      <h3>Find me online:</h3>
      <ul className="info__links">
        <li><a href="https://github.com/KarlSimonB" target="_blank" rel="noopener noreferrer">🔗 GitHub</a></li>
        <li><a href="https://linkedin.com/simonbplaceholder" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a></li>
        <li><a href="https://placeholderportfolio.com/simonb" target="_blank" rel="noopener noreferrer">🔗 Portfolio</a></li>
      </ul>
    </div>
  );
};

export default Info;

