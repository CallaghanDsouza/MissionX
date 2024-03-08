import React from 'react'
import "./Sidebarpages.css"
import videotutorialimage from "../assets/Image/Sidebarimage/videotutorialimage.png";

function VideoTutorial() {
  return (
    <div>
        <div className='instructions-page'>
          <img src={videotutorialimage} style={{height: "80vh", width: "80%"}}></img>
      </div>
    </div>
  )
}

export default VideoTutorial