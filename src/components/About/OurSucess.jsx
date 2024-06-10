import React from "react";
import "./OurSucessStyles.css";
import { BsFillFunnelFill } from "react-icons/bs";
import { BiSolidInjection } from "react-icons/bi";
import { PiMegaphoneSimpleFill } from "react-icons/pi";
import { FaBriefcaseMedical } from "react-icons/fa";
const OurSucess = () => {
  return (
    <section id="success" className="success-content">
      <div className="content-top">
        <h2>Our values that drive success</h2>
        <p>
          Our team of highly trained professionals uses the latest healing
          technologies to restore you to pain-free health quickly and easily. We
          thoroughly evaluate & treat all of the contributing root factors
          related to your issue. Includes, but is not limit, your work and home
          stressors.
        </p>
      </div>
      <div className="columns-success">
        <div className="column">
          <div className="icon">
            <BsFillFunnelFill size={30} color="#0152A8" />
          </div>
          <h3>Bio Technology</h3>
          <p>
            Our team of highly trained professionals uses the latest healing
            technologies.
          </p>
        </div>
        <div className="column">
          <div className="icon">
            <BiSolidInjection size={30} color="#0152A8" />{" "}
          </div>
          <h3>Vaccine</h3>
          <p>
            Our team of highly trained professionals uses the latest healing
            technologies.
          </p>
        </div>
        <div className="column">
          <div className="icon">
            <PiMegaphoneSimpleFill size={30} color="#0152A8" />{" "}
          </div>
          <h3>Latest Technology</h3>
          <p>
            Our team of highly trained professionals uses the latest healing
            technologies.
          </p>
        </div>
        <div className="column">
          <div className="icon">
            <FaBriefcaseMedical size={30} color="#0152A8" />
          </div>
          <h3>Expert Doctors</h3>
          <p>
            Our team of highly trained professionals uses the latest healing
            technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurSucess;
