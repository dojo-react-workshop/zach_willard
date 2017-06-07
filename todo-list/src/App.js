import React, { Component } from 'react';
import './App.css';
import AddTodo from './AddTodo';
import Todo from './Todo';
import BottomMenu from './BottomMenu';



class App extends Component {
  state = {
    todoItems: [],
    addToDo: "",
    styles: { standard: 'columns small-10 medium-8 large-6 xlarge-4 small-centered', card: 'card' },
    completedCount: 0,
    nextId: 0,
    filter: "All"
  }

  standard = "";
  card = "card";

  handleSubmit = (event) => {
    event.preventDefault();
    let tempItems = this.state.todoItems.slice();
    tempItems.push({ name: this.state.addToDo, id: this.state.nextId, completed: false });
    this.setState({ todoItems: tempItems, addToDo: "", nextId: this.state.nextId + 1 });
  }

  handleChange = (event) => {
    this.setState({ addToDo: event.target.value })
  }

  toggleComplete = (id) => {
    let todoItems = this.state.todoItems.slice();
    let completedCount = this.state.completedCount

    //If id is undefined, that means the "down arrow" was clicked and we want to mark all items complete.
    if (id === undefined) {
      if (completedCount === todoItems.length){
        // if all items are completed, mark them not-completed
        todoItems.forEach((item) => {
                  item.completed = false;
                  completedCount--;
                });
      } else {
        // mark only the non-true items as complete
        todoItems.forEach((item) => {
          if (!item.completed){
            item.completed = true;
            completedCount++;
          }
        })
      }
    } else {
      //Individually checked
      if (todoItems[id].completed) {
        todoItems[id].completed = false
        completedCount--;
      } else {
        todoItems[id].completed = true;
        completedCount++;
      }
    }
    this.setState({ completedCount })
    this.setState({ todoItems });
  }

  setFilter = (filter) => {
    this.setState({ filter });
  }

  clearCompleted = () => {
    let todoItems = []
    todoItems = this.state.todoItems.filter((item) => { return (!item.completed) });
    this.setState({ todoItems, completedCount : 0});
  }

  render() {
    return (
      <div className="App row">
        <h1 className={this.state.styles.standard}>Todos</h1>
        <AddTodo 
          css={this.state.styles} 
          handleSubmit={this.handleSubmit} 
          handleChange={this.handleChange} 
          addToDo={this.state.addToDo} 
          toggleComplete={this.toggleComplete}/>
        {          
            this.state.todoItems.filter((item) => {
              if (this.state.filter === "Active"){
                return (item.completed === false)
              } else if (this.state.filter === "Completed") {
                return (item.completed === true)
              } else {
                return true;
              }
              }).map((item, idx) => <Todo css={this.state.styles} 
                                                      item={item}
                                                      idx={idx}
                                                      toggleComplete={this.toggleComplete} 
                                                      key={item.id}
                                                      /> )
        }
        {this.state.todoItems.length > 0 ? 
          <BottomMenu css={this.state.styles} 
                      itemsLeft={this.state.todoItems.length - this.state.completedCount} 
                      completedCount={this.state.completedCount}
                      filter={this.state.filter}
                      setFilter={this.setFilter}
                      clearCompleted={this.clearCompleted}/> 
                      : null}
      </div>
    );
  }
}

export default App;
