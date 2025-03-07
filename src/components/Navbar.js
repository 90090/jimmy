import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/Jimmys.png';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [button, setButton] = useState(true);
  const location = useLocation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.menu-dropdown') === null) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const getNavLinkClass = (path) => {
    if (
      location.pathname === path ||
      (path === '/menu' && ['/menu', '/breakfast', '/lunch'].includes(location.pathname))
    ) {
      return 'nav-button-active';
    }
    return 'nav-button';
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className="phone-number">
            <i className="fas fa-phone"></i> (860) 274-3223
          </div>
          <div className='social-media-icons'>
            <Link to="https://www.facebook.com/jimmysofwatertown/" target="_blank" className="social-media-icon">
              <i className='fa fa-facebook-square' />
            </Link>
            <Link to="https://www.instagram.com/jimmysofwatertownct/" target="_blank" className="social-media-icon">
              <i className='fa fa-instagram' />
            </Link>
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <div className="navbar-center">
              <Link to="/" className={getNavLinkClass('/')} onClick={closeMobileMenu}>Home</Link>
              <div
                className="menu-dropdown"
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
                onClick={closeMobileMenu}
              >
                <Link to="/menu" className={getNavLinkClass('/menu')} onClick={closeMobileMenu}>Menu</Link>
                {isMenuOpen && (
                  <div className="dropdown-content">
                    <Link to="/breakfast"  onClick={closeMobileMenu}>Breakfast</Link>
                    <Link to="/lunch" onClick={closeMobileMenu}>Lunch</Link>
                  </div>
                )}
              </div>
              <Link to="/about" className={getNavLinkClass('/about')} onClick={closeMobileMenu}>About</Link>
              {!click && (
                <Link to="/" className="logo-link" onClick={closeMobileMenu}>
                  <img src={logo} alt="Logo" className="logo" />
                </Link>
              )}
              <Link to="/contact" className={getNavLinkClass('/contact')} onClick={closeMobileMenu}>Contact</Link>
              <Link to="https://squareup.com/gift/RJ1JNDFE2E7DJ/order" target="_blank" className={getNavLinkClass('/giftcards')} onClick={closeMobileMenu}>Gift Cards</Link>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
