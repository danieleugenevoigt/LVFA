import React, { useState } from 'react';

export default function SimpleSlider() {
  const [value, setValue] = useState(0);
  const [number, setNumber] = useState(1);
  // const imagePath = '../../images';
  // {`${imagePath}/car-${number}.png`}
  // {`${process.env.PUBLIC_URL}/images/car-${number}.png`}

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    let newData = Math.round((newValue * (36 / 101)));
    if (newData === 0) {
      newData = 1;
    }
    setNumber(newData);
    setValue(newValue);
  };

  return (
    <div>
      <h2>360 Image View</h2>
      <img src={`${process.env.PUBLIC_URL}/images/car-${number}.png`} width="800" height="400" alt={`Car ${number}`} />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>Slide to view different angles:</span>
        <input
          type="range"
          min="0"
          max="102"
          value={value}
          onChange={handleChange}
          style={{ width: '300px', margin: '0 10px' }}
        />
        <span>{value}</span>
      </div>
    </div>
  );
}
