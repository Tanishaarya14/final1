import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Memory from './components/Memory'
import Explore from './components/Explore'
import Advertise  from './components/Advertise'
import Pricings  from './components/Pricings'
import Banner from './components/Banner'
import Newslatter from './components/Newslatter'
import Footer from './components/Footer'
import { hero, memory, navlinks, placesAPI, brands, pricingapi, bannerAPI, footerAPI } from './data/thealpdata'

const App = () => {
  return (
    <>
     <Navbar navlinks={navlinks}/>
     <Hero hero={hero}/>
     <Memory memory={memory}/>
     <Explore title="Explore The Beauty of World" placesAPI={placesAPI} />
     <Advertise brands={brands} />
     <Pricings pricingapi={pricingapi} />
     <Banner bannerAPI={bannerAPI} />
     <Newslatter />
     <Footer footerAPI={footerAPI}/>
    </>
  )
}

export default App