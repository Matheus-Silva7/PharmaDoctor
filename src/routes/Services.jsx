import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import imgBanner from "../assets/banners/services-banner.jpg"
import BannerPages from '../components/Banner/BannerPages'
import ServicesItem from "../components/services-/Services"
import PresentationDoctors from "../components/Doctors/PresentationDoctors"
import Footer from "../components/Footer/Footer"
import HoursServices from '../components/services-/HoursServices'
const Services = () => {
  return (
    <>
    <NavBar />
    <BannerPages imgBanner={imgBanner} title={"Services"}/>
    <ServicesItem/>
    <HoursServices/>
    <PresentationDoctors/>
    <Footer/>
  </>
  )
}

export default Services
