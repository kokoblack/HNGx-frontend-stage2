import React from 'react'
import {BiSearch} from "react-icons/bi"
import {AiFillPlayCircle} from "react-icons/ai"
import {HiMenuAlt4} from "react-icons/hi"
import {AiOutlineHeart} from "react-icons/ai"
import Logo from '../atom ui/Logo'
import "../../styles/hero.css"

const Hero = () => {
  return (
    <div className='hero-container'>
        <div>
            <Logo/>
            <div className='hero-search_container'>
            <input placeholder='what do you want to watch?'/>
            <BiSearch/>
            </div>
            <p>Sign in</p>
            <HiMenuAlt4 className='hero-icon'/>
        </div>

        <div></div>
    </div>
  )
}

export default Hero