import React from "react";
import "./App.css";
import StudentDash from "./components/StudentDash/StudentDash";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
      <StudentDash />
    </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
