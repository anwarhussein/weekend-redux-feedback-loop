import { useState } from 'react'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

//Sets up the feelings state and 
//sends to the store
function Feeling() {
    const [feeling, setFeeling] = useState('')

    const dispatch = useDispatch();
    const history = useHistory();

    const addFeeling = (event) => {
        event.preventDefault();

        console.log('Adding a feeling', feeling);

        dispatch({
            type: 'SET_NEW_FEELING',
            payload: feeling
        });

        history.push('/understanding');
    }


    return (
        <div className='App'>

            <h2>How are you feeling today?</h2>
            <h4>Feeling?</h4>
            <form onSubmit={addFeeling} >
                <input
                    type='text'
                    required
                    placeholder="feeling"
                    value={feeling}
                    onChange={(event) => setFeeling(event.target.value)}
                />
                <button type="submit">Next</button>

            </form>

        </div>
    )
}


export default Feeling

