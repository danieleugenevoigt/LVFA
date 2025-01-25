// Custom Page
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './custom.css';
import ArtworkViewer from '../artwork-Viewer/ArtworkViewer';
import customProducts from '../../database/customProducts';

function Custom() {
  const location = useLocation();
  const productName = location.state?.productName || customProducts[0]?.name;
  const initialProduct = customProducts.find((product) => product.name === productName)
  || customProducts[0];

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
        <p className="contentToggle">The finished artwork, original photograph and detail image.</p>
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
