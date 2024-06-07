import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import NavTop from '../components/NavBar/NavTop'
import BannerMain from '../components/Banner/BannerMain'
import Services from '../components/services-/Services'

const Home = () => {
  return (
    <>
      <NavTop/>
      <NavBar/>
      <BannerMain/>
      <Services/>
    </>
  )
}

export default Home
