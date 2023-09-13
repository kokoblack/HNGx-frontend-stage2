import React from 'react'
import Hero from '../components/micro ui/Hero'
import Footer from '../components/micro ui/Footer'
import FeaturedMovie from './MovieLists'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <FeaturedMovie/>
      <Footer/>
    </div>
  )
}

export default Home