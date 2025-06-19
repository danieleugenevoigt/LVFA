/* eslint-disable react/forbid-prop-types */
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function GalleryCatalog({ catalog, onThumbnailClick, styles }) {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8); // Default for desktop
  const containerRef = useRef(null);

  // Responsive items per page calculation
  useEffect(() => {
    function updateItemsPerPage() {
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth;
      if (width < 500) setItemsPerPage(20); // Mobile
      else if (width < 900) setItemsPerPage(20); // Tablet
      else setItemsPerPage(20); // Desktop
    }
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const startIdx = page * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const visibleCatalog = catalog.slice(startIdx, endIdx);

  return (
    <div>
      <div ref={containerRef} className={styles.galleryContainer}>
        {visibleCatalog.map((product) => (
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
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
        {page > 0 && (
          <button type="button" onClick={() => setPage(page - 1)}>
            Back
          </button>
        )}
        {endIdx < catalog.length && (
          <button type="button" onClick={() => setPage(page + 1)}>
            More
          </button>
        )}
      </div>
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
  styles: PropTypes.object,
};

GalleryCatalog.defaultProps = {
  styles: '',
};

export default GalleryCatalog;
