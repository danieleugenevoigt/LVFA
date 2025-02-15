/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import './about.css';

function About() {
  return (
    <div className="about">
      <Helmet>
        <title>Home - Lauren Voigt Fine Art</title>
        <meta name="description" content="Welcome to the About page of Lauren Voigt Fine Art" />
        <meta name="keywords" content="Lauren Voigt, Fine Art, About page, Timelapse Video, Art Gallery" />
        <meta property="og:title" content="About - Lauren Voigt Fine Art" />
        <meta property="og:description" content="Welcome to the About page of Lauren Voigt Fine Art" />
        <meta property="og:image" content="%PUBLIC_URL%/lvfa-home.jpg" />
        <meta property="og:url" content="https://laurenvoigtfineart.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About - Lauren Voigt Fine Art" />
        <meta name="twitter:description" content="Welcome to the About page of Lauren Voigt Fine Art" />
        <meta name="twitter:image" content="%PUBLIC_URL%/lvfa-home.jpg" />
        <link rel="canonical" href="https://laurenvoigtfineart.com/" />
      </Helmet>
      <div className="colOne">
        <h2>The Process</h2>
        <p>
          In my artistic process, I begin with raw feelings, emotions, or resonant words. These intangible sparks start my initial vision.

          Utilizing modern software tools, I refine this vision, shaping it into a digital painting that captures the essence of my inspiration. Here, attention is paid to color palettes, layering for depth and tone, and fine-tuning details to ensure the integrity of the piece remains.
        </p>
        <br />
        <br />
        <p>
          Yet, it is in the transition from digital to physical that the true essence of my work emerges. Employing the precision of CNC laser cutting, I translate the digital canvas into tangible layers of paper.
          I then hand assemble each layer, piece by piece, eventually producing the final work of art.
        </p>
        <br />
        <br />
        <p>
          In this synthesis of modern technology and traditional craftsmanship, I find fulfillment in the act of creation. It is a process that honors both the innovation of digital tools and the timeless beauty of paper as a medium of expression.
        </p>
      </div>
      <div className="colTwo">
        <video autoPlay muted className="videoContainer">
          <source src={`${process.env.PUBLIC_URL}/videos/lvfa-timelapse-trapped-low.mp4`} alt="timelapse video" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="imageContainer">
          <div className="artistWorkingPhoto">
            <img src={`${process.env.PUBLIC_URL}/images/Lauren-Working.jpg`} alt="The Artist Working" />
          </div>
          <div className="artistWorkingDetailPhoto">
            <img src={`${process.env.PUBLIC_URL}/images/Lauren-Working-Detail.jpg`} alt="The Artist Working Close Up" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
