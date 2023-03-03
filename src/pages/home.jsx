import React from 'react'
import HomeHero from '../components/Home/HomeHero'
import HowItWorks from '../components/Home/HowItWorks'
import Testimonials from '../components/Home/Testimonials'
import WhyNFT from '../components/Home/WhyNFT'
import LatestBlog from '../components/Home/LatestBlog'

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <HowItWorks />
      <Testimonials />
      <WhyNFT />
      <LatestBlog />
    </>
  )
}

export default HomePage
