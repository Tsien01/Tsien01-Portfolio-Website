import "./Nav.css"; 
import { Link } from "react-router-dom";


export default function Nav () {
    return (
    <div className="navButton">
        Navigation
        <nav className="navBar">
            <ul>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/Projects`}>Projects</Link></li>
                <li><Link to={`/About`}>About</Link></li>
            </ul>
        </nav>
    </div>
    )
}