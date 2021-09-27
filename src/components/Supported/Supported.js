import React from 'react'
import {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

//Sets up the support state and
//sends it to the store
function Supported() {
    
    const [supported, setSupported] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const addSupported = (event) =>{
        event.preventDefault();
        console.log('Adding new supported', supported);

        dispatch({
            type: 'SET_NEW_SUPPORTED',
            payload: supported
        });
        history.push('/comments');

    }

    return (
        <div>
            <h2>How well are you supported?</h2>
            <h4>Supported?</h4>
            <form onSubmit={addSupported} >
                <input
                    type='text'
                    required
                    placeholder="1-5"
                    value={supported}
                    onChange={(event) => setSupported(event.target.value)}
                />
                <button type="submit">Next</button>

            </form>

              
        </div>
    )
}



export default Supported

