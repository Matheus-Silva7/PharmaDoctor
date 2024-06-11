import React from 'react'
import "./ContactUsStyles.css"
import TitleSection from "../Reutilizable/TitleSection"


const ContactUs = () => {
  return (
    <section id='contact' className='contact-content'>
      <TitleSection title={"CONTACT US"} />
      <h2>Get In Touch With Us!</h2>
      <div className="infos-contact">
        <div className="info">
          <div className="icon"></div>
          <h3>Address</h3>
          <p>209 North Dunbar St.Santa Monica, CA 90403</p>
        </div>
        <div className="info">
          <div className="icon"></div>
          <h3>Call Us </h3>
          <p>(+22) 123 - 4567 - 900
            (+22) 123 - 4567 - 901
          </p>
        </div>
        <div className="info">
          <div className="icon"></div>
          <h3>E-mail Us</h3>
          <p>209 North Dunbar St.Santa Monica, CA 90403</p>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
