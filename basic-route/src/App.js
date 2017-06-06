import React, { Component } from 'react';
import './App.css';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Topics" component={Topics}/>
          </div>
        </div>
      </Router>
    );
  }
}

const Home = () => {
  return (
    <h1>Home</h1>
  )
}

const About = () => {
  return (
    <h1>About</h1>
  )
}

const Topics = ({ match }) => {
  return (
      <Router>
        <div>
          <h1>Topics</h1>
          <ul>
            <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
            <li><Link to={`${match.url}/components`}>Components</Link></li>
            <li><Link to={`${match.url}/props-v-state`}>Props v. State</Link></li>
          </ul>
          <Route path={`${match.url}/:topicID`} component={Topic}/>
          <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
          )} />
        </div>
      </Router>
  );
}

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicID}</h3>
  </div>
)

export default App;
