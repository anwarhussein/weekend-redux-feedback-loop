import React from 'react'
import {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
function Comments() {

    const [comments, setComments] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const addComments = (event) =>{
          event.preventDefault();
          console.log('Adding new comments', comments);

          dispatch({
              type:'SET_NEW_COMMENTS',
              payload:comments
          });

          history.push('/review');
    }

    return (
        <div>
            
            <h2>Any comments you want to leave?</h2>
            <h4>Comments?</h4>
            <form onSubmit={addComments} >
                <input
                    type='text'
                    required
                    placeholder="supported"
                    value={comments}
                    onChange={(event) => setComments(event.target.value)}
                />
                <button type="submit">Next</button>

            </form>
            
        </div>
    )
}



export default Comments

