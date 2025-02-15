/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import './exhibition.css';

function Exhibition() {
  return (
    <div className="eventsPageContent">
      <Helmet>
        <title>Home - Lauren Voigt Fine Art</title>
        <meta name="description" content="Welcome to the Exhibition page of Lauren Voigt Fine Art" />
        <meta name="keywords" content="Lauren Voigt, Fine Art, Exhibition page, Events, Gallery List, Art Gallery" />
        <meta property="og:title" content="Exhibition - Lauren Voigt Fine Art" />
        <meta property="og:description" content="Welcome to the Exhibition page of Lauren Voigt Fine Art" />
        <meta property="og:image" content="%PUBLIC_URL%/lvfa-home.jpg" />
        <meta property="og:url" content="https://laurenvoigtfineart.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Exhibition - Lauren Voigt Fine Art" />
        <meta name="twitter:description" content="Welcome to the Exhibition page of Lauren Voigt Fine Art" />
        <meta name="twitter:image" content="%PUBLIC_URL%/lvfa-home.jpg" />
        <link rel="canonical" href="https://laurenvoigtfineart.com/" />
      </Helmet>
      <div className="col1">
        <h2>Events</h2>
        <div className="event">
          <a
            href="https://www.evergreenfineartsfestival.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Evergreen Fine Arts Festival
          </a>
          <p> Aug 24-25 2024 </p>
          {/* <p>10-5p</p> */}
        </div>
        <div className="eventDescription">
          <p>- Recipient of the &quot;Emerging Artist&quot; award</p>
        </div>
      </div>
      <div className="col2">
        <h2>Viewing</h2>
        <div className="event">
          {/* <a href="http://www.stoneheartgallery.com/home.html">Currently Pursuing Galleries</a> */}
          <a
            href="http://www.stoneheartgallery.com/home.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stoneheart Gallery
          </a>
          <p> Sept 2024 - Current</p>
        </div>
      </div>
    </div>
  );
}

export default Exhibition;
