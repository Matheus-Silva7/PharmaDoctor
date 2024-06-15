import React from 'react'
import "./BannerTeamStyles.css"
import womanBanner from "../../assets/banners/woman-banner.jpg"
import TitleSection from "../Reutilizable/TitleSection"
import ButtonMain from "../Reutilizable/ButtonMain"
import ScrollAnimation from 'react-animate-on-scroll'

const BannerTeam = () => {
  return (
    <ScrollAnimation animateIn="fadeIn">

    <section id='banner-team' className='banner-team-content'>
      <div className="content-text">
        <TitleSection title={"BOOK AN APPOINTMENT"} />
        <h2>Our Medical Team is Ready to Help You.</h2>
        <div className="buttons">
          <ButtonMain classN={"green"} textBtn={"Book an Appointment"}/>
          <p>or</p>
          <ButtonMain classN={"white"} textBtn={"Call: 1-800-123-9999"}/>
        </div>
      </div>
      <img src={womanBanner} alt="woman banner" />
    </section>
    </ScrollAnimation>
  )
}

export default BannerTeam
