import React from 'react';
import PropTypes from 'prop-types';

function GalleryCatalog({ catalog, onThumbnailClick, styles }) {
  return (
    <div className={styles.galleryContainer}>
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
      hoverEnabled: PropTypes.bool,
    }),
  ).isRequired,
  onThumbnailClick: PropTypes.func.isRequired,
  styles: PropTypes.string,
};

GalleryCatalog.defaultProps = {
  styles: '',
};

export default GalleryCatalog;
