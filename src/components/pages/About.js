import React, { useState, useRef} from 'react';
import { Masonry } from '@mui/lab';
import { Card, CardMedia } from '@mui/material';
import './About.css'; 
import Aboutus from '../../images/Aboutus.png';
import inside2 from '../../images/inside2.jpg';
import front2 from '../../images/front2.jpg';
import food1 from '../../images/food1.png';
import food2 from '../../images/food2.png';
import food3 from '../../images/food3.png';
import food4 from '../../images/food4.png';
import food5 from '../../images/food5.jpg';
import food6 from '../../images/food6.jpg';
import food7 from '../../images/food7.jpg';
import food8 from '../../images/food8.jpg';
import food9 from '../../images/food9.jpg';
import food10 from '../../images/food10.jpg';
import food11 from '../../images/food11.jpg';
import food12 from '../../images/food12.jpg';
import food13 from '../../images/food13.jpg';
import food14 from '../../images/food14.jpg';
import food15 from '../../images/food15.jpg';
import food16 from '../../images/food16.jpg';
import food17 from '../../images/food17.jpg';
import food18 from '../../images/food18.jpg';
import food19 from '../../images/food19.jpg';
import food20 from '../../images/food20.jpg';
import food21 from '../../images/food21.jpg';
import food22 from '../../images/food22.jpg';
import food23 from '../../images/food23.jpg';
import food24 from '../../images/food24.jpg';
import food25 from '../../images/food25.jpg';
import food26 from '../../images/food26.JPG';
import food27 from '../../images/food27.JPG';
import food28 from '../../images/food28.JPG';
import food29 from '../../images/food29.jpeg';
import food30 from '../../images/food30.JPG';
import food31 from '../../images/food31.JPG';
import food32 from '../../images/food32.JPG';
import food33 from '../../images/food33.JPG';
import food34 from '../../images/food34.JPG';
import food35 from '../../images/food35.JPG';
import food36 from '../../images/food36.JPG';
import food37 from '../../images/food37.JPG';
import inside1 from '../../images/inside1.JPG';
import santa from '../../images/santa.JPG'
import Footer from '../Footer'; 

const About = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const openOverlay = (index) => {
        setCurrentImageIndex(index);
        setShowOverlay(true);
    };

    const closeOverlay = () => {
        setShowOverlay(false);
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleClickOutside = (event) => {
        if (event.target.classList.contains('overlay')) {
            closeOverlay();
        }
    };

    const handleTouchStart = (event) => {
        touchStartX.current = event.touches[0].clientX;
    };

    const handleTouchMove = (event) => {
        touchEndX.current = event.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current - touchEndX.current > 50) {
            goToNextImage();
        }

        if (touchStartX.current - touchEndX.current < -50) {
            goToPrevImage();
        }
    };

    const images = [inside1,front2, food26,food27,food28,food29,food30,food31,food32,food33,food34,food35,food36,food37,food1, food2, food3, food4, santa, food5, food6, food7, food8, food9, food10, food11, food12,food13,food14,food15,food16,food17,food18,food19,food20,food21,food22,food23,food24,food25];



    return (
        <div>
        <div className="about-page">
            <h1>About Us</h1>
            <div className="header">
                    <div className="left-column">
                        <div className="restaurant-info">
                            <h1>An All American Grill</h1>
                            <p>Beyond the delectable food, Jimmy's of Watertown's warm and friendly service sets it apart. The family and staff treat every customer like a cherished guest, creating an inviting and comfortable environment where everyone feels at home. Whether you're stopping by for a quick bite before work or enjoying a leisurely meal with friends and family, Jimmy's of Watertown is the perfect place to savor delicious food and create lasting memories.</p>
                        </div>
                        <div className="inside-pic">
                            <img src={inside2} alt="Inside of the Restaurant"/>
                        </div>
                    </div>
                    <div className="restaurant-image">
                        <img src={Aboutus} alt="Restaurant" />
                    </div>
                </div>
            <div className="photo-gallery">
                <h2>Photo Gallery</h2>
                <Masonry columns={4} spacing={1}>
                    {images.map((image, index) => (
                        <Card className="photos" key={index} onClick={() => openOverlay(index)}>
                            <CardMedia component="img" image={image} alt={`Number ${index + 1}`} />
                        </Card>
                    ))}
                </Masonry>
            </div>
            {showOverlay && (
                <div className="overlay" 
                onClick={handleClickOutside}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}>
                    <span className="close" onClick={closeOverlay}>&times;</span>
                    <img src={images[currentImageIndex]} alt={`Number ${currentImageIndex + 1}`} />
                    <div className="prev" onClick={goToPrevImage}>&#10094;</div>
                    <div className="next" onClick={goToNextImage}>&#10095;</div>
                </div>
            )}
            
        </div>
            <div className='footer-section'>
                <Footer />
            </div>
        </div>
    );
};

export default About;
