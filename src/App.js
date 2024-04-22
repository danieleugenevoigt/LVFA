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
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
