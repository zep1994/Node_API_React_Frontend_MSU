import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return(
        <div className="AboutContainer">
            <h1>About</h1>
            <Link to='/home' exact>Learn More</Link>
        </div>
    )
}

export default About