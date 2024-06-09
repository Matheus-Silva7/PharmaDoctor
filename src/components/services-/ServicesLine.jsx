import React from 'react'
import "./ServicesLineStyle.css"
import { PiBedFill, PiPillFill } from 'react-icons/pi'
import { BiPlusMedical } from 'react-icons/bi'
import { FaMaskFace } from 'react-icons/fa6'
import { IoHeart } from 'react-icons/io5'


const ServicesLine = () => {
  return (
    <div className='services-line'>
        <div className="service-item">
            <PiBedFill size={30} color='#0FE3AF'/>
            <p className='monte-serrat'>Spinal Care</p> 
        </div>
        <div className="service-item">
            <PiPillFill size={30} color='#0FE3AF'/>
            <p className='museo-moderno'>Mr.Medical</p> 
        </div>
        <div className="service-item">
            <BiPlusMedical size={30} color='#0FE3AF'/>
            <p className='merienda'>Twohands</p> 
        </div>
        <div className="service-item">
            <FaMaskFace size={30} color='#0FE3AF'/>
            <p className='jetbrains'>Health Care</p> 
        </div>
        <div className="service-item">
            <IoHeart size={30} color='#0FE3AF'/>
            <p className='im-fell'>Medical Love</p> 
        </div>
    </div>
  )
}

export default ServicesLine
