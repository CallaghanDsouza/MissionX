import React from 'react'
import "./Sidebarpages.css"
import Instructionpage from "../assets/Image/Sidebarimage/Instructionpage.png"; 

function Instructions() {
  return (
    <div className='instructions-page'>
          <img src={Instructionpage} style={{height: "80vh", width: "80%"}}></img>
      </div>
  )
}

export default Instructions