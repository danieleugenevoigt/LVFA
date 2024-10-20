import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './slideshow.css';

function Slideshow({ imageUrls }) {
  const [currentIndex, setCurrentIndex] = useState(13);
  const slideshowRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000); // Change interval duration as needed (5000 ms = 5 seconds)

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [imageUrls]); // Re-run effect if imageUrls change

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (slideshowRef.current) {
      slideshowRef.current.classList.remove('fade-out');
      slideshowRef.current.classList.add('fade-in');

      // Set timeout to trigger fade-out after a delay
      const timeoutId = setTimeout(() => {
        slideshowRef.current.classList.remove('fade-in');
        slideshowRef.current.classList.add('fade-out');

        // Reset currentIndex after fade-out animation completes
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, 2000); // Wait for fade-out animation duration (1000ms = 1 second)
      }, 2000); // Wait before starting fade-out (3000ms = 3 seconds)

      return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount
    }
  }, [currentIndex, imageUrls]); // Re-run effect when currentIndex or imageUrls change

  return (
    <div className="slideshow-container">
      {imageUrls.map((imageUrl, index) => (
        <img
          key={imageUrl} // Use imageUrl as the unique key
          src={imageUrl}
          alt={`Slideshow Art ${index + 1}`}
          className={index === currentIndex ? 'visible' : 'hidden'}
          style={{
            opacity: index === currentIndex ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
}

Slideshow.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;
