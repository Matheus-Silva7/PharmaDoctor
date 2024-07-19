import React, { useState } from "react";

import "./NavBarStyles.css";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import NavTop from "./NavTop";
import Logo from "./Logo";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  {
    if(active){
      document.querySelector("body").style.overflow="hidden"
    } else{
       document.querySelector("body").style.overflow="initial"
    }
  }

  return (
    <header>
      <div className="top">
        <NavTop />
      </div>
      <nav>
        <Logo/>
        <ul className={active ? "nav-itens active" : "nav-itens"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <a href="" className="call-action">
          Appointment
        </a>
        <div className="menu-mobile" onClick={handleClick}>
          {active ? <IoMdClose size={30} /> : <CiMenuFries size={30} />}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
