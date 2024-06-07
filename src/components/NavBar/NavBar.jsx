import React from "react";
import iconPharma from "/icon-pharma.svg";
import "./NavBarStyles.css";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={iconPharma} alt="icon pharma" />
        <p>Pharma</p>
      </div>
      <ul className="nav-itens">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">services</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <a href="" className="call-action">Appointment</a>
      <div className="menu-mobile">
        <CiMenuFries size={30} />
      </div>
    </nav>
  );
};

export default NavBar;
