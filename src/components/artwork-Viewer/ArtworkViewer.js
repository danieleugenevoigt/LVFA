/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import './artworkViewer.css';
import ProductVideoLoop from '../product-video-loop/productVideoLoop';

function ArtworkViewer({ product }) {
  ArtworkViewer.propTypes = {
    product: PropTypes.object.isRequired,
  };
  return (
    <div className="artworkViewer">
      <ProductVideoLoop title={product.title} />
      <div className="imageInfo">
        <h2 className="title-left">{`" ${product.title} "  `}</h2>
        <h2 className="title-right">{`  ${product.size} `}</h2>
      </div>
    </div>
  );
}

export default ArtworkViewer;
