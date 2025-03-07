import React from 'react'
import '../../App.css'
import './Home.css';
import ReviewCarousel from '../ReviewCarousel'; 
import Footer from '../Footer'; 
import food28 from '../../images/food28.JPG';
import food29 from '../../images/food29.jpeg';
import food31 from '../../images/food31.JPG';
import food35 from '../../images/food35.JPG';
import front from '../../images/front.JPG';
import awardImage1 from '../../images/finalistbadge.png';
import awardImage2 from '../../images/badge2.png';

function Home() {
    return (
      <div className="home-container">
        <div className="intro-section">
          <img src={front} alt="Jimmy's of Watertown" className="intro-image" />
          <div className="intro-text">
            <div className="award-section">
              <div className="images">
                <img src={awardImage1} alt="Award 1" />
                <img src={awardImage2} alt="Award 2" />
              </div>
              <p className="thank-you-message">
                We are proud to announce that we are a finalist in the Connecticut Magazine's Best of CT 2024 - voted for Best Diner in Connecticut.  We appreciate all your support and a big thank you to those who voted for us!  Check out the write up <a href="https://www.ctpost.com/best/map/best-diners-ct/?_ga=2.206755216.269544480.1720637107-339256483.1711040382" target="_blank" rel="noopener noreferrer">Here</a>.
              </p>
            </div>
            <h1>Welcome to Jimmy's of Watertown</h1>
            <h2>All American Grill</h2>
            <p>Jimmy's of Watertown is a family-owned establishment that has been serving the local community with fresh, hot, house-made breakfast and lunch for the past twenty years. Nestled in the heart of Watertown, it is a staple for locals and visitors, offering a welcoming atmosphere and a large menu catering to all.</p>
            <p>Bring your whole family for a delicous meal at Jimmys! We can accomodate partys of up to 20 people!</p>
          </div>
        </div>
        <div className="images-section">
          <img src={food28} alt="1" className="grid-image" />
          <img src={food29} alt="2" className="grid-image" />
          <img src={food31} alt="3" className="grid-image" />
          <img src={food35} alt="4" className="grid-image" />
        </div>
        <div className="reviews-section">
            <h3 className='signup-section'>Google Business Reviews</h3>
            <ReviewCarousel />
        </div>
        <div className="location-section">
          <div className="location-info">
            <h4>Location</h4>
            <p>1067 Main Street, Watertown, CT 06795</p>
          </div>
          <div className="hours-info">
            <h4>Hours of Operation</h4>
            <p>Mon-Sat: 5:30am - 2pm</p>
            <p>Sun: 5:30am - 12pm</p>
          </div>
        </div>
        <div className='footer-section'>
            <Footer />
        </div>
      </div>
    );
  }
  
  export default Home;