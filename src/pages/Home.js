import React, { useState, useEffect } from 'react';
import '../CSS/Home.css'; // Make sure to create this CSS file

function Home() {
  const [subtitle, setSubtitle] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const subtitles = ['MA in Economics', 'Data Scientist', 'Web Developer']; // Array of subtitles
  const typingSpeed = 100; // Speed of typing in milliseconds
  const erasingSpeed = 50; // Speed of erasing in milliseconds
  const delayBeforeErasing = 2000; // Delay before starting to erase in milliseconds

  useEffect(() => {
    const currentSubtitle = subtitles[currentIndex];
    let currentText = '';

    const typeEffect = () => {
      if (currentText.length < currentSubtitle.length) {
        currentText += currentSubtitle[currentText.length];
        setSubtitle(currentText);
        setTimeout(typeEffect, typingSpeed);
      } else {
        setIsTyping(false);
        setTimeout(() => eraseEffect(), delayBeforeErasing);
      }
    };

    const eraseEffect = () => {
      if (currentText.length > 0) {
        currentText = currentText.slice(0, -1);
        setSubtitle(currentText);
        setTimeout(eraseEffect, erasingSpeed);
      } else {
        setIsTyping(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % subtitles.length);
      }
    };

    typeEffect();

    // Cleanup on component unmount
    return () => {
      setSubtitle('');
      setIsTyping(false);
    };
  }, [currentIndex]);

  return (
    <div className='home'>
      <h1>Francisco Ignacio Fuentes Toro</h1> {/* Replace with your big name */}
      <h2>{subtitle}</h2> {/* Dynamic subtitle with typewriter effect */}
    </div>
  );
}


export default Home;
