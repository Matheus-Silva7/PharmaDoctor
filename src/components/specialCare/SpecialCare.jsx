import React from "react";

import "./SpecialCareStyles.css";
import TitleSection from "../Reutilizable/TitleSection";
import ButtonMain from "../Reutilizable/ButtonMain";
import ImgDoctor1 from "../../assets/doctors/doctor-photo1.jpg";
import ImgDoctor2 from "../../assets/doctors/doctor-photo2.jpg";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import ScrollAnimation from "react-animate-on-scroll";

const SpecialCare = () => {
  return (
      <ScrollAnimation animateIn="fadeIn">
    <section id="specialCare">
        <div className="text-specialCare">
          <TitleSection title={"SPEACIAL CARE"} />
          <h2>We provide a best care for your health with specialist</h2>
          <p>
            Collaboratively administrate empowered markets via plug-and-play
            networks. <span>Dynamically procrastinate B2C</span> users after
            installed base benefits. Dramatically visualize customer.
          </p>
          <p>
            Completely synergize resource taxing relationships via premier niche
            markets. Professionally cultivate one-to-one customer service with
            robust ideas. Dynamically innovate.
          </p>
          <ul>
            <li>
              <RiVerifiedBadgeFill size={20} color="#0FE3AF" />
              20+ years of excellence
            </li>
            <li>
              <RiVerifiedBadgeFill size={20} color="#0FE3AF" />
              Professional Experts
            </li>
          </ul>
          <ButtonMain classN={"blue"} textBtn={"Discover Now"} />
        </div>
        <div className="images-doctor">
          <img src={ImgDoctor1} alt="doctor image" className="doctor1" />
          <img src={ImgDoctor2} alt="doctor image2" className="doctor2" />
          <div className="info-doctor">
            <h3>Mark Broownn</h3>
            <p>Multispecialist</p>
          </div>
        </div>
    </section>
      </ScrollAnimation>
  );
};

export default SpecialCare;
