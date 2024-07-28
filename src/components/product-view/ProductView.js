/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './productView.css';

export default function SimpleSlider({ folder, size }) {
  const [value, setValue] = useState(50);
  const [number, setNumber] = useState(16);
  const [direction, setDirection] = useState('left'); // left or right
  const [isAnimating, setIsAnimating] = useState(true);
  const userInteracted = useRef(false);
  const sliderRef = useRef(null);

  const handleChange = (event) => {
    userInteracted.current = true;
    setIsAnimating(false);
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

  useEffect(() => {
    if (userInteracted.current || !isAnimating) return;

    const interval = setInterval(() => {
      setValue((prevValue) => {
        let newValue = prevValue;
        if (direction === 'left') {
          newValue -= 1;
          if (newValue <= 1) {
            setDirection('right');
          }
        } else {
          newValue += 1;
          if (newValue >= 100) {
            setDirection('left');
          }
        }

        let newData = Math.round((newValue * (31 / 100)));
        if (newData === 0) {
          newData = 1;
        }
        setNumber(newData);
        return newValue;
      });
    }, direction === 'left' ? 40 : 40); // 4 seconds to move left, 8 seconds to move right

    return () => {
      clearInterval(interval);
    };
  }, [direction, isAnimating]);

  useEffect(() => {
    const sliderElement = sliderRef.current;
    if (!sliderElement) return;

    const handleUserInteraction = () => {
      userInteracted.current = true;
      setIsAnimating(false);
    };

    sliderElement.addEventListener('mousedown', handleUserInteraction);
    sliderElement.addEventListener('touchstart', handleUserInteraction);

    return () => {
      sliderElement.removeEventListener('mousedown', handleUserInteraction);
      sliderElement.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  return (
    <div className="container">
      <img src={`${process.env.PUBLIC_URL}/images/${folder}/art-${number}.webp`} alt={`Art ${number}`} />
      <div className="imageInfo">
        <div className="slider">
          <span>View Angle:</span>
          <input
            ref={sliderRef}
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
