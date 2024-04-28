import React from 'react';
import './galleryCatalog.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function GalleryCatalog({ catalog, onThumbnailClick }) {
  return (
    <div className="galleryContainer">
      {catalog.map((product) => (
        <button
          className="thumbnailButton"
          type="button"
          title={product.title}
          size={product.size}
          key={product.title}
          onClick={() => onThumbnailClick(product)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onThumbnailClick(product);
            }
          }}
        >
          <img src={product.imageArray[0]} alt={product.title} />
        </button>
      ))}
    </div>
  );
}

GalleryCatalog.propTypes = {
  catalog: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      imageArray: PropTypes.arrayOf(PropTypes.string).isRequired,
      status: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onThumbnailClick: PropTypes.func.isRequired,
};

export default GalleryCatalog;
