/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className="contactPageContent">
      <p>
        For gallery availability, custom work, or other questions, email&nbsp;
        <a
          href="mailto:contact@laurenvoigtfineart.com"
          aria-label="Email contact@laurenvoigtfineart.com"
        >
          contact@laurenvoigtfineart.com
        </a>
      </p>
      <div className="imageCard">
        <div className="artistPhoto">
          <img src={`${process.env.PUBLIC_URL}/images/Lauren-Profile-Pic-1.jpeg`} alt="The Artist" />
        </div>
        <div className="artistWorkingPhoto">
          <img src={`${process.env.PUBLIC_URL}/images/Lauren-Working.jpg`} alt="The Artist Working" />
        </div>
        <div className="artistWorkingDetailPhoto">
          <img src={`${process.env.PUBLIC_URL}/images/Lauren-Working-Detail.jpg`} alt="The Artist Working Close Up" />
        </div>
      </div>
    </div>

  );
}

export default Contact;
