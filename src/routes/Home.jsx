import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import NavTop from '../components/NavBar/NavTop'
import BannerMain from '../components/Banner/BannerMain'
import Services from '../components/services-/Services'
import BannerAbout from '../components/Banner/AboutBanner'
import ServicesLine from '../components/services-/ServicesLine'

const Home = () => {
  return (
    <>
      <NavBar/>
      <BannerMain/>
      <Services/>
      <BannerAbout/>
      <ServicesLine/>
    </>
  )
}

export default Home
