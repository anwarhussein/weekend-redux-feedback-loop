import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useEffect } from 'react'


//Gets all reducers from the store
function Review() {
    const history = useHistory();
    const dispatch = useDispatch();

    const feeling = useSelector(store => store.feelingToAdd);
    const understanding = useSelector(store => store.understandingToAdd);
    const support = useSelector(store => store.supportedToAdd);
    const comments = useSelector(store => store.commentsToAdd);

//Prevents infinite re-rendering of fetchfeedback function
    useEffect(() => {
        fetchFeedback();
    }, []);

//Gets all the feedback from the database
//and also after posting a new feedback
    const fetchFeedback = () => {
        axios({
            method: 'GET',
            url: '/api/feedback',
        }).then(response => {
            console.log(response.data);
            dispatch({
                type: 'SET_REVIEW',
                payload: response.data
            })

        }).catch((error) => {
            console.log('Error in getting a feeback', error);
        })
    }

//Posts a new feedback
    const handleSubmit = (event) => {
        event.preventDefault();
        const feedback = {
            feeling: feeling,
            understanding: understanding,
            support: support,
            comments: comments,

        }
        axios({
            method: 'POST',
            url: '/api/feedback',
            data: feedback
        }).then(response => {
            console.log(response.data)
            history.push('/thanks');
        }).catch((error) => {
            console.log('Error in posting', error);
        })

    }

    //Renders the results of the feedback to the DOM
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

