import { Link } from 'react-router-dom';
import './notes_styles.css'

function Lessons() {
    return (
        <div>
            <Link to="/">Back to Site Home Page</Link>
            <br></br>
            <Link to="/Notes_page">Back to Notes Home Page</Link>
            
            <h1>Lessons</h1>
            
            
        </div>
    )
}

export default Lessons;