import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import axios from 'axios'
import {useEffect} from 'react'

function Review() {
  const history = useHistory();
  const dispatch = useDispatch();
 
  const feeling = useSelector(store => store.feelingToAdd);
  const understanding = useSelector(store => store.understandingToAdd);
  const support = useSelector(store => store.supportedToAdd);
  const comments = useSelector(store => store.commentsToAdd);


  useEffect(() =>{
      fetchFeedback();
  }, []);

  const fetchFeedback = () =>{
      axios({
          method: 'GET',
          url: '/api/feedback',
      }).then(response =>{
          console.log(response.data);
          dispatch({
              type: 'SET_REVIEW',
              payload:response.data
          })

      }).catch((error) =>{
          console.log('Error in getting a feeback',  error);
      })
  }
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    const feedback = {
        feeling: feeling,
        understanding: understanding,
        support: support,
        comments:comments,
       
    }
    axios({
        method: 'POST',
        url: '/api/feedback',
        data: feedback
    }).then(response =>{
        console.log(response.data)
        history.push('/thanks');
    }).catch((error) =>{
        console.log('Error in posting', error);
    })

  }

    return (
        <div>
             <h2>Review Your Feedback</h2>
             <p></p>
             <p><strong>Feeling:{feeling}</strong></p>
             <p><strong>Understanding:{understanding}</strong></p>
             <p><strong>Support:{support}</strong></p>
             <p><strong>Comments:{comments}</strong></p>
             <p><button onClick={handleSubmit}>Submit</button></p>

        </div>
    )
}


export default Review

