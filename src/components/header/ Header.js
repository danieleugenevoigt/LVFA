import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="headerMain">
      <h1>Lauren Voigt Fine Art</h1>
      <ul className="navMenu">
        <li>Gallery</li>
        <li>About</li>
        <li>News</li>
        <li>Events</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Header;
