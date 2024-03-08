import React from "react";
("");
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SidebarData } from "../../sidebarpages/siderbardata/SidebarData";
import arrowLeft from "../../assets/Image/Sidebarimage/arrowLeft.png";
import arrowRight from "../../assets/Image/Sidebarimage/arrowRight.png";

function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
      <div className="toggle-btn" onClick={toggleSidebar}>
        {isSidebarOpen ? (
          <span>
            <img src={arrowLeft}></img>
          </span>
        ) : (
          <span>
            <img src={arrowRight}></img>
          </span>
        )}
      </div>

      <div>
        
      </div>

      {SidebarData.map((item, index) => (
        <Link to={item.path} key={index} className={`item ${item.className || ""} ${location.pathname === item.path ? "selected" : ""}`}
          onClick={() => setSelectedItem(index)} >
          {isSidebarOpen && (
            <>
              <img src={item.image} alt={item.title || "Learning Objectives"} className="image" style={{ width: item.width, height: item.height }}/>
              <span className="title">{item.title}</span>
            </>
          )}
          {!isSidebarOpen && (
            <img src={item.image} alt={item.title || "Learning Objectives"} className="image" style={{ width: item.width, height: item.height }}/>
          )}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
