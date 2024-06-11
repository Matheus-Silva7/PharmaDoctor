import React from 'react'
import NavTop from '../components/NavBar/NavTop'
import NavBar from '../components/NavBar/NavBar'
import BannerPages from '../components/Banner/BannerPages'

import imgBanner from "../assets/banners/team-banner.jpg"
import OurTeam from '../components/Team/OurTeam'
import BannerTeam from '../components/Team/BannerTeam'
import Footer from "../components/Footer/Footer"

const Team = () => {
  return (
    <>
      <NavBar />
      <BannerPages imgBanner={imgBanner} title={"Our Team"}/>
      <OurTeam/>
      <BannerTeam/>
      <Footer/>
    </>
  )
}

export default Team
