import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import FeaturesProperties from '../components/FeaturesProperties'
import Faq from '../components/Faq'
import Cta from '../components/Cta'
import Testimonials from '../components/Testimonials'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='bg-gradient-to-r from-[#fffbee] to-white'>
      <Hero />
      <About />
      <FeaturesProperties />
      <Faq />
      <Cta />
      <Testimonials />
    </div>
  )
}

export default Home