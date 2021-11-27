import React from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {Button} from '@material-ui/core'

//Set up the thank you page and 
//sends to the store.
function ThankYou() {

    const history = useHistory();
    const dispatch = useDispatch();

    const startOver = () =>{

        dispatch({
            type: 'START_OVER',
            payload: null
        })
        history.push('/');
    }
    return (
        <div>
            <h2>Thank You!</h2>
            <Button variant="contained" color="secondary" onClick={startOver} style={{marginLeft: "15px",marginTop: "10px", width:"150px"}}>Leave New Feedback</Button>
        </div>
    )
}

export default ThankYou

