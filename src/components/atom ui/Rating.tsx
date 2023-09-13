import React from "react";
import imbd from "../../assets/imbd.png";
import rottenTom from "../../assets/tomato.png";
import "../../styles/rating.css"

const Rating = () => {
  return (
    <div className="rating-container">
      <div>
        <img src={imbd} alt="imbd" className="rating-imbd" />
        <p className="card-text_rating">84.0/100</p>
      </div>

      <div>
        <img src={rottenTom} alt="rottenTom" className="rating-rottentom" />
        <p className="card-text_rating">94%</p>
      </div>
    </div>
  );
};

export default Rating;
