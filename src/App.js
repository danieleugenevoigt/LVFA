import { React } from 'react';
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
import News from './components/news/News';
import Exhibition from './components/exhibition/Exhibition';
import Contact from './components/contact/Contact';
import PageNotFound from './components/page-not-found/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/exhibition" element={<Exhibition />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
