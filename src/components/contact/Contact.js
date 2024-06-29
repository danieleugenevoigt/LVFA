/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Helmet } from 'react-helmet';
import './contact.css';

function Contact() {
  return (
    <div className="contactPageContent">
      <Helmet>
        <title>Home - Lauren Voigt Fine Art</title>
        <meta name="description" content="Welcome to the Gallery page of Lauren Voigt Fine Art" />
        <meta name="keywords" content="Lauren Voigt, Fine Art, Contact page, Interactive Viewer, Art Gallery" />
        <meta property="og:title" content="Contact - Lauren Voigt Fine Art" />
        <meta property="og:description" content="Welcome to the Contact page of Lauren Voigt Fine Art" />
        <meta property="og:image" content="%PUBLIC_URL%/lvfa-home.jpg" />
        <meta property="og:url" content="https://laurenvoigtfineart.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact - Lauren Voigt Fine Art" />
        <meta name="twitter:description" content="Welcome to the Contact page of Lauren Voigt Fine Art" />
        <meta name="twitter:image" content="%PUBLIC_URL%/lvfa-home.jpg" />
        <link rel="canonical" href="https://laurenvoigtfineart.com/" />
      </Helmet>
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
