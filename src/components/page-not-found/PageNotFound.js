import React from 'react';
import './pageNotFound.css';

function PageNotFound() {
  return (
    <div className="pageNotFound">
      <h1>Page Not Found</h1>
      <img src={`${process.env.PUBLIC_URL}/images/pnf.png`} alt="Not Found Magnifying Glass" />
    </div>
  );
}

export default PageNotFound;
