import React from "react";
import "./BannerWhyChooseStyles.css";
import TitleSection from "../Reutilizable/TitleSection";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import ScrollAnimation from "react-animate-on-scroll";
const BannerWhyChoose = () => {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <section id="whychoose" className="whychoose-content">
        <div className="text-banner">
          <TitleSection title={"Why choose Pharma"} />
          <p>
            Completely synergize resource taxing relationships via premier niche
            markets. Professionally cultivate one-to-one customer service with
            robust ideas. Dynamically innovate.
          </p>
          <ul>
            <li>
              <IoCheckmarkCircleOutline size={20} color="#0152A8" /> Blood
              clotting disorder
            </li>
            <li>
              <IoCheckmarkCircleOutline size={20} color="#0152A8" /> Blood
              clotting disorder
            </li>
            <li>
              <IoCheckmarkCircleOutline size={20} color="#0152A8" /> Blood
              clotting disorder
            </li>
            <li>
              <IoCheckmarkCircleOutline size={20} color="#0152A8" /> Blood
              clotting disorder
            </li>
            <li>
              <IoCheckmarkCircleOutline size={20} color="#0152A8" /> Blood
              clotting disorder
            </li>
            <li>
              <IoCheckmarkCircleOutline size={20} color="#0152A8" /> Blood
              clotting disorder
            </li>
            <li>
              <IoCheckmarkCircleOutline size={20} color="#0152A8" /> Blood
              clotting disorder
            </li>
          </ul>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default BannerWhyChoose;
