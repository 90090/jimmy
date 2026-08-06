import React from 'react';
import './Footer.css';
import logo from '../images/Jimmys.png';
import chamberLogo from '../images/wo-web.png'; // add this image to your images folder

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-column footer-location">
          <h2>Location</h2>
          <p>1067 Main Street</p>
          <p>Watertown, CT 06795</p>
          <p><a href="tel:8602743223">(860) 274-3223</a></p>
          <div className="footer-hours">
            <p><span>Mon–Sat</span> 5:30am – 2pm</p>
            <p><span>Sunday</span> 5:30am – 12:30pm</p>
          </div>
        </div>

        <div className="footer-column footer-logo-col">
          <img src={logo} alt="Jimmy's of Watertown" className="footer-logo" />
        </div>

        <div className="footer-column footer-badges">
          <div className="badge-item chamber-badge">
            <img src={chamberLogo} alt="Watertown Chamber of Commerce" />
            <p>Proud Member of the<br />Watertown Chamber of Commerce</p>
          </div>

          <div className="badge-item">
            <link href="https://awards.infcdn.net/2024/circle_v3.css" rel="stylesheet" />
            <div
              id="circle_bw"
              data-length="29"
              className="circle_bw_black rg-award-lang-en_US"
              onClick={(e) => {
                if (e.target.nodeName.toLowerCase() !== 'a') {
                  window.open(e.currentTarget.querySelector('.circle_bw_link').href);
                }
              }}
            >
              <p className="circle_bw_year">2026</p>
              <div className="circle_bw_name"
                
                  className="circle_bw_link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://restaurantguru.com/Jimmys-Of-Watertown-Watertown-Connecticut"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="178px" height="178px" viewBox="0 0 178 178">
                    <defs>
                      <path id="circle_bw_name-arc" d="M 12 89 a 77 77 0 0 0 154 0"></path>
                    </defs>
                    <text className="circle_bw_name_txt" fill="#000" textAnchor="middle">
                      <textPath startOffset="50%" xlinkHref="#circle_bw_name-arc">
                        Jimmy's of Watertown
                      </textPath>
                    </text>
                  </svg>
                
              </div>
              <div className="circle_bw_nom">
                <svg xmlns="http://www.w3.org/2000/svg" width="200px" height="200px" viewBox="0 0 200 200">
                  <defs>
                    <path id="circle_bw_nom-arc1" d="M 30 100 a 70 70 0 1 1 140 0"></path>
                  </defs>
                  <text className="circle_bw_nom_txt" fill="#000" textAnchor="middle">
                    <textPath startOffset="50%" xlinkHref="#circle_bw_nom-arc1">
                      Recommended
                    </textPath>
                  </text>
                </svg>
              </div>
              <a className="circle_bw_home" style={{ fontSize: 0 }} href="https://restaurantguru.com" target="_blank" rel="noreferrer">
                Restaurant Guru
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;