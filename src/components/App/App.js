import React from 'react'
//import axios from 'axios'
import './App.css';
import Feeling from '../Feeling/Feeling.js'
import { HashRouter as Router, Route } from 'react-router-dom';
import Understanding from '../Understanding/Understanding'
import Review from '../Review/Review'
import Comments from '../Comments/Comments'
import Home from '../Home/Home'
import Supported from '../Supported/Supported'
import ThankYou from '../ThankYou/ThankYou'

//Sets up the routers
function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/feeling" component={Feeling} />
        <Route exact path="/supported" component={Supported} />
        <Route exact path="/review" component={Review} />
        <Route exact path="/comments" component={Comments} />
        <Route exact path="/understanding" component={Understanding} />
        <Route exact path="/thanks" component={ThankYou} />


      </Router>
    </div>
  );
}

export default App;
