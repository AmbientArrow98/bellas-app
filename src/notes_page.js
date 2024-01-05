import { Link } from 'react-router-dom';
import Dialects from "./notes/dialects";
import Lessons from "./notes/lessons";
import General_overview from "./notes/general_overview";
import Adjectives_overview from "./notes/adjectives_overview";
import Nouns_overview from "./notes/nouns_overview";
import Pronouns_overview from "./notes/pronouns_overview";
import Verbs_overview from "./notes/verbs_overview";

function Notes_page() {
    return (
        <div>
            <Link to="/">Home Page</Link>
            
            <h1>Notes </h1>
            
            <p>I'm breaking down my notes into the following sections: </p>

            <Link to="/General_overview">General Overview</Link>
            <br></br>
            <Link to="/Adjectives_overview">Adjectives Overview</Link>
            <br></br>
            <Link to="/Nouns_overview">Nouns Overview</Link>
            <br></br>
            <Link to="/Pronouns_overview">Pronouns Overview</Link>
            <br></br>
            <Link to="/Verbs_overview">Verbs Overview</Link>
            <br></br>
            <Link to="/Dialects">Dialects</Link>
            <br></br>
            <Link to="/Lessons">Lessons</Link>
        </div>
    )
}

export default Notes_page