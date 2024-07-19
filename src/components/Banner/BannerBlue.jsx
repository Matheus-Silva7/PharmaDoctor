import React from "react";

import "./BannerBlueStyles.css";
import ButtonMain from "../Reutilizable/ButtonMain";
import ScrollAnimation from "react-animate-on-scroll";

const BannerBlue = ({ titleTxt, btnTxt, classBtn }) => {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <section className="banner-blue">
        <div className="content-banner">
          <h2>{titleTxt}</h2>
          <ButtonMain classN={classBtn} textBtn={btnTxt} />
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default BannerBlue;
