import React from "react";
import NavBar from "../components/NavBar/NavBar";
import BannerPages from "../components/Banner/BannerPages";
import imgBanner from "../assets/banners/about-banner.jpg"
import AboutUs from "../components/About/AboutUs";
import BannerBlue from "../components/Banner/BannerBlue"
import OurSucess from "../components/About/OurSucess";
import Footer from "../components/Footer/Footer"
  
/* about */
const About = () => {
  return (
    <>
      <NavBar />
      <BannerPages imgBanner={imgBanner} title={"About Us"}/>
      <AboutUs/>
      <BannerBlue classBtn={"white"} titleTxt={"Online consultations with Certified doctors"} btnTxt={"Call: 1-800-123-9999"}/>
      <OurSucess/>
      <Footer/>
    </>
  );
};

export default About;
