import { Link } from 'react-router-dom';
import './notes_styles.css'

function Adjectives_overview() {
    return (
        <div>
            <Link to="/">Back to Site Home Page</Link>
            <br></br>
            <Link to="/Notes_page">Back to Notes Home Page</Link>
            
            <h1>Adjectives Overview</h1>
            <h2>The Nominative Case</h2>
    
            <h3>Singular</h3>
                <table>
                    <tr>
                        <th>Gender of Noun</th>
                        <th>Prefix for Adjective</th>
                    </tr>
                    <tr>
                        <td>Masculine</td>
                        <td>i</td>
                    </tr>
                    <tr>
                        <td>Feminine</td>
                        <td>e</td>
                    </tr>
                </table>
                <p><strong>Example:</strong></p>
                <p>Marku është <strong>i</strong> gjatë.</p>
                <p>Albina është <strong>e</strong> gjatë.</p>
                
                <br></br>
                
                <h3>Plural</h3>
                <table>
                    <tr>
                        <th>Gender of Noun</th>
                        <th>Rule</th>
                    </tr>
                    <tr>
                        <td>Masculine</td>
                        <td>
                            Replace the 'i' prefix with 'të', and do NOT change anything about the adjective itself.
                        </td>
                    </tr>
                    <tr>
                    <td>Feminine</td>
                        <td>
                            Replace the 'e' prefix with 'të', and if the adjective itself ends in -ë, we <i>replace</i> it with -a. If it ends in any other letter, we <i>add</i> an -a.
                        </td>
                    </tr>
                </table>
                <p><strong>Example:</strong></p>
                <table>
                <tr>
                    <th>Singular</th>
                    <th>Plural</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td>i/e bukur</td>
                    <td> të bukur/të bukura</td>
                    <td>
                        <li>Bleta dhe Bina janë të bukura.</li>
                        <li>Bleta and Bina are beautiful.</li>
                    </td>
                </tr>
                <tr>
                    <td>i/e gjatë</td>
                    <td>të gjatë/të gjata</td>
                    <td>
                        <li>Marku dhe Drini janë të gjatë.</li>
                        <li>Mark and Drini are tall.</li>
                    </td>
                </tr>
                <tr>
                    <td>i/e mençur</td>
                    <td>të mençur/të mençura</td>
                    <td>
                        <li>Gjylija dhe Aferdita janë të mençura.</li>
                        <li>Gjylija and Aferdita are wise.</li>
                    </td>
                </tr>
                </table>
            
        </div>
    )
}

export default Adjectives_overview;