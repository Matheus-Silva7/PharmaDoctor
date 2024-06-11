import React from 'react'

import "./AboutBannerStyles.css"
import TitleSection from "../Reutilizable/TitleSection";
import ButtonMain from "../Reutilizable/ButtonMain";
import { IoMdPaper } from 'react-icons/io';
import { CiClock2 } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const BannerAbout = () => {
  return (
    <section className='content-about'>
      <div className="banner-about">
        <div className="banner-card">
          <TitleSection title={"About us"} />
          <h2>The Heart And Science Of Medicate Test</h2>
          <p>Capitalize on low hanging fruit to identify a ballpark value
            added activity to beta test. Override the digital divide with information highway will close.</p>
          <div className="services">
            <div className="service">
              <div className="icon">
                <IoMdPaper size={25} color='#0152A8' />
              </div>
              <p>Multi Speciality Pharma Treatment</p>
            </div>
            <div className="service" >
              <div className="icon">
                <CiClock2 size={25} color='#0152A8' />
              </div>
              <p>24 Hours Medical Service</p>
            </div>
          </div>
          <Link to="/about"><ButtonMain textBtn={"More About Us"} classN={"blue"} /></Link>
        </div>
      </div>
    </section>
  )
}

export default BannerAbout
