import React from 'react'
import {useState} from 'react';
import {useHistory} from 'react-router-dom'

function Feeling() {
    const [feeling, setFeeling] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();
    
    const addFeeling = (event) =>{
        event.preventDefault();
        
        consil
        history.push('/understanding');
    } 


    return (
        <div className='App'>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
                <h4>Don't forget it!</h4>
                
            </header>
            <button onClick={addFeeling}>Next</button>
            <h2>How are you feeling today?</h2>
            
           
            
           
        </div>
    )
}


export default Feeling

