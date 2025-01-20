import React from 'react';
import PropTypes from 'prop-types';
import styles from './galleryCatalog.module.css';

function GalleryCatalog({ catalog, onThumbnailClick, customClass }) {
  return (
    <div className={`${styles.galleryContainer} ${customClass || ''}`}>
      {catalog.map((product) => (
        <button
          className={styles.thumbnailButton}
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
  customClass: PropTypes.string, // New optional prop
};

// Default props to avoid ESLint warning
GalleryCatalog.defaultProps = {
  customClass: '',
};

export default GalleryCatalog;
