// Custom Page
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './custom.css';
import customStyles from './customGallery.module.css';
import ArtworkViewer from '../artwork-Viewer/ArtworkViewer';
import GalleryCatalog from '../gallery-catalog/GalleryCatalog';
import customProducts from '../../database/customProducts';

function Custom() {
  const location = useLocation();
  const productName = location.state?.productName || customProducts[0]?.name;
  const initialProduct = customProducts.find((product) => product.name === productName)
  || customProducts[0];

  const [selectedProduct, setSelectedProduct] = useState(initialProduct);
  const [customCatalog, setCustomCatalog] = useState(null);

  useEffect(() => {
    // Set initial state when the component mounts
    setSelectedProduct(initialProduct);
    // Dynamically import the correct customProductDetail file
    import(`../../database/${productName}/customProductDetail.js`)
      .then((module) => setCustomCatalog(module.default))
      .catch((error) => {
        console.error(`Failed to load catalog for ${productName}:`, error);
        setCustomCatalog(null); // Fallback to null or a default catalog if needed
      });
  }, [initialProduct, productName]);

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

      <ArtworkViewer product={selectedProduct} />
      <div className="customPageContentLayout">
        <div className="customGalleryTextLayout">
          <p>detail image</p>
          <p>original image</p>
        </div>
        {/* Only render GalleryCatalog if customCatalog is successfully loaded */}
        {customCatalog ? (
          <GalleryCatalog
            catalog={customCatalog}
            onThumbnailClick={() => {}}
            styles={customStyles}
          />
        ) : (
          <p>Loading catalog...</p>
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
