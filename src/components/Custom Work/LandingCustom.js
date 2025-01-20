// import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './landingCustom.css';
import customStyles from './landingCustomGallery.module.css';
import GalleryCatalog from '../gallery-catalog/GalleryCatalog';
// import ArtworkViewer from '../artwork-Viewer/ArtworkViewer';
import customProducts from '../../database/customProducts';

function LandingCustom() {
  return (

    <div className="customWorkPageContent">
      <Helmet>
        <title>Home - Lauren Voigt Fine Art</title>
        <meta name="description" content="Welcome to the Gallery page of Lauren Voigt Fine Art" />
        <meta name="keywords" content="Lauren Voigt, Fine Art, Gallerypage, Interactive Viewer, Art Gallery" />
        <meta property="og:title" content="Gallery - Lauren Voigt Fine Art" />
        <meta property="og:description" content="Welcome to the Gallery page of Lauren Voigt Fine Art" />
        <meta property="og:image" content="%PUBLIC_URL%/lvfa-home.jpg" />
        <meta property="og:url" content="https://laurenvoigtfineart.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gallery - Lauren Voigt Fine Art" />
        <meta name="twitter:description" content="Welcome to the Gallery page of Lauren Voigt Fine Art" />
        <meta name="twitter:image" content="%PUBLIC_URL%/lvfa-home.jpg" />
        <link rel="canonical" href="https://laurenvoigtfineart.com/" />
      </Helmet>

      {/* <ArtworkViewer product={selectedProduct || customProducts[0]} /> */}
      <div className="landingCustomPageContentLayout">
        {/* <h1 className="landingContentToggle">Your Vision</h1> */}
        <h2 className="landingContentToggle">Your vision - Meticulously Captured In The Timeless Medium Of Paper</h2>
        <GalleryCatalog
          customClass={`${customStyles.galleryContainer} ${customStyles.thumbnailButton} ${customStyles.thumbnailButtonImg}`}
          catalog={customProducts}
          onThumbnailClick={null}
        />
        <div className="mainContent">
          <p>
            I specialize in creating bespoke, hand-crafted 3D laser-cut paper artworks tailored to
            your unique vision.  My intricate designs and meticulous craftsmanship transform
            memories into stunning visual masterpieces.
            Collaborate with me to bring your artistic dreams to life
            through the timeless, delicate beauty of paper art.  Please contact me about bringing
            your vision to life.
          </p>
        </div>
      </div>
    </div>

  );
}

export default LandingCustom;
