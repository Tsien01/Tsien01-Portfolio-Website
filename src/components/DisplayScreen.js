import "./DisplayScreen.css"

export default function DisplayScreen ({ displayText, imageURL }) {


    return (
        <div className="display" 
        style={{ backgroundImage: `url(${imageURL})` }} >
            <div className="screen">
                <span>{displayText}</span>
            </div>
        </div>
    )
}