import { useState } from "react";
import SideNavbar from "./assets/Sidenevbar";
import TopNavbar from "./assets/TopNavbar";
import "./App.css";
import Topnavbar2 from "./assets/Topnavbar2";
import Main from "./assets/Mainsection/Main";

function App() {
  return (
    <div>
      <TopNavbar />
      <div className="dublenavbar">
        <SideNavbar />
        <Topnavbar2 />
        <Main />
      </div>
    </div>
  );
}

export default App;
