import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App/App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux'

const feelingToAdd = (state ='', action) => {

    if (action.type === 'SET_NEW_FEELING') {
        return action.payload;
    }
    return state;
}
const understandingToAdd = (state = '', action) => {
    if (action.type === 'SET_NEW_UNDERSTANDING') {
        return action.payload;
    }

    return state;
}
const supportedToAdd = (state = '', action) => {
    if (action.type === 'SET_NEW_SUPPORTED') {
        return action.payload;
    }
    return state;
}

const commentsToAdd = (state = '', action) => {
    if (action.type === 'SET_NEW_COMMENTS') {
        return action.payload;
    }
    return state;
}
const thanksToAdd = (state = '', action) =>{
    if(action.type === 'START_OVER'){
        return action.payload
    }
    return state;
}

const reviewFeeback = (state = '', action) =>{
    if(action.type === 'SET_REVIEW'){
        return action.payload
    }
    return state;
} 


const store = createStore(

    combineReducers(
        {
            feelingToAdd,
            understandingToAdd,
            supportedToAdd,
            commentsToAdd,
            thanksToAdd,
            reviewFeeback
        }),
    applyMiddleware(logger)
)



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
