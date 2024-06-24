import React from 'react';
import './exhibition.css';

function Exhibition() {
  return (
    <div className="eventsPageContent">
      <div className="col1">
        <h2>Upcoming Events</h2>
        <div className="event">
          <a href="https://www.evergreenfineartsfestival.com/">Evergreen Fine Arts Festival</a>
          <p> Aug 23-24 </p>
          {/* <p>10-5p</p> */}
        </div>
        <div className="eventDescription">
          {/* <p>Come see me at the Evergreen fine Arts Festival!</p> */}
        </div>
      </div>
      <div className="col2">
        <h2>Viewing</h2>
        <div className="event">
          {/* <a href="http://www.stoneheartgallery.com/home.html">Currently Pursuing Galleries</a> */}
          <p>Currently Pursuing Galleries</p>
          <p> Jul 2024 - Current</p>
        </div>
      </div>
    </div>
  );
}

export default Exhibition;
