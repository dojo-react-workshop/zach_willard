import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';




class App extends Component {
  state = {
    todoItems: [],
    addToDo: "",
    styles: { standard: 'columns small-8 medium-6 large-4 xlarge-4 small-centered', card: 'card' }
  }

  standard = "";
  card = "card";

  handleSubmit = (event) => {
    event.preventDefault();
    let tempItems = this.state.todoItems.slice();
    tempItems.push({ name: this.state.addToDo, id: this.state.todoItems.length, completed: false });
    this.setState({ todoItems: tempItems, addToDo: "" });
  }

  handleChange = (event) => {
    this.setState({ addToDo: event.target.value })
  }

  toggleComplete = (id) => {
    let items = this.state.todoItems.slice();
    console.log(items);
    (items[id].completed) ? items[id].completed = false : items[id].completed = true;
    this.setState({ todoItems: items });
  }

  render() {
    return (
      <div className="App row">
        <h1 className={this.state.styles.standard}>Todos</h1>
        <DeleteAddTodo css={this.state.styles} handleSubmit={this.handleSubmit} handleChange={this.handleChange} addToDo={this.state.addToDo} />
        {this.state.todoItems.map((item) => <Todo css={this.state.styles} item={item} toggleComplete={this.toggleComplete} key={item.id}/> )}
        <BottomMenu css={this.state.styles} />
      </div>
    );
  }
}

const DeleteAddTodo = ({ css, addToDo, handleChange, handleSubmit }) => {
  const { standard, card } = css;

  return (
    <div className={standard+" "+card}>
      <a><span className="icon icon-caret-down"></span></a>
      <form onSubmit={handleSubmit}><input type="text" value={addToDo} onChange={handleChange} placeholder="What needs to be done?"/></form>
    </div>
  )  
}

const Todo = ({ toggleComplete, item, css }) => {
  const { id, completed, name } = item;
  const { standard, card } = css;

  const handleClick = () => {
    toggleComplete(id);
  }
  
  return (
      <div className={standard+" "+card+" Todo"}>
        <div className="Checkcircle" onClick={handleClick}>
          {(completed) ? <span className="icon icon-check"></span> : null}
        </div>
        {(completed) ? <div className="todoname crossed">{name}</div> : <div className="todoname">{name}</div>}
      </div>
  )
}

const BottomMenu = ({ css }) => {
  const { standard, card } = css;
  return (
    <div className={standard+" "+card}>Bottom bar</div>
  )
}

export default App;
