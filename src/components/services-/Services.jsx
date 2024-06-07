import React from "react";
import { servicesData } from "../../data/servicesData";

const Services = () => {
  return (
    <section id="services" className="content-services">
      <div className="text-services">
        <p>Services</p>
        <h2>Feel Like Home With Best Medical Care</h2>
      </div>
      {servicesData.map((s, index) => (
        <div className="cardServices" key={index}>
          <img src={s.icon} alt="" />
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
          <a href="">ReadMore</a>
        </div>
      ))}
    </section>
  );
};

export default Services;
