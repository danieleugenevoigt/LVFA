/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './productView.css';

export default function SimpleSlider({ folder, size }) {
  const [value, setValue] = useState(50);
  const [number, setNumber] = useState(16);

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    let newData = Math.round((newValue * (31 / 100)));
    if (newData === 0) {
      newData = 1;
    }
    setNumber(newData);
    setValue(newValue);
  };

  SimpleSlider.propTypes = {
    folder: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
  };

  useEffect(() => {
    setValue(50);
    setNumber(16);
  }, [folder]);

  return (
    <div className="container">
      <img src={`${process.env.PUBLIC_URL}/images/${folder}/art-${number}.webp`} alt={`Art ${number}`} />
      <div className="imageInfo">
        <div className="slider">
          <span className="rotate-icon">&#x21bb;</span>
          <span className="rotate-control">Rotate The Art!</span>
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
    </div>
  );
}
