import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

const routes = [
  { path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },  
  { path: '/bubblegum',
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  { path: '/shoelaces',
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
]

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{ display: 'flex' }}>
          <div style={{
          padding: '10px',
          width: '40%',
          background: '#f0f0f0'}}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/bubblegum">Bubblegum</Link></li>
            <li><Link to="/shoelaces">Shoelaces</Link></li>
          </ul>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
              />
          ))}
          </div>
          <div style={{ flex: 1, padding: '10px'}}>
            {routes.map((route, index) => (
              <Route 
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
              ))}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
