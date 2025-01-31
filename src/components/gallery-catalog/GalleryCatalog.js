import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StaticImageViewer from '../staticImageViewer/StaticImageViewer';

function GalleryCatalog({ catalog, onThumbnailClick, styles }) {
  const [hoveredImage, setHoveredImage] = useState(null);

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
          onMouseEnter={() => {
            if (product.hoverEnabled) {
              setHoveredImage(product.imageArray[1]); // Use larger image
            }
          }}
          onMouseLeave={() => setHoveredImage(null)}
          style={{ cursor: product.hoverEnabled ? 'pointer' : 'default' }}
        >
          <img src={product.imageArray[0]} alt={product.title} />
        </button>
      ))}

      {/* Show StaticImageViewer only when hovered */}
      <StaticImageViewer imageSrc={hoveredImage} />
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
