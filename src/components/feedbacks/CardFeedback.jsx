import React from 'react'
import { ImQuotesLeft } from 'react-icons/im'
import { FaStar } from 'react-icons/fa6'

const CardFeedback = ({name, image, review}) => {
  return (
    <div className="card-Feedbacks">
      <div className="top-card">
        <div className="info-user">
          <img src={image} alt="user image" />
          <div className="details-user">
            <h3>{name}</h3>
            <p>Dental Patient</p>
          </div>
        </div>
        <ImQuotesLeft size={35} color='#0152A8' className='icon-feed'/>
      </div>
      <div className="bottom-card">
        <p>{review}.</p>
        <div className="stars">
          <FaStar size={20} color='#FBB837' />
          <FaStar size={20} color='#FBB837' />
          <FaStar size={20} color='#FBB837' />
          <FaStar size={20} color='#FBB837' />
          <FaStar size={20} color='#FBB837' />
        </div>
      </div>
    </div>
  )
}

export default CardFeedback
