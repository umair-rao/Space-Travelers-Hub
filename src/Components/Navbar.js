import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../logo/planet.png';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <img className="logo-image" src={logo} alt="Logo" />
      <h1>Space Travelers` Hub</h1>
    </div>

    <div className="nav-links">
      <ul className="menu-list">
        <li className="list-item">
          <Link to="/">Rockets</Link>
        </li>
        <li className="list-item">
          <Link to="/missions">Missions</Link>
        </li>
        <li className="list-item">
          <Link to="/dragons">Dragons</Link>
        </li>
        <li className="list-item">
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
    <NavLink />
  </nav>
);

export default Navbar;
