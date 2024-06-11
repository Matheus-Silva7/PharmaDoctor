import React from 'react'
import "./PresentationDoctorsStyles.css"
import TitleSection from "../Reutilizable/TitleSection"
import ButtonMain from "../Reutilizable/ButtonMain"
import { Link } from 'react-router-dom'
import { doctors } from "../../data/doctorsData.js"
import DoctorsCard from './DoctorsCard.jsx'

const PresentationDoctors = () => {
  return (
    <section id='presentation-doctors' className='presentation-content'>
      <div className="top-presentation">
        <div className="text-presentation">
          <TitleSection title={"MEDICAL EXPERTS"}/>
          <h2>The Professional Doctors</h2>
        </div>
        <Link to="/team"><ButtonMain classN={"green"} textBtn={"View All Doctors"}/></Link>
      </div>
      <div className="doctors">
        {doctors.slice(0,3).map((doctor, index) => (
          <DoctorsCard 
            key={index}
            name={doctor.name}
            image={doctor.image}
            specialty={doctor.specialty}
            socialMidia={doctor.socialMidias}
            colorbtn={"#FFF"}
          />
        ))}
      </div>
      <div className="bottom-presentation">
        <div className="data">
          <h2>25</h2>
          <TitleSection title={"Years"}/>
          <TitleSection title={"Experience"}/>
        </div>
        <div className="data">
          <h2>893</h2>
          <TitleSection title={"Medicament"}/>
          <TitleSection title={"Invented"}/>
        </div>
        <div className="data">
          <h2>75</h2>
          <TitleSection title={"Awards"}/>
          <TitleSection title={"Awards"}/>
        </div>
        <div className="data">
          <h2>673 k</h2>
          <TitleSection title={"Happy"}/>
          <TitleSection title={"Clients"}/>
        </div>
        <div className="data">
          <h2>751</h2>
          <TitleSection title={"Pharmacies"}/>
          <TitleSection title={"Partners"}/>
        </div>
      </div>
    </section>
  )
}

export default PresentationDoctors
