import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
// import Home from './home'
import About from "./about";
import Notes_page from "./notes_page";
import Resources from "./resources";
import Dialects from "./notes/dialects";
import Lessons from "./notes/lessons";
import General_overview from "./notes/general_overview";
import Adjectives_overview from "./notes/adjectives_overview";
import Nouns_overview from "./notes/nouns_overview";
import Pronouns_overview from "./notes/pronouns_overview";
import Verbs_overview from "./notes/verbs_overview";

function App() {
  return (
    <Router>
      <div className="App">
         <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Notes_page" element={<Notes_page />} />
            <Route path="/Resources" element={<Resources />} />
            <Route path="/Adjectives_overview" element={<Adjectives_overview />} />
            <Route path="/General_overview" element={<General_overview />} />
            <Route path="/Nouns_overview" element={<Nouns_overview />} />
            <Route path="/Pronouns_overview" element={<Pronouns_overview />} />
            <Route path="/Verbs_overview" element={<Verbs_overview />} />
            <Route path="/Dialects" element={<Dialects />} />
            <Route path="/Lessons" element={<Lessons />} />

          </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
      <div>
         <Link to="/About">About Page</Link>
         <br></br>
         <Link to="/Notes_page">Notes Page</Link>
         <br></br>
         <Link to="/Resources">Resources Page</Link>
         
          <h1>Bella's Albanian Notes</h1>
          
          <p><strong>Disclaimer: I am not fluent in Albanian!</strong> I am learning, this is just a site where I post all my notes.</p>
        
          <p>For a list of great resources to learn Albanian, please visit the Resources page: </p>   

          <p>For more information about me and this site, please visit the About page: </p>

          <p>To check out my notes, please visit the Notes page: </p>       
      </div>
  )
}


export default App;
