import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="headerMain">
      <h1>Lauren Voigt Fine Art</h1>
      <ul className="navMenu">
        <li>
          <a href="/">
            Home
            {' '}
          </a>
        </li>
        <li>
          <a href="/gallery">
            Gallery
            {' '}
          </a>
        </li>
        <li>
          <a href="/about">
            About
            {' '}
          </a>
        </li>
        <li>
          <a href="/news">
            News
            {' '}
          </a>
        </li>
        <li>
          <a href="/events">
            Events
            {' '}
          </a>
        </li>
        <li>
          <a href="/contact">
            Contact
            {' '}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
