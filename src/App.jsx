import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Work from './components/Work'
import Reel from './components/Reel'
import News from './components/News'
import News2 from './components/News2'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full  bg-zinc-900'>
      <Navbar />
      <Landing />
      <Work />
      <Reel />
      <News />
      <News2 />
      <Footer />
    </div>
  )
}

export default App