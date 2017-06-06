import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <h1>Accounts</h1>
            <ul>
              <li><Link to="/netflix">Netflix</Link></li>
              <li><Link to="/zillow-group">Zillow Group</Link></li>
              <li><Link to="/modus-create">Modus Create</Link></li>
              <li><Link to="/yahoo">Yahoo</Link></li>
            </ul>
            <Route path="/:id" component={Child}/>
          </div>
        </Router>
      </div>
    );
  }
}

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)

export default App;
