import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Nav';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Aboutme from './pages/Aboutme';
import Home from './pages/Home';
import Background from './components/Background';
import Footer from './components/Footer';
import Budo from './pages/Budo';

const App = () => {
  const [currentPage, setCurrentPage] = useState('/');

  const images = [
    'coding-wallpaper.png',
    'math-wallpaper.png',
    'web-wallpaper.PNG'
    // Add more image URLs as needed
  ];

  const renderPage = () => {
    switch (currentPage) {
      case '/':
        return <Home />;
      case '/aboutme':
        return <Aboutme />;
      case '/experience':
        return <Experience />;
      case '/education':
        return <Education />;
      case '/budo':
        return <Budo />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Background images={images} />
      <Navbar navigate={setCurrentPage} />
      {renderPage()}
      <Footer />
    </>
  );
};

export default App;
