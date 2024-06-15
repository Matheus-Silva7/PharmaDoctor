import React from "react";
import "./HoursServicesStyles.css";
import TitleSection from "../Reutilizable/TitleSection";
import ScrollAnimation from "react-animate-on-scroll";
const HoursServices = () => {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <div className="banner-hour">
        <div className="content-banner">
          <TitleSection title={"Time"} />
          <h3>Working Hours</h3>
          <p>Sunday To Friday 9.00 am - 10.00 pm Saturday Closed</p>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default HoursServices;
