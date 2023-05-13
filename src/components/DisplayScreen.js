import "./DisplayScreen.css"

export default function DisplayScreen ({displayText}) {


    return (
        <div className="display">
            <div className="screen">
                <span>{displayText}</span>
            </div>
        </div>
    )
}