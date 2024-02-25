import React from 'react'
import Hero from '../components/Hero'
import Contactpsych from '../components/Contactpsych'
import Blog1 from '../components/Blog1'
import Footer from '../components/Footer'

const Home = () => {
  return (
  
    <div className="flex flex-col bg-[#86B6F6]">
      <Hero/>
      <Blog1/>
      <Contactpsych/>
      <Footer/>
     
      
    </div>
    
    
  )
}

export default Home
