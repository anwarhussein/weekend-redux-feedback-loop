import React from 'react'
import { useHistory } from 'react-router-dom'
import {Button} from '@material-ui/core'


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

            <Button variant="contained" color="secondary" onClick={handleGetStarted} style={{marginLeft: "15px",marginTop: "10px", width:"150px"}}>Get Started</Button>

        </div>
    )
}


export default Home

