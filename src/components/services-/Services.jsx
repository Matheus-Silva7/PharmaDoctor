import React from "react";
import { servicesData } from "../../data/servicesData";
import "./ServicesStyles.css"
import { IoIosAddCircle } from "react-icons/io";
import TitleSection from "../Reutilizable/TitleSection";

const Services = () => {
  return (
    <section id="services" className="container-services">
      <div className="text-services">
        <TitleSection title={"services"}/>
        <h2>Feel Like Home With Best Medical Care</h2>
      </div>
      <div className="container-cards">
        {servicesData.map((s, index) => (
          <div className="cardServices" key={index}>
            <img src={s.icon} alt="" />
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
            <a href="">ReadMore <IoIosAddCircle size={20} color="#C9C9C9"/> </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
