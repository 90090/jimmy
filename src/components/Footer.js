import React from 'react';
import './Footer.css'; 
import logo from '../images/Jimmys.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Location</h2>
          <p>1067 Main Street</p>
          <p>Watertown, CT 06795</p>
          <p>(860) 274-3223</p>
          <p>Monday - Saturday: 5:30am - 2pm</p>
          <p>Sunday: 5:30am - 12pm</p>
        </div>
        <div className="footer-right">
          <img src={logo} alt="Business Logo" className="footer-logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
