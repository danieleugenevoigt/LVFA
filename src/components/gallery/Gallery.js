import React from 'react';
import './gallery.css';
import ArtworkViewer from '../artwork-Viewer/ArtworkViewer';
import GalleryCatalog from '../gallery-catalog/GalleryCatalog';
import products from '../../database/products';

function Gallery() {
  function onClick() {
    console.log('clicked');
  }
  return (
    <div className="galleryPageContent">
      <ArtworkViewer />
      <GalleryCatalog catalog={products} onThumbnailClick={onClick()} />
    </div>
  );
}

export default Gallery;
