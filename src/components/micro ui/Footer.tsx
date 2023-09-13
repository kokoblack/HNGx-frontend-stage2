import React from 'react'
import {AiFillYoutube} from "react-icons/ai"
import {TiSocialTwitter} from "react-icons/ti"
import {IoLogoInstagram} from "react-icons/io"
import {FaSquareFacebook} from "react-icons/fa6"
import "../../styles/footer.css"

const Footer = () => {
  return (
    <div className='footer_container'>
        <div className='footer-first_section footer_flex'>
            <FaSquareFacebook/>
            <IoLogoInstagram/>
            <TiSocialTwitter/>
            <AiFillYoutube/>
        </div>

        <div className='footer-second_section footer_flex'>
            <p>Conditions of Use</p>
            <p>Privacy & Policy</p>
            <p>Press Room</p>
        </div>

        <p className='footer_text'>&copy; 2021 MovieBox by Kareem</p>
    </div>
  )
}

export default Footer