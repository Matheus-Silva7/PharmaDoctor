import React from 'react'
import NavTop from '../components/NavBar/NavTop'
import NavBar from '../components/NavBar/NavBar'
import BannerPages from '../components/Banner/BannerPages'

import imgBanner from "../assets/banners/team-banner.jpg"

const Team = () => {
  return (
    <>
      <NavTop />
      <NavBar />
      <BannerPages imgBanner={imgBanner} title={"Our Team"}/>
    </>
  )
}

export default Team
