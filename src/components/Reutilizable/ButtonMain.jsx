import React from 'react'
import "./ButtonStyles.css"

const ButtonMain = ({textBtn, classN}) => {
  return (
    <>
      <button className={`b-start ${classN}`}>{textBtn}</button>
    </>
  )
}

export default ButtonMain
