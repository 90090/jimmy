import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'
import Footer from '../Footer'; 

const Contact = () => {

  return (
    <div className="container">
      <div className="intro-text">
        <h1>Have a Question?</h1>
        <h2>Contact Us!</h2>
      </div>
      <div className="contact-container">
        <div className="left-section">
          <h3 className="section-header">Hours of Operation</h3>
          <p>Monday - Saturday: 5:30am - 2pm</p>
          <p>Sunday: 5:30am - 12pm</p>
          <p className="phone">(860) 274-3223</p>
          <div className="social-icons">
            <Link to="https://www.facebook.com/jimmysofwatertown/" target="_blank" className="social-media-icon">
              <i className='fa fa-facebook-square' />
            </Link>
            <Link to="https://www.instagram.com/jimmysofwatertownct/" target="_blank" className="social-media-icon">
              <i className='fa fa-instagram' />
            </Link>
          </div>
        </div>
        <div className="right-section">
          <h3 className="section-header">Stop By</h3>
          <div className="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11935.179154142112!2d-73.111287!3d41.595322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7eac7c33ffc4f%3A0xeb131ab759df1630!2sJimmy&#39;s%20of%20Watertown!5e0!3m2!1sen!2sus!4v1717713644597!5m2!1sen!2sus" 
            title='Jimmys'
            width="600" 
            height="600" 
            style={{border:0}} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          </div>
        </div>
      </div>
      <div className='footer-section'>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
