import { React } from 'react';
import './App.css';
import Header from './components/header/ Header';
import Footer from './components/footer/Footer';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <div className="contentContainer">
          <About />
        </div>
        <Footer />
      </header>
    </div>
  );
}

export default App;
