import React from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
function ThankYou() {

    const history = useHistory();
    const dispatch = useDispatch();

    const startOver = () =>{

        dispatch({
            type: 'START_OVER',
            payload: null
        })
        history('/');
    }
    return (
        <div>
            <h2>Thank You!</h2>
            <button onClick={startOver}>Leave New Feedback</button>
        </div>
    )
}



export default ThankYou

