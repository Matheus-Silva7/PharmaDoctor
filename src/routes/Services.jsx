import React from 'react'
import NavTop from '../components/NavBar/NavTop'
import NavBar from '../components/NavBar/NavBar'
import imgBanner from "../assets/banners/services-banner.jpg"
import BannerPages from '../components/Banner/BannerPages'

const Services = () => {
  return (
    <>
    <NavBar />
    <BannerPages imgBanner={imgBanner} title={"Services"}/>
  </>
  )
}

export default Services
