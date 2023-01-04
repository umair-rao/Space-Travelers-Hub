import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../logo/planet.png';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img className="logo-image" src={logo} alt="Logo" />
        <h1>Space Travelers` Hub</h1>
      </Link>
      <div className="nav-links">
        <ul>
          <li><Link to="/" className={`link ${pathname === '/' ? 'active' : ''}`}>Rockets</Link></li>
          <li><Link to="/missions" className={`link ${pathname === '/missions' ? 'active' : ''}`}>Missions</Link></li>
          <li><Link to="/dragons" className={`link ${pathname === '/dragons' ? 'active' : ''}`}>Dragons</Link></li>
          <li><Link to="/profile" className={`link ${pathname === '/profile' ? 'active' : ''}`}>Profile</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
