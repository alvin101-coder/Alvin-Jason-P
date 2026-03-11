import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import ServiceSummery from './sections/ServiceSummery'
import Services from './sections/Services'
import ReactLenis from 'lenis/react'
import About from './sections/About'

const App = () => {
  return (
    <ReactLenis root className='relative w-screen min-h-screen overflow-x-auto'>
      <Navbar />
      <Hero />
      <ServiceSummery />
      <Services />
      <About />
    </ReactLenis>
  )
}

export default App