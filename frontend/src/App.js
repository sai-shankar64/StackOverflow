import React, { Component } from 'react';
import logo from './stackoverflow.svg';
import './App.css';
import Questions from './questions';
import Question from './question';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import QuestionForm from './questionform';
import Redirect from 'react-router-dom/Redirect';

class App extends Component {
  constructor(props) {
    super(props);
  }

 

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} alt="logo" className="App-logo" />
          </header>
        </div>
        <Router>
          <div>
            <Route exact path="/questions/:id/" render={(props) => <Question {...props} />} />
            <Route exact path='/' render={(props) => <Questions {...props} />} />
          </div>

        </Router>
      </div>

    );
  }
}

export default App;
