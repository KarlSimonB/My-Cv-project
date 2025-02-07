import React from 'react';
import './Header.css';
import myImage from './jag.jpg'; // Profile Picture
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <img src={myImage} alt="Profile picture" className="header__image" />
        <div className="header__text">
          <h1 className="header__name">Simon Bergstrand</h1>
          <p className="header__title">Front-End Web Developer</p>
        </div>
      </div>
      <nav>
        <ul className="nav__links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/info">Info</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;



