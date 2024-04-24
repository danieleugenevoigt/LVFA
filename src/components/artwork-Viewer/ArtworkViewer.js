import React from 'react';
import './artworkViewer.css';
import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';

function ArtworkViewer() {
  return (
    <div className="artworkViewerContainer">
      <div>
        <img src={image1} alt="artwork-series-1" />
        <img src={image2} alt="artwork-series-2" />
        <img src={image3} alt="artwork-series-3" />
      </div>
    </div>
  );
}

export default ArtworkViewer;
