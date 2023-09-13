import React from "react";
import poster from "../../assets/Post.png"
import { AiOutlineHeart } from "react-icons/ai";
import "../../styles/card.css"
import Rating from "./Rating";

const Card = () => {
  return (
    <div className="card-container">
      <AiOutlineHeart className='card-icon'/>
      <img src={poster} alt="poster" className="card-poster"/>
      <p className="card-text_country">USA, 2018</p>
      <p className="card-text_movie_name">Spider-Man : Into The Spider Verse</p>
      <Rating/>
      <p className="card-text_genre">Animation, Action, Adventure</p>
    </div>
  );
};

export default Card;
