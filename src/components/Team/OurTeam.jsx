import React from "react";
import "./OurTeamsStyles.css";
import DoctorsCard from "../Doctors/DoctorsCard";
import { doctors } from "../../data/doctorsData";
import ScrollAnimation from "react-animate-on-scroll";

const OurTeam = () => {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <section id="team" className="team-content">
        <div className="doctors">
          {doctors.map((doctor, index) => (
            <DoctorsCard
              key={index}
              name={doctor.name}
              image={doctor.image}
              specialty={doctor.specialty}
              socialMidia={doctor.socialMidias}
              colorbtn={"#0152A8"}
            />
          ))}
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default OurTeam;
