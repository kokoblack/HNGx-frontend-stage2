import React from "react";
import poster from "../../assets/Post.png"
import imbd from "../../assets/imbd.png"
import rottenTom from "../../assets/tomato.png"
import "../../styles/card.css"
import Rating from "./Rating";

const Card = () => {
  return (
    <div className="card-container">

      <img src={poster} alt="poster" className="card-poster"/>
      <p className="card-text_country">USA, 2018</p>
      <p className="card-text_movie_name">Spider-Man : Into The Spider Verse</p>
      <Rating/>
      {/* <div className="flex-container">
        <div>
        <img src={imbd} alt="imbd" className="card-imbd"/>
        <p className="card-text_rating">84.0/100</p>
        </div>
        
        <div>
        <img src={rottenTom} alt="rottenTom" className="card-rottentom"/>
        <p className="card-text_rating">94%</p>
        </div>
        
      </div> */}
      <p className="card-text_genre">Animation, Action, Adventure</p>
    </div>
  );
};

export default Card;
