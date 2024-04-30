/* eslint-disable max-len */
import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about">
      <h2>The Process</h2>
      <p>
        In my artistic process, I begin with the raw material of feeling, emotion, or resonant words. These intangible sparks ignite the creative journey, guiding me through the digital realm where I craft my initial vision.
        Utilizing modern software tools, I refine this vision, shaping it into a digital painting that captures the essence of my inspiration. Here, meticulous attention is paid to color palettes, layering for depth and tone, and fine-tuning details to ensure the integrity of the piece.
        Yet, it is in the transition from digital to physical that the true essence of my work emerges.
      </p>
      <p>
        Employing the precision of CNC laser cutting, I translate the digital canvas into tangible layers of paper, each piece a fragment waiting to be assembled.
        Hand-assembling each layer, I imbue the work with a personal touch, occasionally adding or subtracting details to enhance the piece&apos;s coherence. This process of deconstruction and reconstruction allows for a deeper engagement with the work, fostering a tangible connection between creator and creation.
        In this synthesis of modern technology and traditional craftsmanship, I find fulfillment in the act of creation. It is a process that honors both the innovation of digital tools and the timeless beauty of paper as a medium of expression. Through this journey, I discover not only the essence of my art but also a deeper understanding of myself as an artist.
      </p>
      <div className="videoContainer">
        <video autoPlay loop muted style={{ transform: 'rotate(90deg)' }}>
          <source src={`${process.env.PUBLIC_URL}/videos/lvfa-timelapse-trapped-2.mp4`} alt="timelapse video" type="video/mp4" />
          {/* Add additional <source> tags for other video formats like webm, ogg, etc. */}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default About;
