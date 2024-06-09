import React from 'react'

import "./BannerBlueStyles.css"
import ButtonMain from "../Reutilizable/ButtonMain"

const BannerBlue = ({titleTxt, btnTxt,classBtn}) => {
  return (
    <section className='banner-blue'>
        <div className="content-banner">
            <h2>{titleTxt}</h2>
            <ButtonMain classN={classBtn} textBtn={btnTxt}/>
        </div>
      
    </section>
  )
}

export default BannerBlue
