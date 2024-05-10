import React from 'react';
import './exhibition.css';

function Exhibition() {
  return (
    <div className="eventsPageContent">
      <h2>Upcoming Events</h2>
      <div className="event">
        <a href="https://www.evergreenfineartsfestival.com/">Evergreen Fine Arts Festival</a>
        <p> August 23-24, 2024</p>
      </div>
      <div className="eventDescription">
        <p>Come see me at the Evergreen fine Arts Festival, booth #102 !</p>
      </div>
    </div>
  );
}

export default Exhibition;
