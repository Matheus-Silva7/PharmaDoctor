import React from 'react'
import "./ContactUsStyles.css"
import TitleSection from "../Reutilizable/TitleSection"
import { GrLocation } from 'react-icons/gr'
import { FiPhoneCall } from 'react-icons/fi'
import { MdAlternateEmail } from 'react-icons/md'
import ScrollAnimation from 'react-animate-on-scroll'


const ContactUs = () => {
  return (
    <ScrollAnimation animateIn="fadeIn">

    <section id='contact' className='contact-content'>
      <TitleSection title={"CONTACT US"} />
      <h2>Get In Touch With Us!</h2>
      <div className="infos-contact">
        <div className="info">
          <div className="icon"><GrLocation size={30} color='#0152A8'/> </div>
          <h3>Address</h3>
          <p>209 North Dunbar St.<br/> Santa Monica, CA 90403</p>
        </div>
        <div className="info">
          <div className="icon"><FiPhoneCall size={30} color='#0152A8'/></div>
          <h3>Call Us </h3>
          <p>(+22) 123 - 4567 - 900<br/>
            (+22) 123 - 4567 - 901
          </p>
        </div>
        <div className="info">
          <div className="icon"><MdAlternateEmail size={30} color='#0152A8'/></div>
          <h3>E-mail Us</h3>
          <p>support@doctorate.com<br/>
          yourmail@gmail.com</p>
        </div>
      </div>
    </section>
    </ScrollAnimation>
  )
}

export default ContactUs
