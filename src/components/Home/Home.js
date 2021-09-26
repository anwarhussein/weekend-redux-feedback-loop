import React from 'react'
import { useHistory } from 'react-router-dom'



function Home() {
    const history = useHistory();

    const handleGetStarted = (event) => {
        event.preventDefault();
        history.push('/feeling')
    }

    return (
        <div>

            <button onClick={handleGetStarted}>Get Started!</button>

        </div>
    )
}


export default Home

