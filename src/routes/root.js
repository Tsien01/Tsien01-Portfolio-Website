import { useState } from "react";
import ThreeDisplay from "../components/ThreeDisplay";
import "./root.css"; 
import DisplayScreen from "../components/DisplayScreen";
import { Link } from "react-router-dom";


export default function Root() {
  const [threeEnabled, setThreeEnabled] = useState(false); 

  function handleOnClick () {
    setThreeEnabled(!threeEnabled); 
  }
  

  return (
      <div id="page">
        <h1>Home</h1>
        <button className="threeToggleControl" onClick={handleOnClick}>{threeEnabled ? "Disable 3D" : "Enable 3D"}</button>
        <div className="screenContainer">
          <Link to={"/About"} className="link">
            <DisplayScreen displayText={"About"}></DisplayScreen>
          </Link>
          <Link to={"/"} className="link">
            <DisplayScreen displayText={"Start?"}></DisplayScreen>
          </Link>
          <Link to={"/Projects"} className="link">
            <DisplayScreen displayText={"Projects"}></DisplayScreen>
          </Link>
        </div>
        {threeEnabled ? <ThreeDisplay></ThreeDisplay> : <div />}
      </div>
    );
  }
