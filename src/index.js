import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App/App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux'

const feelingToAdd = (state = [], action) => {

    if (action.type === 'SET_NEW_FEELING') {
        [...state, action.payload]
    }
    return state;
}
const understandingToAdd = (state = [], action) => {
    if (action.type === 'SET_NEW_UNDERSTANDING') {
        return [...state, action.payload]
    }

    return state;
}
const supportedToAdd = (state = [], action) => {
    if (action.type === 'SET_NEW_SUPPORTED') {
        [...state, action.payload];
    }
    return state;
}

const commentsToAdd = (state = [], action) => {
    if (action.type === 'SET_NEW_COMMENTS') {
        return [...state, action.payload];
    }
    return state;
}
const thanksToAdd = (state = [], action) =>{
    if(action.type === 'START_OVER'){
        return [...state, action.payload]
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
            thanksToAdd
        }),
    applyMiddleware(logger)
)



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
