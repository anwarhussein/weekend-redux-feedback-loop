import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import axios from 'axios'

function Review() {
  const history = useHistory();
  const dispatch = useDispatch();
 
  const listOfFeelings = useSelector(store => store.feelingToAdd);
  const listOfUnderstandings = useSelector(store => store.understandingToAdd);
  const listOfSupports = useSelector(store => store.supportedToAdd);
  const listOfComments = useSelector(store => store.commentsToAdd);
  const listOfThanks =  useSelector(store => store.thanksToAdd);

  const fetchFeedback = () =>{
      axios({
          method: 'GET',
          url: '/feedback',
      }).then(response =>{
          console.log(response.data);
          dispatch({
              type: 'SET_REVIEW',
              payload:response.data
          })

      })
  }
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    const feedback = {
        listOfFeelings: listOfFeelings,
        listOfUnderstandings: listOfUnderstandings,
        listOfSupports: listOfSupports,
        listOfComments:listOfComments,
        listOfThanks: listOfThanks
    }
    axios({
        method: 'POST',
        url: '/feedback',
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
             <p><strong>Feeling:{listOfFeelings}</strong></p>
             <p><strong>Understanding:{listOfUnderstandings}</strong></p>
             <p><strong>Support:{listOfSupports}</strong></p>
             <p><strong>Comments:{listOfComments}</strong></p>
             <p><button onClick={handleSubmit}>Submit</button></p>

        </div>
    )
}


export default Review

