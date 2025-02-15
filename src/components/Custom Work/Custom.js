/* eslint-disable import/no-extraneous-dependencies */
// Custom Page
import { React, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import UndoIcon from '@mui/icons-material/Undo';
import './custom.css';
import customStyles from './customGallery.module.css';
import ArtworkViewer from '../artwork-Viewer/ArtworkViewer';
import GalleryCatalog from '../gallery-catalog/GalleryCatalog';
import customProducts from '../../database/customProducts';

// Import all galleries statically
import galleryA from '../../database/Nanny/customProductDetail';
import galleryB from '../../database/AJ/customProductDetail';
import galleryC from '../../database/Izzy/customProductDetail';

// Map product names to their corresponding gallery data
const allGalleries = {
  Nanny: galleryA,
  AJ: galleryB,
  Izzy: galleryC,
};

function Custom() {
  const location = useLocation();
  const productName = location.state?.productName || customProducts[0]?.name;
  const initialProduct = customProducts.find((product) => product.name === productName)
    || customProducts[0];

  const [currentProduct, setCurrentProduct] = useState(initialProduct);
  const selectedCatalog = allGalleries[currentProduct.name] || null;
  const navigate = useNavigate();

  // Function to handle "Next" button click
  const handleNext = () => {
    const currentIndex = customProducts.findIndex(
      (product) => product.name === currentProduct.name,
    );
    const nextIndex = (currentIndex + 1) % customProducts.length; // Cycle to the next product
    setCurrentProduct(customProducts[nextIndex]);
  };

  // Function to handle "Last" button click
  const handleLast = () => {
    const currentIndex = customProducts.findIndex(
      (product) => product.name === currentProduct.name,
    );
    const lastIndex = (currentIndex - 1 + customProducts.length)
    % customProducts.length; // Ensure positive index
    setCurrentProduct(customProducts[lastIndex]);
  };

  return (
    <div className="customWorkPageContent">
      <Helmet>
        <title>Custom Artwork - Lauren Voigt Fine Art</title>
        <meta name="description" content="Custom art pieces by Lauren Voigt Fine Art" />
        <meta property="og:title" content="Custom Artwork - Lauren Voigt Fine Art" />
        <meta property="og:description" content="Discover custom art pieces tailored to your vision." />
        <meta property="og:image" content="%PUBLIC_URL%/lvfa-custom.jpg" />
        <meta property="og:url" content="https://laurenvoigtfineart.com/custom" />
      </Helmet>

      <ArtworkViewer product={currentProduct} />
      <div className="customPageContentLayout">
        {/* Render GalleryCatalog only if the catalog exists */}
        {selectedCatalog ? (
          <GalleryCatalog
            catalog={selectedCatalog}
            onThumbnailClick={() => {}}
            styles={customStyles}
          />
        ) : (
          <p>No gallery available for this product.</p>
        )}
        <div className="customGalleryTextLayout">
          <p>detail image</p>
          <p>original image</p>
        </div>
        <div>
          <div className="button-container">
            <button
              type="button"
              className="contact-button"
              onClick={handleLast}
              aria-label="Previous Artwork"
            >
              <ChevronLeftIcon />
            </button>
            <button
              type="button"
              className="contact-button"
              onClick={() => navigate('/landingCustom')}
              aria-label="Go Back to Custom Gallery"
            >
              <UndoIcon />
            </button>
            <button
              type="button"
              className="contact-button"
              onClick={handleNext}
              aria-label="Next Artwork"
            >
              <ChevronRightIcon />
            </button>
          </div>
          <p>
            Collaborate with me to bring your artistic dreams to life
            through the timeless, delicate beauty of paper art.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Custom;
