import React from 'react';
import './home.css';
import ArtworkViewer from '../artwork-Viewer/ArtworkViewer';

function Home() {
  return (
    <div className="home">
      <p>
        Welcome to Lauren Voigt Fine Art.
        It is a joy to share my creations with you.
        Be sure to join the mailing list to be notified about new work,
        news, and events.
        {' '}
      </p>
      <ArtworkViewer />
    </div>
  );
}

export default Home;
