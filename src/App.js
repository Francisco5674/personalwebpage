import React from 'react';
import './App.css';
import Navbar from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Aboutme from './pages/Aboutme';
import Home from './pages/Home';
import Background from './components/Background';
import Footer from './components/Footer';
import Budo from './pages/Budo';

function App() {

  const images = [
    'coding-wallpaper.png',
    'math-wallpaper.png',
    'web-wallpaper.PNG'
    // Add more image URLs as needed
  ];

  return (
    <>
      <Background images={images} />
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/aboutme'  element={<Aboutme />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/education' element={<Education />} />
          <Route path='/budo' element={<Budo />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
