import React from 'react'
import Header from './componants/HeaderSection'
import HeroSection from './componants/HeroSection'
import FooterSection from './componants/FooterSection'
import Map from './componants/Map'

function App() {
  return (
    <div>
      <div className='all'>
        <marquee behavior="" direction="Right" className="maq" >Bharat Clock</marquee>
        <Header />
        <HeroSection />
        <FooterSection />

      </div>
      <Map />
    </div>
  )
}

export default App;