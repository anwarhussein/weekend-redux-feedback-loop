import React from 'react'
import {useHistory} from 'react-router-dom'

function Understanding() {

    const history = useHistory();

    const addUnderstanding = () =>{
        history.push('/supported')

    }
    return (
        <div className='App'>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
                <h4>Don't forget it!</h4>
            </header>
            <button onClick={addUnderstanding}>Next</button>
            
            
        </div>
    )
}


export default Understanding

