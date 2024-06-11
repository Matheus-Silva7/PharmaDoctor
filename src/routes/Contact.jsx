import React from 'react'
import NavBar from '../components/NavBar/NavBar'

import imgBanner from "../assets/banners/contact-banner.jpg"
import BannerPages from '../components/Banner/BannerPages'
import ContactUs from "../components/Contact/ContactUs"
import Form from '../components/Contact/Form'
import Footer from "../components/Footer/Footer"

const Contact = () => {
  return (
    <>
      <NavBar />
      <BannerPages imgBanner={imgBanner} title={"Contact Us"}/>
      <ContactUs/>
      <Form/>
      <Footer/>
    </>
  )
}

export default Contact
