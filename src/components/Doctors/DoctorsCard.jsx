import React from 'react'

const DoctorsCard = ({ name, image, specialty, socialMidia }) => {
  return (
    <div className="doctors-card">
      <img src={image} alt="doctor image" />
      <h3>{name}</h3>
      <p>{specialty}</p>
      <ul>
        {Object.entries(socialMidia).map(([key, Icon], index) => (
          <li key={index}><Icon size={20}/></li>
        ))}
      </ul>
    </div>
  )
}

export default DoctorsCard
