import React from 'react';
import './home.css';
import Slideshow from '../slideshow/Slideshow';

function Home() {
  const baseUrl = `${process.env.PUBLIC_URL}/images/slideshow-`;
  const imageUrls = [
    `${baseUrl}${1}.png`,
    `${baseUrl}${2}.png`,
    `${baseUrl}${3}.png`,
    `${baseUrl}${4}.png`,
    `${baseUrl}${5}.png`,
    `${baseUrl}${6}.png`,
    `${baseUrl}${7}.png`,
    `${baseUrl}${8}.png`,
    `${baseUrl}${9}.png`,
  ];
  return (
    <div className="home">
      <p>
        Welcome to Lauren Voigt Fine Art.
        It is a joy to share my creations with you.
        {' '}
      </p>
      <Slideshow imageUrls={imageUrls} />
    </div>
  );
}

export default Home;
