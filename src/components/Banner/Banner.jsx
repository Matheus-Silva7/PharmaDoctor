import "./BannerStyles.css";
import BannerMain from "../../assets/banner-main.jpg"


import React from 'react'
import ButtonMain from "../Buttons/ButtonMain";

const Banner = () => {
  return (
    <section id="banner" className="banner-container">
        <img src={BannerMain} className="banner-img" alt="banner pharma doctor" />
        <div className="content">
            <p className="p-emphasis">MEDICAL PROFESSIONALS</p>
            <h1 className="title">Makes Your Health Better Will Makes Us Better</h1>
            <p className="p-desc">Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily.</p>
            <ButtonMain textBtn={"Get Start"}/>
        </div>
    </section>
  )
}

export default Banner
