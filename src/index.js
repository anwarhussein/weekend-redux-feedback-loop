import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App/App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux'

const feelingToAdd = (state = '', action) => {

    if (action.type === 'SET_NEW_FEELING') {
        return action.payload;
    }else if (action.payload === 'START_OVER') {
        return state;
    }
    return state;
}
const understandingToAdd = (state = '', action) => {
    if (action.type === 'SET_NEW_UNDERSTANDING') {
        return action.payload;
    } else if (action.payload === 'START_OVER') {
        return state;
    }

    return state;
}
const supportedToAdd = (state = '', action) => {
    if (action.type === 'SET_NEW_SUPPORTED') {
        return action.payload;
    } else if (action.payload === 'START_OVER') {
        return state;
    }
    return state;
}

const commentsToAdd = (state = '', action) => {
    if (action.type === 'SET_NEW_COMMENTS') {
        return action.payload;
    } else if (action.payload === 'START_OVER') {
        return state;
    }
    return state;
}


const reviewFeeback = (state = '', action) => {
    if (action.type === 'SET_REVIEW') {
        return action.payload
    } else if (action.payload === 'START_OVER') {
        return state;
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
            reviewFeeback
        }),
    applyMiddleware(logger)
)



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
