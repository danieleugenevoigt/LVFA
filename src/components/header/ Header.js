import React, { useState } from 'react';
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
        <li><a href="/">Home</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/news">News</a></li>
        <li><a href="/exhibition">Exhibition</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default Header;
