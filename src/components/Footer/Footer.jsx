import React from 'react'
import "./FooterStyles.css"

import Logo from "../NavBar/Logo"
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import ButtonMain from "../Reutilizable/ButtonMain"
import Copy from './Copy'

const Footer = () => {
  return (
   <>
    <footer id='footer'>
      <div className='footer-content'>

        <div className="footer-line">
          <Logo />
          <div className="contacts">
            <div className="contact">
              <div className="icon">
                <BsFillTelephoneFill size={15} color='#0152A8' />
              </div>
              <p>(+22) 123 - 4567 - 900</p>
            </div>
            <div className="contact">
              <div className="icon">
                <MdEmail size={15} color='#0152A8' />
              </div>
              <p>support@doctorate.com</p>
            </div>
            <div className="socials">
              <FaInstagram size={22} color='#0152A8' />
              <FaFacebook size={22} color='#0152A8' />
              <FaXTwitter size={22} color='#0152A8' />
            </div>
          </div>
        </div>
        <div className="footer-columns">
          <h2>“A Simple Story About
            The Doctorate Medical Center & Health Care Foundation</h2>
          <div className="column">
            <h3>Explore</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/team">Team</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="column">
            <h3>Book an appointment</h3>
            <p>It is a long established fact that a reader will be distracted</p>
            <input type="email" placeholder='your email address' />
            <ButtonMain classN={"blue"} textBtn={"Submit"}/>
          </div>
        </div>
      </div>
    </footer>
    <Copy/>
   </>
  )
}

export default Footer
