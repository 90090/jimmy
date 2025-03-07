import React, { useState } from 'react';
import './ReviewCarousel.css';
// import { fetchGoogleReviews } from '../googleReviewsService'; 

const ReviewsCarousel = () => {
  // const [reviews, setReviews] = useState([]);
  // const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const loadReviews = async () => {
  //     try {
  //       const queryURL = "https://www.google.com/maps/place/Jimmy's+of+Watertown/@41.595326,-73.1138619,17z/data=!4m18!1m9!3m8!1s0x89e7eac7c33ffc4f:0xeb131ab759df1630!2sJimmy's+of+Watertown!8m2!3d41.595322!4d-73.111287!9m1!1b1!16s%2Fg%2F1vpptk28!3m7!1s0x89e7eac7c33ffc4f:0xeb131ab759df1630!8m2!3d41.595322!4d-73.111287!9m1!1b1!16s%2Fg%2F1vpptk28?entry=ttu";
  //       const fetchedReviews = await fetchGoogleReviews(queryURL);        
  //       if (fetchedReviews.length > 0) {
  //         setReviews(fetchedReviews.slice(0, 5));
  //       } else {
  //         setError('No reviews found');
  //       }
  //     } catch (err) {
  //       setError('Failed to fetch reviews');
  //     }
  //   };
  //   loadReviews();

  //   const intervalId = setInterval(loadReviews, 300000);

  //   return () => clearInterval(intervalId);
  // }, []);

  

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  const reviews = [
    {
      author: "Paul Creaven",
      rating: 5,
      text: "Always good.Perfect breakfast spot."
    },
    {
      author: "Fred Tirrell",
      rating: 5,
      text: "I honestly don't think there's another place around that could top Jimmy's the staff the cooks the food is perfect"
    },
    {
      author: "Michael Smegielski",
      rating: 5,
      text: "Really good diner style restaurant,  breakfast and lunch only.  Went in for breakfast on a Sunday morning, crowded, but they had an open table.  Food was great at a price point bit lower than a other restaurants of this type.  Good service, quality food, good sized portions, good pricing.  All the qualities of an exceptional diner."
    },
    {
      author: "Charles Brown",
      rating: 5,
      text: "Great sevice...excellent breakfast"
    },
    {
      author: "Deidra Hickey",
      rating: 5,
      text: "Great food and prices."
    }
    
  ];
  const getRatingLabel = (rating) => {
    const stars = '\u2605'; // Unicode for star symbol
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5 ? '\u00BD' : ''; // Unicode for half star symbol
  
    return (
      <span className="rating-label">
        {stars.repeat(fullStars)}
        <span className="half-star">{halfStar}</span>
      </span>
    );
  };
  

  return (
    <div className="reviews-carousel">
      <button className="carousel-button" onClick={handlePrevClick}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <div className="carousel-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {reviews.map((review, index) => (
          <div key={index} className={`review ${index === currentIndex ? 'active' : ''}`}>
            <p><strong>{review.author}</strong></p>
            <p>{getRatingLabel(review.rating)}</p>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
      <button className="carousel-button" onClick={handleNextClick}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );

  
};

export default ReviewsCarousel;