import React from "react";
import "./NavBarStyles.css";
import { FiPhone } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
const NavTop = () => {
  return (
    <div className="nav-top">
      <p>Welcome to Pharma. We provides medical accessories</p>
      <div className="numbers">
        <p><FiPhone size={20} className="icon"/> (404) 850 - 7080</p>
        <p><MdAlternateEmail size={20} className="icon"/> (404) 850 - 7080</p>
      </div>
    </div>
  );
};

export default NavTop;
