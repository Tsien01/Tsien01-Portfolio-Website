import { useEffect, useState } from "react"
import "./DisplayScreen.css"
import { generateRandomLetter } from "../utils";

export default function DisplayScreen ({ displayText, imageURL, useTextScramble = true }) {
    const [ screenTitle, setScreenTitle ] = useState(""); 

    useEffect(() => {
        setScreenTitle(displayText)

        if (useTextScramble) {
            const titleText = displayText; 
            let iterations = 0; 
            const interval = setInterval(() => {
                const scrambledTitle = titleText.split("").map((letter, index) => {
                    if (index < iterations) {
                        return letter; 
                    }
                    return generateRandomLetter(); 
                })
    
                setScreenTitle(scrambledTitle); 
    
                if (iterations >= titleText.length) {
                    clearInterval(interval); 
                    setScreenTitle(titleText); 
                }
    
                iterations += 1; 
            }, 100)
            return (() => {clearInterval(interval)})
        }
    }, [])

    return (
        <div className="display" 
        style={{ backgroundImage: `url(${imageURL})` }} >
            <div className="screen">
                <span>{useTextScramble ? screenTitle : displayText}</span>
            </div>
        </div>
    )
}