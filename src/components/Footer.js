import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon from react-icons
import { FaFileAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import '../CSS/Email.css'; // Make sure to create this CSS file

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div className="email-container" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <MdEmail size={25} /> {/* Email icon */}
          <span>francisco.fuentes@alumni.uc.cl</span>
        </div>
        <a
          href="https://github.com/Francisco5674"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <FaGithub size={30} /> {/* GitHub icon */}
          <span>My Github</span>
        </a>
        <a
          href="Resume_Francisco_Fuentes.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
        <FaFileAlt size={30} /> {/* CV icon */}
        <span>My CV</span>
        </a>
      </div>
    </footer>
  );
};

// Inline styles for footer and links
const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0)', // Dark background
    color: 'white',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    margin: 0, // Ensure no extra margins
    boxSizing: 'border-box', // Include padding and border in the element's total width and height
  };
  
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px', // Space between the GitHub and CV link
  };
  
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
  };
  
  const cvLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column', // Stacks icon on top of the text
    alignItems: 'center',
  };  

export default Footer;
