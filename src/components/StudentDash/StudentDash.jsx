import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import NavPage from "../Navbar/NavPage";
import Footer from "../Footer/Footer";
import "./StudentDash.css";

function StudentDash() {
  return (
    <React.Fragment>
      
        <div className="container">
          {/* heading section */}
          
            <div>
              <Navbar />
            </div>
          

          {/* sidebar section */}
          <div>
            <div className="mid-container">
              <Sidebar />
              <NavPage />
            </div>
          </div>
          
          <Footer />
          
        </div>
      
    </React.Fragment>
  );
}

export default StudentDash;
