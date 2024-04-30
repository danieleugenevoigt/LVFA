import React from 'react';
import './videoLoop.css';

function VideoLoop() {
  return (
    <div className="videoContainer">
      <video autoPlay loop muted>
        <source src="path_to_your_video_file.mp4" type="video/mp4" />
        {/* Add additional <source> tags for other video formats like webm, ogg, etc. */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoLoop;
