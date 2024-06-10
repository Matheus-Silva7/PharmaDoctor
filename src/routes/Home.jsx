import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import BannerMain from '../components/Banner/BannerMain'
import Services from '../components/services-/Services'
import BannerAbout from '../components/Banner/AboutBanner'
import ServicesLine from '../components/services-/ServicesLine'
import BannerBlue from '../components/Banner/BannerBlue'
import SpecialCare from '../components/specialCare/SpecialCare'
import Feedback from '../components/feedbacks/Feedback'
import BannerWhyChoose from '../components/Banner/BannerWhyChoose'
import PresentationDoctors from '../components/Doctors/PresentationDoctors'

const Home = () => {
  return (
    <>
      <NavBar/>
      <BannerMain/>
      <Services/>
      <BannerAbout/>
      <ServicesLine/>
      <BannerBlue classBtn={"green"} btnTxt={"Book an Appointment"} titleTxt={"Online consultations with Certified doctors"}/>
      <SpecialCare/>
      <Feedback />
      <BannerWhyChoose/>
      <PresentationDoctors/>
    </>
  )
}

export default Home
