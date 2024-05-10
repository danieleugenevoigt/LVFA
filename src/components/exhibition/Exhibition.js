import React from 'react';
import './exhibition.css';

function Exhibition() {
  return (
    <div className="eventsPageContent">
      <div className="col1">
        <h2>Upcoming Events</h2>
        <div className="event">
          <a href="https://www.evergreenfineartsfestival.com/">Evergreen Fine Arts Festival</a>
          <p> Aug 23-24, 2024</p>
          <p>10-5p</p>
        </div>
        <div className="eventDescription">
          <p>Come see me at the Evergreen fine Arts Festival, booth #102 !</p>
        </div>
      </div>
      <div className="col2">
        <h2>Viewing</h2>
        <div className="event">
          <a href="http://www.stoneheartgallery.com/home.html">Stoneheart Gallery</a>
          <p> Jun 2024 - Current</p>
        </div>
      </div>
    </div>
  );
}

export default Exhibition;
