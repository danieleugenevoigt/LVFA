import React from 'react';
import PropTypes from 'prop-types';
import './staticImageViewer.css';

function StaticImageViewer({ imageSrc }) {
  return imageSrc ? (
    <div className="static-image-viewer">
      <img src={imageSrc} alt="Hovered preview" className="static-image" />
    </div>
  ) : null;
}

StaticImageViewer.propTypes = {
  imageSrc: PropTypes.string,
};

StaticImageViewer.defaultProps = {
  imageSrc: null,
};

export default StaticImageViewer;
