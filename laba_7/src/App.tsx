import React from 'react';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Content from './components/Content';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar active="1" />
      <Gallery />
      <Content />
      <Footer />
    </div>
  );
}

export default App;