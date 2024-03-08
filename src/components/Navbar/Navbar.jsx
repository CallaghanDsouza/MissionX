import React from 'react'
import LevelUpWorksblue from "../../assets/Image/Navbarimage/LevelUpWorksblue.png";
import MaoriFlag from "../../assets/Image/Navbarimage/MaoriFlag.png";
import NZFlag from "../../assets/Image/Navbarimage/NZFlag.png";
import Pagination from './Pagination';
import "./Navbar.css";

function StartProject() {
  alert("Nice one!, project successfully started");
}

function AskTeacher() {
  alert("Help Request Successfully Submitted");
}

function MoreProjects() {
  alert("You are now being directed towards More Projects");
}

function Navbar() {
  return (
    <div className='Navbar'>
      <img
          style={{ width: "109px", height: "45px" }}
          src={LevelUpWorksblue}>
      </img>

      <Pagination />

      <div className="header-right">
          <div className="header-btn">
            <button className="btn1" onClick={StartProject}>
              Start Project
            </button>
            <button className="btn2" onClick={AskTeacher}>
              Ask Teacher
            </button>
            <button className="btn3" onClick={MoreProjects}>
              More Projects
            </button>
          </div>
          <div className="lang">
            <img style={{ width: "24px", height: "12px" }} src={MaoriFlag}></img>
            <img style={{ width: "24px", height: "12px" }} src={NZFlag}></img>
          </div>
        </div>


    </div>
  )
}

export default Navbar