import React from 'react'
import "./Sidebarpages.css";
import LearningobjectivesPage from "../assets/Image/Sidebarimage/LearningobjectivesPage.png"

function LearningObjectives() {
  return (
    
      <div className='learningObj-page'>
          <img src={LearningobjectivesPage} style={{height: "80vh", width: "80%"}}></img>
      </div>
   
  )
}

export default LearningObjectives