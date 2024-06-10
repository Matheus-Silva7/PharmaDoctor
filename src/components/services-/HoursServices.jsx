import React from "react";
import "./HoursServicesStyles.css";
import TitleSection from "../Reutilizable/TitleSection";
const HoursServices = () => {
  return (
    <div className="banner-hour">
      <div className="content-banner">
        <TitleSection title={"Time"} />
        <h3>Working Hours</h3>
        <p>Sunday To Friday 9.00 am - 10.00 pm Saturday Closed</p>
      </div>
    </div>
  );
};

export default HoursServices;
