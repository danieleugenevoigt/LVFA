import { React } from 'react';
import './App.css';
import Header from './components/header/ Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <div className="contentContainer" />
        <Footer />
      </header>
    </div>
  );
}

export default App;
