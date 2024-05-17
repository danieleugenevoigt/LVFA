/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import './artworkViewer.css';
import ProductView from '../product-view/ProductView';

function ArtworkViewer({ product }) {
  ArtworkViewer.propTypes = {
    product: PropTypes.string.isRequired,
  };
  return (
    <div className="artworkViewer">
      <ProductView folder={product.title} size={product.size} />
    </div>
  );
}

export default ArtworkViewer;
