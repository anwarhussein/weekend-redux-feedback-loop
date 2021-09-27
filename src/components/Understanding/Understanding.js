//import {useHistory} from 'react-router-dom'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'


//Sets up the understanding state
//and sends it to the store.
function Understanding() {

    const [understanding, setUnderstanding] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const addUnderstanding = (event) => {
        event.preventDefault();
        console.log('Adding a new understanding', understanding);

        dispatch({
            type: 'SET_NEW_UNDERSTANDING',
            payload: understanding

        });
        history.push('/supported');
    }


    return (
        <div>

            <h2>How well are you understanding the content?</h2>
            <h4>Understanding?</h4>
            <form onSubmit={addUnderstanding} >
                <input
                    type='text'
                    required
                    placeholder="1-5"
                    value={understanding}
                    onChange={(event) => setUnderstanding(event.target.value)}
                />
                <button type="submit">Next</button>

            </form>

        </div>
    )
}


export default Understanding

