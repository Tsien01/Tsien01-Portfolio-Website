import { useEffect, useState } from "react";
import ThreeDisplay from "../components/ThreeDisplay";
import "./root.css"; 
import DisplayScreen from "../components/DisplayScreen";
import { Link } from "react-router-dom";
import { generateRandomLetter } from "../utils";
import leftBackgroundImg from "../img/left.jpg"
import centerBackgroundImg from "../img/center.jpg"
import rightBackgroundImg from "../img/right.jpg"


export default function Root() {
  //enable 3d state and toggle
  const [threeEnabled, setThreeEnabled] = useState(false); 

  function handleOnClick () {
    setThreeEnabled(!threeEnabled); 
  }
  //text scrambling effect
  const [title, setTitle] = useState("")

  useEffect(() => {
    const titleText = "JACK TSIEN";
    let iterations = 0
    const interval  = setInterval(() => {
      //generate scrambled title string where each word resolves one-by-one
      const scrambledTitle = titleText.split("").map((letter, index) => {
        if (index < iterations) {
          return letter; 
        }
        return generateRandomLetter(); 
      })
      //setState to random characters
      setTitle(scrambledTitle)
      //stop after 10 cycles
      if (iterations >= titleText.length) {
        clearInterval(interval); 
        setTitle(titleText);
      }; 
      //increment iterations
      iterations += 1;  
    }, 100);  
    return (() => {clearInterval(interval)})
  }, [])  

  return (
      <div id="page">
        <button className="threeToggleControl" onClick={handleOnClick}>{threeEnabled ? "Disable 3D" : "Enable 3D"}</button>
        <div className="screenContainer">
          <Link to={"/About"} className="link">
            <DisplayScreen displayText={"ABOUT"} imageURL={leftBackgroundImg}></DisplayScreen>
          </Link>
          <Link to={"/"} className="link">
            <h1 className="title">{title}</h1>
            <DisplayScreen displayText={"START?"} imageURL={centerBackgroundImg}></DisplayScreen>
          </Link>
          <Link to={"/Projects"} className="link">
            <DisplayScreen displayText={"PROJECTS"} imageURL={rightBackgroundImg}></DisplayScreen>
          </Link>
        </div>
        {threeEnabled ? <ThreeDisplay></ThreeDisplay> : <div />}
      </div>
    );
  }
