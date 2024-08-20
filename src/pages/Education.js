import React from 'react';
import '../CSS/Education.css'; // Make sure to create this CSS file

function Education() {
  return (
    <div className='education-container'>
      <div className='education-box'>
        <img src='PUC.png' alt='Your Name' className='education-image' />
        <div className='education-text'>
            <center>
            <h1>MA in Economics</h1>
            <p>Pontificia Universidad Católica de Chile, Santiago, Chile</p>
            <a href="Possibilities_with_mechanisms_under_limited_commitment.pdf">MA thesis</a>
            </center>
        
        </div>
      </div>
      <div className='education-box'>
        <img src='PUC.png' alt='Your Name' className='education-image' />
        <div className='education-text'>
            <center>
            <h1>BA in Economics</h1>
            <p>Pontificia Universidad Católica de Chile, Santiago, Chile  </p>
            </center>
        
        </div>
      </div>
      <div className='education-box'>
        <img src='PUC.png' alt='Your Name' className='education-image' />
        <div className='education-text'>
            <center>
            <h1>Computer Science Certification</h1>
            <p>Pontificia Universidad Católica de Chile, Santiago, Chile  </p>
            </center>
        </div>
      </div>
    </div>
  );
}

export default Education;
