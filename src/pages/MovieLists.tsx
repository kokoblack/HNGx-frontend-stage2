import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Card from "../components/atom ui/Card";
import "../styles/movielists.css"

const FeaturedMovie = () => {
  return (
    <div className="featuredmovie_container">
      <div className="featuredmovie-first_container">
        <p>Featured Movie</p>
        <div className="featuredmovie-first_container-flex">
          <p>See more</p>
          <IoIosArrowForward />
        </div>
      </div>

      <div className="featuredmovie-second_container">
        {[1,2,3,4,5,6,7,8,9,10].map(() => (<Card/>))}
      </div>
    </div>
  );
};

export default FeaturedMovie;
