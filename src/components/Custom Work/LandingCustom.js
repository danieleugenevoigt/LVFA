/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink, useNavigate } from 'react-router-dom';
import './landingCustom.css';
import landingGalleryStyles from './landingCustomGallery.module.css';
import GalleryCatalog from '../gallery-catalog/GalleryCatalog';
import customProducts from '../../database/customProducts';

function LandingCustom() {
  const navigate = useNavigate();

  const handleThumbnailClick = (product) => {
    navigate('/custom', { state: { productName: product.name } });
  };

  return (
    <div className="customWorkPageContent">
      <Helmet>
        <title>Home - Lauren Voigt Fine Art</title>
        <meta name="description" content="Welcome to the Gallery page of Lauren Voigt Fine Art" />
        <meta name="keywords" content="Lauren Voigt, Fine Art, Gallery, Interactive Viewer, Art" />
        <meta property="og:title" content="Gallery - Lauren Voigt Fine Art" />
        <meta property="og:description" content="Explore the fine art collection by Lauren Voigt" />
        <meta property="og:image" content="%PUBLIC_URL%/lvfa-home.jpg" />
        <meta property="og:url" content="https://laurenvoigtfineart.com/" />
      </Helmet>

      <div className="landingCustomPageContentLayout">
        <h2 className="landingContentToggle">
          Your photographs - Meticulously Captured In The Timeless Medium Of Paper
        </h2>
        <div className="mainContentLinks">
          <NavLink to="/faq" className={({ isActive }) => (isActive ? 'active link' : 'link')}>Frequently Asked Questions</NavLink>
        </div>
        <p>select one of the images below for details</p>
        <GalleryCatalog
          catalog={customProducts}
          onThumbnailClick={handleThumbnailClick}
          styles={landingGalleryStyles}
        />

        <div className="mainContent">
          <p>
            I specialize in custom hand-crafted 3D laser-cut paper artworks tailored to your unique
            photos. My intricate designs transform memories into
            stunning visual masterpieces.
          </p>

        </div>
      </div>
    </div>
  );
}

export default LandingCustom;
