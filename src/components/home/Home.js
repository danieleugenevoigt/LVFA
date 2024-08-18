/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Helmet } from 'react-helmet';
import './home.css';
import Slideshow from '../slideshow/Slideshow';

function Home() {
  const baseUrl = `${process.env.PUBLIC_URL}/images/slideshow-`;
  const imageUrls = [
    `${baseUrl}${1}.webp`,
    `${baseUrl}${2}.webp`,
    `${baseUrl}${3}.webp`,
    `${baseUrl}${4}.webp`,
    `${baseUrl}${5}.webp`,
    `${baseUrl}${6}.webp`,
    `${baseUrl}${7}.webp`,
    `${baseUrl}${8}.webp`,
    `${baseUrl}${9}.webp`,
    `${baseUrl}${10}.webp`,
    `${baseUrl}${11}.webp`,
    `${baseUrl}${12}.webp`,
  ];
  return (
    <div className="home">
      <Helmet>
        <title>Home - Lauren Voigt Fine Art</title>
        <meta name="description" content="Welcome to the homepage of Lauren Voigt Fine Art" />
        <meta name="keywords" content="Lauren Voigt, Fine Art, Homepage, Slideshow, Art Gallery" />
        <meta property="og:title" content="Home - Lauren Voigt Fine Art" />
        <meta property="og:description" content="Welcome to the homepage of Lauren Voigt Fine Art" />
        <meta property="og:image" content="%PUBLIC_URL%/lvfa-home.jpg" />
        <meta property="og:url" content="https://laurenvoigtfineart.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home - Lauren Voigt Fine Art" />
        <meta name="twitter:description" content="Welcome to the homepage of Lauren Voigt Fine Art" />
        <meta name="twitter:image" content="%PUBLIC_URL%/lvfa-home.jpg" />
        <link rel="canonical" href="https://laurenvoigtfineart.com/" />
      </Helmet>
      <Slideshow imageUrls={imageUrls} />
      <p className="welcomeMsg">
        Welcome to Lauren Voigt Fine Art.
        My works are each created from digital art, which are then transformed into laser-cut paper
        and arranged by hand into the final product.
        {' '}
      </p>
    </div>
  );
}

export default Home;
