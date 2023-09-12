import React from 'react'
import tv from "../../assets/tv.png"
import "../../styles/logo.css"

export const Logo = () => {
  return (
    <div className='logo-container'>
        <img src={tv} alt='tv-logo'/>
        <h3>MovieBox</h3>
    </div>
  )
}

export default Logo
