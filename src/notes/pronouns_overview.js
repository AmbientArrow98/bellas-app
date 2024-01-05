import { Link } from 'react-router-dom';
import './notes_styles.css'

function Pronouns_overview() {
    return (
        <div>
            <Link to="/">Back to Site Home Page</Link>
            <br></br>
            <Link to="/Notes_page">Back to Notes Home Page</Link>
            
            <h1>Pronouns Overview</h1>
            <h2>The Nominative Case</h2>
            <h3>Personal Pronouns</h3>
            <table>
                <tr>
                    <td><strong>unë</strong> (I)</td>
                    <td><strong>ne</strong> (we) </td>
                </tr>
                <tr>
                    <td><strong>ti</strong> (you (singular informal)) </td>
                    <td><strong>ju</strong> (you (singular formal, plural you)) </td>
                </tr>
                <tr>
                    <td><strong>ai/ajo</strong> (he/she) </td>
                    <td><strong>ata/ato</strong> (they(masc.)/they(fem.)) </td>
                </tr>
            </table>
            <p><strong>Example:</strong></p>
            <p>Unë jam Bella. <i> I am Bella.</i></p>
            <p>Ti je Berti. <i> You are Berti.</i></p>
            <p>Ai është Beni, ajo është Marta. <i> He is Ben, she is Marta.</i></p>
            <p>Ju jeni Zoti Bardhi. <i> You are Mr. Bardhi.</i></p>
            <p>Ju jeni Marku dhe Xhoni, po? <i> You are Mark and John, yes? </i></p>
            <p>Ata janë Marku dhe Xhoni, dhe ato janë Marta dhe Drita. <i> They are Mark and John, and they are Marta and Drita. </i></p>
            <br></br>
            <h3>Possesive Pronouns - Singular</h3>
            <p><strong>NOTE! </strong> The gender of the possesive pronoun is equal to the gender of <i>the noun that the possesive pronoun is referring to,</i> NOT the gender of the speaker! </p>
            <table>
                <tr>
                    <th>English</th>
                    <th>Albanian</th>
                </tr>
                <tr>
                    <td>my (masc.)</td>
                    <td>im</td>
                </tr>
                <tr>
                    <td>my (fem.)</td>
                    <td>ime</td>
                </tr>
                <tr>
                    <td>your (masc.)</td>
                    <td>yt</td>
                </tr>
                <tr>
                    <td>your (fem.)</td>
                    <td>jote</td>
                </tr>
                <tr>
                    <td>his (masc.)</td>
                    <td>i tij</td>
                </tr>
                <tr>
                    <td>his (fem.)</td>
                    <td>e tij</td>
                </tr>
                <tr>
                    <td>her (masc.)</td>
                    <td>i saj</td>
                </tr>
                <tr>
                    <td>her (fem.)</td>
                    <td>e saj</td>
                </tr>
                <tr>
                    <td>our (masc.)</td>
                    <td>ynë</td>
                </tr>
                <tr>
                    <td>our (fem.)</td>
                    <td>jonë</td>
                </tr>
                <tr>
                    <td>your (plural, masc.)</td>
                    <td>juaj</td>
                </tr>
                <tr>
                    <td>your (plural, fem.)</td>
                    <td>juaj</td>
                </tr>
                <tr>
                    <td>their (ata, masc.)</td>
                    <td>i tyre</td>
                </tr>
                <tr>
                    <td>their (ata, fem.)</td>
                    <td>i tyre</td>
                </tr>
                <tr>
                    <td>their (ato, masc.)</td>
                    <td>i tyre</td>
                </tr>
                <tr>
                    <td>their (ato, fem.)</td>
                    <td>i tyre</td>
                </tr>
            </table>
            <h3>Possesive Pronouns - Plural</h3>
            <p><strong>NOTE! </strong> The gender of the possesive pronoun is equal to the gender of <i>the noun that the possesive pronoun is referring to,</i> NOT the gender of the speaker! </p>
            <table>
                <tr>
                    <th>English</th>
                    <th>Albanian</th>
                </tr>
                <tr>
                    <td>my (masc.)</td>
                    <td>e mi</td>
                </tr>
                <tr>
                    <td>my (fem.)</td>
                    <td>e mia</td>
                </tr>
                <tr>
                    <td>your (masc.)</td>
                    <td>e tu</td>
                </tr>
                <tr>
                    <td>your (fem.)</td>
                    <td>e tua</td>
                </tr>
                <tr>
                    <td>his (masc.)</td>
                    <td>e tij</td>
                </tr>
                <tr>
                    <td>his (fem.)</td>
                    <td>e tij</td>
                </tr>
                <tr>
                    <td>her (masc.)</td>
                    <td>e saj</td>
                </tr>
                <tr>
                    <td>her (fem.)</td>
                    <td>e saj</td>
                </tr>
                <tr>
                    <td>our (masc.)</td>
                    <td>tanë</td>
                </tr>
                <tr>
                    <td>our (fem.)</td>
                    <td>tona</td>
                </tr>
                <tr>
                    <td>your (plural, masc.)</td>
                    <td>tuaj</td>
                </tr>
                <tr>
                    <td>your (plural, fem.)</td>
                    <td>tuaja</td>
                </tr>
                <tr>
                    <td>their (ata, masc.)</td>
                    <td>e tyre</td>
                </tr>
                <tr>
                    <td>their (ata, fem.)</td>
                    <td>e tyre</td>
                </tr>
                <tr>
                    <td>their (ato, masc.)</td>
                    <td>e tyre</td>
                </tr>
                <tr>
                    <td>their (ato, fem.)</td>
                    <td>e tyre</td>
                </tr>
            </table>
            <p><strong>Examples:</strong></p>
            <p>Fletoret e mia janë me ngjyra. <i>My notebooks are colorful.</i></p>
            <p>Motrat e mia jetojnë me mua. <i>My sisters live with me.</i></p>
            
            
        </div>
    )
}

export default Pronouns_overview;