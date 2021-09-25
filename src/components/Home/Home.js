import React from 'react'
import { Link } from 'react-router-dom';



function Home() {
    return (
        <div>
        <Link to="/feeling">
        <button>Get Started!</button>
        </Link>
        </div>
    )
}


export default Home

