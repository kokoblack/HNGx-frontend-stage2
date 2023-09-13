import React from "react";
import { BiSearch } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import Logo from "../atom ui/Logo";
import "../../styles/hero.css";
import Rating from "../atom ui/Rating";

const Hero = () => {
  return (
    <div className="hero-container">
      <div>
        <Logo />
        <div className="hero-search_container">
          <input placeholder="what do you want to watch?" />
          <BiSearch />
        </div>
        <BiSearch className="hero-icon_search" />
        <p className="hero-signin">Sign in</p>
        <HiMenuAlt4 className="hero-icon_menu" />
      </div>

      <div>
        <h3>John Wick 3 : Parabellum</h3>
        <Rating />
        <p className="hero-small_text">
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        <button className="hero-button">
          <AiFillPlayCircle className="hero-button_icon" />
          <p>WATCH TRAILER</p>
        </button>
      </div>
    </div>
  );
};

export default Hero;
