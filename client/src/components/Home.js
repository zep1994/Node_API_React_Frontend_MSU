import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div className="HomeContainer">
            <h1>Home</h1>
            <Link to='/about' exact>Learn More</Link>

            <div className="id_input">
                <form action="/" method="POST">
                    <input type="text" placeholder="Enter ID of Guide.." name="id" />
                    <button>Enter</button>
                </form>
            </div>
        </div>
    )
}

export default Home