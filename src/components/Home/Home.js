import React from 'react'
import { useHistory } from 'react-router-dom'


//Home page begins the feedback
//Switches you to the feeling page with click of the button
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

