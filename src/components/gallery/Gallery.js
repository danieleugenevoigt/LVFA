import React, { useState } from 'react';
import './gallery.css';
import ArtworkViewer from '../artwork-Viewer/ArtworkViewer';
import GalleryCatalog from '../gallery-catalog/GalleryCatalog';
import products from '../../database/products';

function Gallery() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleThumbnailClick = (product) => {
    setSelectedProduct(product);
  };
  return (
    <div className="galleryPageContent">
      <ArtworkViewer product={selectedProduct || products[0]} />
      <GalleryCatalog catalog={products} onThumbnailClick={handleThumbnailClick} />
    </div>
  );
}

export default Gallery;
