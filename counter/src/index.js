import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count: 0,
        };
        
    }

    increment = () => {
        this.setState( { count: (this.state.count + 1) } );
    }

    decrement = () => {
        this.setState( { count: (this.state.count - 1) } );
    }
    
    render() {
        return (
            <div className='counter'>
                <h2>{this.state.count}</h2>
                <div>
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                </div>
            </div>
        );
    }
}

class App extends Component{
    constructor(props) {
        super(props);
        this.state = { rowCount: 1 }
    }
    
    addCounter = () => {
        this.setState( { rowCount: this.state.rowCount + 1 })
    }
    
    getCounters = () => {
        let rows = [];
        for (var i = 0; i < this.state.rowCount; i++){
            rows.push(<Counter key={i}/>);
        }
        console.log(rows);
        return rows;
    }

    render () {
        return (
            <div>
                <button className="add" onClick={this.addCounter}>Add Counter</button>
                {this.getCounters()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
