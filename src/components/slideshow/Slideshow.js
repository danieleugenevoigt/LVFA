import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './slideshow.css'; // Assuming you have CSS for styling

function Slideshow({ imageUrls }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000); // Change interval duration as needed (3000 ms = 3 seconds)

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [imageUrls.length]); // Re-run effect if imageUrls length changes

  return (
    <div className="slideshow-container">
      {imageUrls.map((imageUrl, index) => (
        <img
          key={Math.random(imageUrl)} // Assuming each imageUrl is unique
          src={imageUrl}
          alt={`Slideshow Art ${index + 1}`}
          className={index === currentIndex ? 'visible' : 'hidden'}
        />
      ))}
    </div>
  );
}

Slideshow.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;
