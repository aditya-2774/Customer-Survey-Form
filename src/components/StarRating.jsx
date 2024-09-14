import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ totalStars = 5, rating, onRatingChange }) => {
  const [hover, setHover] = useState(null);

  return (
    <div className="flex space-x-2">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={index}
            className={`cursor-pointer text-4xl transition-transform duration-300 ${
              starValue <= (hover || rating)
                ? 'text-yellow-500 scale-125'
                : 'text-gray-300'
            } hover:scale-150 hover:text-yellow-400`}
            onClick={() => onRatingChange(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(null)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
