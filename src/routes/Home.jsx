import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import BannerMain from '../components/Banner/BannerMain'
import Services from '../components/services-/Services'
import BannerAbout from '../components/Banner/AboutBanner'
import ServicesLine from '../components/services-/ServicesLine'
import BannerBlue from '../components/Banner/BannerBlue'
import SpecialCare from '../components/specialCare/SpecialCare'

const Home = () => {
  return (
    <>
      <NavBar/>
      <BannerMain/>
      <Services/>
      <BannerAbout/>
      <ServicesLine/>
      <BannerBlue classBtn={"green"} btnTxt={"Book an Appointment"} titleTxt={"Online consultations with Certified doctors"}/>
      <SpecialCare/>
    </>
  )
}

export default Home
