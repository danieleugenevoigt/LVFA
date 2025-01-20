/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import './gallery.css';
import ArtworkViewer from '../artwork-Viewer/ArtworkViewer';
import GalleryCatalog from '../gallery-catalog/GalleryCatalog';
import products from '../../database/products';

function Gallery({ customClass = '' }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleThumbnailClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className={`galleryPageContent ${customClass}`}>
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
      <ArtworkViewer product={selectedProduct || products[0]} />
      <GalleryCatalog catalog={products} onThumbnailClick={handleThumbnailClick} />
    </div>
  );
}

// Prop validation
Gallery.propTypes = {
  customClass: propTypes.string,
};

// Define default props
Gallery.defaultProps = {
  customClass: '',
};

export default Gallery;
