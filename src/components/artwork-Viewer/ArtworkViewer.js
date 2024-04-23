import React from 'react';
import './artworkViewer.css';

function ArtworkViewer() {
  return (
    <div className="artworkViewerContainer">
      <div id="threesixty" />
      <div className="buttons-wrapper">
        <button className="button" id="prev" type="button">Prev</button>
        spin
        <button className="button" id="next" type="button">Next</button>
      </div>
    </div>
  );
}

export default ArtworkViewer;
