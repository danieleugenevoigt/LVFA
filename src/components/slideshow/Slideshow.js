import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './slideshow.css';

function Slideshow({ imageUrls, slideshowStartingImage }) {
  const startingIndex = imageUrls.indexOf(slideshowStartingImage);
  const [currentIndex, setCurrentIndex] = useState({ startingIndex });
  const [remainingImages, setRemainingImages] = useState([]);
  const slideshowRef = useRef(null);

  // Helper function to shuffle the array
  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  useEffect(() => {
    // Find the index of the starting image
    const starterIndex = imageUrls.indexOf(slideshowStartingImage);

    if (starterIndex === -1) {
      console.error('Starting image not found in imageUrls array');
      return;
    }

    // Set the starting image and shuffle the rest of the images
    const initialImages = [...imageUrls];
    initialImages.splice(starterIndex, 1); // Remove starting image from the list
    setRemainingImages(shuffleArray(initialImages)); // Shuffle the rest
    setCurrentIndex(starterIndex);
  }, [imageUrls, slideshowStartingImage]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // If no more images to show, reshuffle and start a new round
        if (remainingImages.length === 0) {
          const reshuffledImages = shuffleArray(imageUrls);
          setRemainingImages(reshuffledImages);
        }
        // Set the next image
        return (prevIndex + 1) % imageUrls.length;
      });
    }, 5000); // Adjust interval duration as needed

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [remainingImages, imageUrls]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (slideshowRef.current) {
      slideshowRef.current.classList.remove('fade-out');
      slideshowRef.current.classList.add('fade-in');

      const timeoutId = setTimeout(() => {
        slideshowRef.current.classList.remove('fade-in');
        slideshowRef.current.classList.add('fade-out');

        setTimeout(() => {
          // Move to the next random image after fade-out
          if (remainingImages.length > 0) {
            setCurrentIndex(imageUrls.indexOf(remainingImages[0]));
            setRemainingImages((prev) => prev.slice(1)); // Remove the displayed image
          }
        }, 2000); // Wait for fade-out animation duration
      }, 2000); // Wait before starting fade-out

      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, remainingImages, imageUrls]);

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
  slideshowStartingImage: PropTypes.string.isRequired,
};

export default Slideshow;
