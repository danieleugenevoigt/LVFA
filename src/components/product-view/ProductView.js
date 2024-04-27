import React, { useState } from 'react';
import './productView.css';

export default function SimpleSlider() {
  const [value, setValue] = useState(50);
  const [number, setNumber] = useState(1);
  const title = 'Sample art title 12" by 12" 2023';

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    let newData = Math.round((newValue * (36 / 100)));
    if (newData === 0) {
      newData = 1;
    }
    setNumber(newData);
    setValue(newValue);
  };

  return (
    <div className="container">
      <img src={`${process.env.PUBLIC_URL}/images/car-${number}.png`} alt={`Car ${number}`} />
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
        <h2 className="title">{title}</h2>
      </div>
    </div>
  );
}
