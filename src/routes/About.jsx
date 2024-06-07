import React from "react";
import NavTop from "../components/NavBar/NavTop";
import NavBar from "../components/NavBar/NavBar";
import BannerPages from "../components/Banner/BannerPages";

import imgBanner from "../assets/banners/about-banner.jpg"

const About = () => {
  return (
    <>
      <NavTop />
      <NavBar />
      <BannerPages imgBanner={imgBanner} title={"About Us"}/>
    </>
  );
};

export default About;
