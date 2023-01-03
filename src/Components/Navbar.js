import React from 'react';
import logo from '../logo/planet.png';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <img className="logo-image" src={logo} alt="Logo" />
      <h1>Space Travelers` Hub</h1>
    </div>

    <div className="nav-links">
      <ul>
        <li>Rockets</li>
        <li>Missions</li>
        <li>Dragons</li>
        <li>Profile</li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
