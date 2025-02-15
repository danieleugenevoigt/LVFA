import { React, useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';
import Home from './components/home/Home';
import Header from './components/header/ Header';
import Footer from './components/footer/Footer';
import Gallery from './components/gallery/Gallery';
import About from './components/about/About';
import Exhibition from './components/exhibition/Exhibition';
import LandingCustom from './components/Custom Work/LandingCustom';
import Custom from './components/Custom Work/Custom';
import Contact from './components/contact/Contact';
import Faq from './components/frequently asked questions/Faq';
import PageNotFound from './components/page-not-found/PageNotFound';

function App() {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    function checkOrientation() {
      const isPhone = window.innerWidth < 1024; // Targets phones, not tablets
      const isLandscape = window.innerWidth > window.innerHeight;

      setShowOverlay(isPhone && isLandscape);
    }

    window.addEventListener('resize', checkOrientation);
    checkOrientation(); // Run once on load

    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

  return (
    <div className="App">
      {showOverlay && (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.85)', // Dark overlay
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.5rem',
        textAlign: 'center',
        padding: '20px',
        zIndex: 9999,
      }}
      >
        Please rotate your phone to portrait mode.
      </div>
      )}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/exhibition" element={<Exhibition />} />
          <Route path="/landingCustom" element={<LandingCustom />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
