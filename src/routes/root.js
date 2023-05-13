import { useState } from "react";
import Nav from "../components/Nav";
import ThreeDisplay from "../components/ThreeDisplay";
import "./root.css"; 
import DisplayScreen from "../components/DisplayScreen";


export default function Root() {
  const [threeEnabled, setThreeEnabled] = useState(false); 

  function handleOnClick () {
    setThreeEnabled(!threeEnabled); 
  }
  

  return (
      <div id="page">
        <h1>Home</h1>
        <button className="threeToggleControl" onClick={handleOnClick}>{threeEnabled ? "Disable 3d Animations" : "Enable 3d Animations"}</button>
        <Nav></Nav>
        <div className="screenContainer">
          <DisplayScreen displayText={"About"}></DisplayScreen>
          <DisplayScreen displayText={"Start?"}></DisplayScreen>
          <DisplayScreen displayText={"Projects"}></DisplayScreen>
        </div>
        {threeEnabled ? <ThreeDisplay></ThreeDisplay> : <div />}
      </div>
    );
  }
