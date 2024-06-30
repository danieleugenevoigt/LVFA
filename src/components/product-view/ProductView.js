/* eslint-disable no-plusplus */
/* eslint-disable no-loop-func */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './productView.css';

export default function SimpleSlider({ folder, size }) {
  const [value, setValue] = useState(50);
  const [number, setNumber] = useState(16);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    let newData = Math.round(newValue * (31 / 100));
    if (newData === 0) {
      newData = 1;
    }
    setNumber(newData);
    setValue(newValue);
  };

  const preloadImage = (url, onLoad) => {
    const img = new Image();
    img.src = url;
    img.onload = onLoad;
  };

  useEffect(() => {
    const preloadImages = () => {
      const totalImages = 31;
      let loadedCount = 0;

      for (let i = 1; i <= totalImages; i++) {
        const url = `${process.env.PUBLIC_URL}/images/${folder}/art-${i}.png`;
        preloadImage(url, () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setImagesLoaded(true);
          }
        });
      }
    };

    preloadImages();
    setValue(50);
    setNumber(16);
  }, [folder]);

  return (
    <div className="container">
      {imagesLoaded ? (
        <>
          <img src={`${process.env.PUBLIC_URL}/images/${folder}/art-${number}.png`} alt={`Art ${number}`} />
          <div className="imageInfo">
            <div className="slider">
              <span>View Angle:</span>
              <input
                className="sliderSetup"
                type="range"
                min="1"
                max="100"
                value={value}
                onChange={handleChange}
              />
            </div>
            <h2 className="title-left">{`" ${folder} "  `}</h2>
            <h2 className="title-right">{`  ${size} `}</h2>
          </div>
        </>
      ) : (
        <div>Loading images...</div>
      )}
    </div>
  );
}

SimpleSlider.propTypes = {
  folder: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
