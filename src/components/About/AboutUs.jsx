import React from "react";
import "./AboutUsStyles.css";
import TitleSection from "../Reutilizable/TitleSection";
import ScrollAnimation from "react-animate-on-scroll";

const AboutUs = () => {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <section id="about" className="about-content">
        <h2>Our team helps you get your life back on track.</h2>
        <p>
          Our team of highly trained professionals uses the latest healing
          technologies to restore you to pain-free health quickly and easily. We
          thoroughly evaluate & treat all of the contributing root factors
          related to your issue. Includes, but is not limit, your work and home
          stressors.
        </p>
        <iframe
          width="700"
          height="400"
          src="https://www.youtube.com/embed/rl2xsVe8cNw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="about-columns">
          <div className="column">
            <TitleSection title={"THE LEADERS"} />
            <h3>We have the best Pharma & Medical</h3>
            <p>
              Collaboratively administrate empowered markets via plug-and-play
              networks. users after installed base benefits. Dramatically
              visualize customer.
            </p>

            <p>
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with robust ideas. Dynamically innovate.
            </p>
          </div>
          <div className="column">
            <TitleSection title={"OUR STORY"} />
            <h3>Our mission is to help patients live better.</h3>
            <p>
              Collaboratively administrate empowered markets via plug-and-play
              networks. users after installed base benefits. Dramatically
              visualize customer.
            </p>
            <ul>
              <li>Over 400 leading hospitals and clinics</li>
              <li>Trusted doctors across 20+ specialties</li>
              <li>Award-winning practice management</li>
            </ul>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default AboutUs;
