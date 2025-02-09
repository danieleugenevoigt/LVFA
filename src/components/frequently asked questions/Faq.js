import React from 'react';
import { Helmet } from 'react-helmet';
import './faq.css';

function Faq() {
  return (
    <div>
      <Helmet>
        <title>Home - Lauren Voigt Fine Art</title>
        <meta name="description" content="Welcome to the Frequently Asked Questions page of Lauren Voigt Fine Art" />
        <meta name="keywords" content="Lauren Voigt, Fine Art, Frequently Asked Questions page, Interactive Viewer, Art Gallery" />
        <meta property="og:title" content="Frequently Asked Questions - Lauren Voigt Fine Art" />
        <meta property="og:description" content="Welcome to the Frequently Asked Questions page of Lauren Voigt Fine Art" />
        <meta property="og:image" content="%PUBLIC_URL%/lvfa-home.jpg" />
        <meta property="og:url" content="https://laurenvoigtfineart.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Frequently Asked Questions - Lauren Voigt Fine Art" />
        <meta name="twitter:description" content="Welcome to the Contact page of Lauren Voigt Fine Art" />
        <meta name="twitter:image" content="%PUBLIC_URL%/lvfa-home.jpg" />
        <link rel="canonical" href="https://laurenvoigtfineart.com/" />
      </Helmet>
      <div className="faqMainContent">
        <h1 className="faqTitle">Frequently Asked Questions</h1>
        <div className="faqText">
          <p className="faqQuestion">How much does a custom piece cost?</p>
          - $1200 (plus applicable Colorado sales tax). This includes FedEx shipping.
          <br />
          <br />
          <p className="faqQuestion">What size is the art?</p>
          - At this time, all art is a 12”x12” black framed shadow box.
          <br />
          <br />
          <p className="faqQuestion">What does the process of getting a custom piece look like?</p>
          <br />
          - First, look at the custom portraiture samples on my website and fall in love with
          the style of art.
          <br />
          - Email me at
          <a href="mailto:contact@laurenvoigtfineart.com"> contact@laurenvoigtfineart.com </a>
          to start the conversation.
          <br />
          - Once we have determined to move forward in the process I will send the commission
          contract for you to sign.
          <br />
          <br />
          Payments are split into three increments. You and I will
          work collaboratively through the whole process to ensure your satisfaction from
          determining the best photo to the final creation of your one of a kind piece of art.
          The artwork will then be shipped to your choice of location. Shipping is already included
          in the price.
          <br />
          <br />
          <p className="faqQuestion">How long does this process take?</p>
          - The answer to this is variable, depending on response time and waitlist, but generally
          around one month (or less) from ordering to receiving the artwork.
          <br />
          <br />
          <p className="faqQuestion">How can I pay?</p>
          - The payments are split into $250, $500, and $400 plus any applicable sales tax
          throughout the process. You will pay through PayPal which allows you to use many
          payment methods as a member or as a guest.
          <br />
          <br />
          <p className="faqQuestion">What is the return policy?</p>
          - This is a unique commissioned piece of Artwork. Therefore, I do not accept any
          returns or provide any refunds. Understandably, all sales are final.
          <br />
          <br />
          <p className="faqQuestion">I have questions that were not answered here. What should I do?</p>
          - I am happy to have a discussion to answer any questions you may have.
          Please send me an email at
          <a href="mailto:contact@laurenvoigtfineart.com"> contact@laurenvoigtfineart.com </a>
          to get the
          conversation started! I look forward to hearing from you.
        </div>
      </div>
    </div>
  );
}

export default Faq;
