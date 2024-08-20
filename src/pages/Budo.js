import React from 'react';
import '../CSS/Budo.css'; // Make sure to create this CSS file
function Budo() {
  return (
    <div className='budo-container'>
      <div className='budo-box'>
        <img src='zekken.png' alt='Your Name' className='budo-image' />
        <div className='budo-text'>
            <center>
            <h1>Iaido Training</h1>
            In a different section of my life I also have been training <b>Iaido</b>  for a year so far, it has been an incredible experience at Santiago Budokan, the Dojo I belong alongside the teachings of Díaz Sensei.
            <br/>
            <br/>
            Iaido Rank: IKKYU <a href='1kyu.jpg'>code</a> and <a href='1kyuc.jpg'>certificate</a>
            <br/>
            <a href="https://santiagobudokan.cl/" target="_blank" rel="noopener noreferrer">
              <img src="logo_budokan.png" alt="Description" className='budo-image'/>
            </a>
            </center>
        </div>
      </div>
    </div>
  );
}

export default Budo;
