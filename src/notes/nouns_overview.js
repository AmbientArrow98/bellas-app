import { Link } from 'react-router-dom';
import './notes_styles.css'

function Nouns_overview() {
    return (
        <div>
            <Link to="/">Back to Site Home Page</Link>
            <br></br>
            <Link to="/Notes_page">Back to Notes Home Page</Link>
            
            <h1>Nouns Overview</h1>
            <h2>The Nominative Case</h2>
            <h3>Singular Indefinite</h3>
            <table>
                <tr>
                    <th>Gender of Noun</th>
                    <th>Rule</th>
                </tr>
                <tr>
                    <td>Masculine Nouns</td>
                    <td>Ends on all letters other than -e, -ë, -ër, or -i.</td>
                </tr>
                <tr>
                    <td>Feminine Nouns</td>
                    <td>Ends in -e, -ë, -ër, or -i.</td>
                </tr>
            </table>
            <br></br>
            <h3>Plural Indefinite</h3>
            <table>
                <tr>
                    <th>Gender of Noun</th>
                    <th>Rule</th>
                </tr>
                <tr>
                    <td>Masculine Nouns</td>
                    <td>
                        <li>If a noun ends with -k, we usually replace it with -q.</li>
                        <li>If a noun ends with -ër, we usually replace it with -ra.</li>
                        <li>If a noun ends with -ll, we usually replace it with -j.</li>
                        <li>If a noun ends with -l, we usually add an -e.</li>
                        <li>If a noun ends with any other letter, we usually add an -ë.</li>
                    </td>
                </tr>
                <tr>
                <td>Feminine Nouns</td>
                    <td>
                        <li>If a noun ends with -ë, we usually replace it with -a.</li>
                        <li>If a noun ends with -ër, we usually replace it with -ra.</li>
                        <li>If a noun ends with -e, we usually replace it with -ë.</li>
                        <li>If a noun ends with -i, we usually do not change it.</li>
                    </td>
                </tr>
            </table>
            
            
        </div>
    )
}

export default Nouns_overview;