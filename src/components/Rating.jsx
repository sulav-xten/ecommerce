import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleRatingClick = (ratingValue) => {
    setRating(ratingValue);
    onRatingChange(ratingValue); // Call the callback function with the selected rating
  };

  return (
    <div className="rating-container">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleRatingClick(ratingValue)}
            />
            <span
              className="star"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
              style={{
                color: ratingValue <= (hover || rating) ? "gold" : "lightgray"
              }}
            >
              <FontAwesomeIcon icon={faStar} />
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
