import React from 'react';
import './videoLoop.css';

function VideoLoop() {
  return (
    <div className="videoContainer">
      <video autoPlay loop muted style={{ transform: 'rotate(90deg)' }}>
        <source src={`${process.env.PUBLIC_URL}/videos/lvfa-timelapse-trapped-2.mp4`} alt="timelapse video" type="video/mp4" />
        {/* Add additional <source> tags for other video formats like webm, ogg, etc. */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoLoop;
