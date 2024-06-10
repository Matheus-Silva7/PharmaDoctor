import React from 'react'
import iconPharma from "/icon-pharma.svg";
import { Link } from "react-router-dom";
import "./NavBarStyles.css";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={iconPharma} alt="icon pharma" />
        <p>Pharma</p>
      </Link>
    </div>
  )
}

export default Logo
