import "./BannerStyles.css";
import imgBanner from "../../assets/banners/banner-main.jpg";

import React from "react";
import ButtonMain from "../Reutilizable/ButtonMain";

import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
import { TypeAnimation } from "react-type-animation";

const BannerMain = () => {
  return (
    <section id="banner" className="banner-container">
      <img src={imgBanner} className="banner-img" alt="banner pharma doctor" />
      <div className="content">
        <p className="p-emphasis">MEDICAL PROFESSIONALS</p>
        <TypeAnimation
        className="title"
          sequence={[
            "Makes Your Health Better Will Makes Us Better",
            1000, 
          ]}
          wrapper="span"
          speed={35}
          style={{ display: "inline-block" }}
          repeat={Infinity}
        />
        <p className="p-desc">
          Our team of highly trained professionals uses the latest healing
          technologies to restore you to pain-free health quickly and easily.
        </p>
        <ButtonMain textBtn={"Get Start"} classN={"blue"} />
      </div>
    </section>
  );
};

export default BannerMain;
