import React from 'react';
import './pageNotFound.css';
import image1 from '../../images/pnf.png';

function PageNotFound() {
  return (
    <div className="pageNotFound">
      <h1>Page Not Found</h1>
      <img src={image1} alt="pic" />
    </div>
  );
}

export default PageNotFound;
