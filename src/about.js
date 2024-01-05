import { Link } from 'react-router-dom';

function About() {
    return (
        <div>
            <Link to="/">Home Page</Link>
            
            <h1>About This Site! </h1>
            
            <p>This site is a space where I (Bella) put all my notes online! </p>

            <p>I grew up understanding Albanian for the most part, 
              but I could not speak it! I am still working on getting better
              at speaking every day, but I wanted to put my notes all in one 
              place in case they can help anyone else. It can be difficult to find
              resources to learn Albanian. Please check out the resources page
              for a full list of all the resources I have ever used! </p>
            
        </div>
    )
}

export default About