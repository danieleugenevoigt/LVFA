/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className="contactPageContent">
      <div className="imageCard">
        <div className="artistPhoto">
          <img src={`${process.env.PUBLIC_URL}/images/Lauren-Profile-Pic-1.jpeg`} alt="The Artist" />
        </div>
        <p className="textBox">
          For gallery availability, custom work, or other questions, email:&nbsp;&nbsp;
          <a
            className="mailToLink"
            href="mailto:contact@laurenvoigtfineart.com"
            aria-label="Email contact@laurenvoigtfineart.com"
          >
            contact@laurenvoigtfineart.com
          </a>
        </p>
      </div>
    </div>

  );
}

export default Contact;
