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
        <li><NavLink exact to="/" activeClassName="active" onClick={handleToggleMenu}>Home</NavLink></li>
        <li><NavLink to="/gallery" activeClassName="active" onClick={handleToggleMenu}>Gallery</NavLink></li>
        <li><NavLink to="/about" activeClassName="active" onClick={handleToggleMenu}>Process</NavLink></li>
        <li><NavLink to="/exhibition" activeClassName="active" onClick={handleToggleMenu}>Exhibition</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active" onClick={handleToggleMenu}>Contact</NavLink></li>
      </ul>
    </div>
  );
}

export default Header;
