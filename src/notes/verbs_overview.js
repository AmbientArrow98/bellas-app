import { Link } from 'react-router-dom';
import './notes_styles.css'

function Verbs_overview() {
    return (
        <div>
            <Link to="/">Back to Site Home Page</Link>
            <br></br>
            <Link to="/Notes_page">Back to Notes Home Page</Link>
            
            <h1>Verbs overview</h1>
            
            
        </div>
    )
}

export default Verbs_overview;