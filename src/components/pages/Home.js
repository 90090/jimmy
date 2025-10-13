import React from 'react';
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
    <div className="w-full overflow-x-hidden">
      
      {/* Announcement Section */}
      <div className="bg-red-600 text-white p-6 flex flex-col items-center justify-between space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-2xl text-center font-bold mb-2">New Jimmy's Shirts & Hoodies!</h2>
          <p className="text-lg">
            Order by Nov 23rd to receive your order by Christmas! Pickup Only.<br />
            Orders placed Nov 24th and after are not guaranteed for Christmas.
          </p>
        </div>
        {/* <img
          src={'./jimmys-promo.png'}
          alt="Jimmy's Shirts & Hoodies"
          className="w-48 h-auto rounded-lg shadow-lg"
        /> */}
      </div>

      {/* Intro Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start px-4 md:px-20 py-10 md:py-16 gap-8">
        <img
          src={front}
          alt="Jimmy's of Watertown"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
        />
        <div className="flex-1 text-center md:text-left space-y-4">

          <h1 className="text-4xl md:text-5xl font-bold">Welcome to Jimmy's of Watertown</h1>
          <h2 className="text-2xl md:text-3xl text-gray-700">All American Grill</h2>
          <p className="text-gray-600 text-base md:text-lg">
            Jimmy's of Watertown is a family-owned establishment serving fresh, hot, house-made breakfast and lunch for the past 20 years. Nestled in the heart of Watertown, it’s a staple for locals and visitors alike.
          </p>
          <p className="text-gray-600 text-base md:text-lg">
            Bring your whole family for a delicious meal at Jimmy's! We can accommodate parties of up to 20 people.
          </p>
          {/* Awards */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md space-y-4">
            <div className="flex justify-center md:justify-start gap-4">
              <img src={awardImage1} alt="Award 1" className="h-24 md:h-28 object-contain" />
              {/* <img src={awardImage2} alt="Award 2" className="h-24 md:h-28 object-contain" /> */}
            </div>
            <p className="text-gray-800 text-base md:text-lg">
              We were a finalist in Connecticut Magazine's Best of CT 2024 - voted Best Diner in Connecticut.
              Thank you to everyone who voted!
            </p>
          </div>
        </div>
        
      </div>

      

      {/* Food Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-20 py-8">
        {[food28, food29, food31, food35].map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Food ${idx + 1}`}
            className="w-full h-60 md:h-48 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>

      {/* Reviews Section */}
      <div className="py-12 px-4 md:px-20 text-center">
        <h3 className="text-3xl font-bold mb-6">Google Business Reviews</h3>
        <ReviewCarousel />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
