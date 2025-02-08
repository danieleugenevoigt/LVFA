// Custom Page
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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

  const selectedCatalog = allGalleries[productName] || null;

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

      <ArtworkViewer product={initialProduct} />
      <div className="customPageContentLayout">
        <div className="customGalleryTextLayout">
          <p>detail image</p>
          <p>original image</p>
        </div>
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
        <div>
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
