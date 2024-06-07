import React from 'react'

import "./BannerPages.css"

const BannerPages = ({imgBanner, title}) => {
  return (
    <div className='banner-page'>
      <img src={imgBanner} alt="" />
      <div className="content-banner">
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default BannerPages
