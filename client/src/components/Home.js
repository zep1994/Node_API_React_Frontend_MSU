import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div className="HomeContainer">
            <Link to='/about' exact>Learn More</Link>
            <Link to='/guides' exact>List All Guides More</Link>
        </div>
    )
}

export default Home