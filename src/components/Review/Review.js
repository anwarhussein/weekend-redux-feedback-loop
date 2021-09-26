import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import axios from 'axios'

function Review() {
 
  const listOfFeelings = useSelector(store => store.feelingToAdd);
  const listOfUnderstandings = useSelector(store => store.understandingToAdd);
  const listOfSupports = useSelector(store => store.supportedToAdd);
  const listOfComments = useSelector(store => store.commentsToAdd)

  const handleSubmit = ()

    return (
        <div>
             <h2>Review Your Feedback</h2>
             <p></p>
             <p><strong>Feeling:</strong></p>
             <p><strong>Understanding:</strong></p>
             <p><strong>Support:</strong></p>
             <p><strong>Comments:</strong></p>

        </div>
    )
}


export default Review

