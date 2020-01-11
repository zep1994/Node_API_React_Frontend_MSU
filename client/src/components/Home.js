import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div className="HomeContainer">
            <h1>Home</h1>
            <Link to='/about' exact>Learn More</Link>
        </div>
    )
}

export default Home