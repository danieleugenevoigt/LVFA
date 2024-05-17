/* eslint-disable max-len */
import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about">
      <div className="colOne">
        <h2>The Process</h2>
        <p>
          In my artistic process, I begin with a feeling, emotion, or resonant words. These intangible sparks start my initial vision.

          Utilizing modern software tools, I refine this vision, shaping it into a digital painting that captures the essence of my inspiration. Here, attention is paid to color palettes, layering for depth and tone, and fine-tuning details to ensure the integrity of the piece.
        </p>
        <br />
        <br />
        <p>
          Yet, it is in the transition from digital to physical that the true essence of my work emerges. Employing the precision of CNC laser cutting, I translate the digital canvas into tangible layers of paper.

          Hand-assembling each layer, I imbue the work with a personal touch, occasionally adding or subtracting details to enhance the piece&apos;s coherence.

          In this synthesis of modern technology and traditional craftsmanship, I find fulfillment in the act of creation. It is a process that honors both the innovation of digital tools and the timeless beauty of paper as a medium of expression.
        </p>
      </div>
      <div className="colTwo">
        <video autoPlay muted className="videoContainer">
          <source src={`${process.env.PUBLIC_URL}/videos/lvfa-timelapse-trapped-low.mp4`} alt="timelapse video" type="video/mp4" />
          {/* Add additional <source> tags for other video formats like webm, ogg, etc. */}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default About;
