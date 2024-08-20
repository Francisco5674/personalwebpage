import React from 'react';
import '../CSS/Aboutme.css'; // Make sure to create this CSS file
import IconGrid from '../components/Icongrid';

function Aboutme() {
  return (
    <div className='aboutme-container'>
      <div className='aboutme-box'>
        <img src='PUC_0015.JPG' alt='Your Name' className='aboutme-image' />
        <div className='aboutme-text'>
            <center>
            <h1>About me</h1>
            </center>
        <p>I am currently working in <b>demand and power market estimation</b> for the Federal Reserve Bank of Chicago, the University of California Berkeley, and Michigan State University. Some of my interests in economy are but not limited to <b>theoretical microeconomics, game theory, auctions, information design, and econometrics</b>. However, I also have a strong passion for <b>web development, data science, database administration, and Software engineering in general</b>.   </p>
        <IconGrid/>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
