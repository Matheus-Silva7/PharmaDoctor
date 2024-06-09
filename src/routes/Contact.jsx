import React from 'react'
import NavTop from '../components/NavBar/NavTop'
import NavBar from '../components/NavBar/NavBar'

import imgBanner from "../assets/banners/contact-banner.jpg"
import BannerPages from '../components/Banner/BannerPages'


const Contact = () => {
  return (
    <>
      <NavBar />
      <BannerPages imgBanner={imgBanner} title={"Contact Us"}/>
    </>
  )
}

export default Contact
