import React from 'react';
import './Footer.css'; // Import CSS for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </div>
        

        <div className="footer-section contact-info">
          <h2>Contact Info</h2>
          <p>Email: abdalla15@usf.edu</p>
          <p>Phone: +1 (321)-588 6006</p>
          <p>Location: Tampa, FL</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Steven Abdalla. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
