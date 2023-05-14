import { useState } from "react";
import ThreeDisplay from "../components/ThreeDisplay";
import "./root.css"; 
import DisplayScreen from "../components/DisplayScreen";
import { Link } from "react-router-dom";
import leftBackgroundImg from "../img/left.jpg"
import centerBackgroundImg from "../img/center.jpg"
import rightBackgroundImg from "../img/right.jpg"


export default function Root() {
  const [threeEnabled, setThreeEnabled] = useState(false); 

  function handleOnClick () {
    setThreeEnabled(!threeEnabled); 
  }
  

  return (
      <div id="page">
        <h1 className="title">Jack Tsien</h1>
        <button className="threeToggleControl" onClick={handleOnClick}>{threeEnabled ? "Disable 3D" : "Enable 3D"}</button>
        <div className="screenContainer">
          <Link to={"/About"} className="link">
            <DisplayScreen displayText={"About"} imageURL={leftBackgroundImg}></DisplayScreen>
          </Link>
          <Link to={"/"} className="link">
            <DisplayScreen displayText={"Start?"} imageURL={centerBackgroundImg}></DisplayScreen>
          </Link>
          <Link to={"/Projects"} className="link">
            <DisplayScreen displayText={"Projects"} imageURL={rightBackgroundImg}></DisplayScreen>
          </Link>
        </div>
        {threeEnabled ? <ThreeDisplay></ThreeDisplay> : <div />}
      </div>
    );
  }
