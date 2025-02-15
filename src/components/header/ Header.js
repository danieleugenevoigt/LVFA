import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleToggleMenu();
    }
  };

  return (
    <div className="headerMain">
      <h1>Lauren Voigt Fine Art</h1>
      <p>Hand Crafted 3D Paper Artwork</p>
      <div
        className={`navToggle ${isMenuOpen ? 'open' : ''}`}
        role="button"
        tabIndex={0}
        aria-label="button"
        onClick={handleToggleMenu}
        onKeyDown={handleKeyPress}
      >
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
      <ul className={`navMenu ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={handleToggleMenu}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={handleToggleMenu}
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={handleToggleMenu}
          >
            Process
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/exhibition"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={handleToggleMenu}
          >
            Exhibition
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/landingCustom"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={handleToggleMenu}
          >
            Custom Portraiture
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={handleToggleMenu}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
