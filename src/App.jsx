import { useState } from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import Carousel from './components/Carousel'
import Services from './components/Services'



function App() {

  return (
    <>
      <Header></Header>
      <Carousel />
      <Hero />
      <p>
        Backed by the thoughts of where I grew up and where Im going. <br />
        “What we run away from is what we end up becoming”. Only difference.. <br />
        You can make it a different version. No matter where you go or who you become. <br />
        Your origin will remain the same. Show no shame in your originality. <br />
        What are your points of origin? What are your new origins? <br />
      </p >
      <Services />




    </>
  )
}

export default App
