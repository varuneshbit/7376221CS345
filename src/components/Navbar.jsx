import React from 'react';
import '../css/Navbar.css';
import logo from '../assets/logo.jpg';
import profileLogo from '../assets/profileLogo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img id="logo" src={logo} alt="Logo" />
      <ul className="nav-links">
        <li className="nav-item">Feed</li>
        <li className="nav-item">Top Users</li>
        <li className="nav-item">Trending Posts</li>
        <img id='plogo' src={profileLogo} alt="Profile" />
      </ul>
    </nav>
  );
};

export default Navbar;
