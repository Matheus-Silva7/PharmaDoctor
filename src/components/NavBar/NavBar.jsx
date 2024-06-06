import React from "react";
import iconPharma from "/icon-pharma.svg";
import "./NavBarStyles.css";


const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={iconPharma} alt="icon pharma" />
        <p>Pharma</p>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Team</li>
        <li>Contact</li>
      </ul>
    <a href="">Appointment</a>
    </nav>
  );
};

export default NavBar;
