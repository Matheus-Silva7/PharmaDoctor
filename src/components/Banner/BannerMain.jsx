import "./BannerStyles.css";
import imgBanner from "../../assets/banners/banner-main.jpg"


import React from 'react'
import ButtonMain from "../Reutilizable/ButtonMain";


const BannerMain = () => {
  return (
    <section id="banner" className="banner-container">
        <img src={imgBanner} className="banner-img" alt="banner pharma doctor" />
        <div className="content">
            <p className="p-emphasis">MEDICAL PROFESSIONALS</p>
            <h1 className="title">Makes Your Health Better Will Makes Us Better</h1>
            <p className="p-desc">Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily.</p>
            <ButtonMain textBtn={"Get Start"} classN={"blue"}/>
        </div>
    </section>
  )
}

export default BannerMain
