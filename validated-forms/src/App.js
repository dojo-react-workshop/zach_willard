import React, { Component } from 'react';
import validator from 'validator';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Validated Form</h1>
        <MyForm />
      </div>
    );
  }
}


class MyForm extends Component {
  state = {
    name: { value: "",
    email: "",
    validInput: false,
    error: "Test"
  }

  
  validateForm = () => {
    let nameValid = false
    let emailValid = false
    if (!this.state.name.length >= 8){
      nameValid = true;
    }
    if (validator.isEmail(this.state.email)) {
      emailValid = true;
    }
    if (nameValid && emailValid) {
      this.setState({ validInput : true });
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    }, () => { this.validateForm() })
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name}/><span className="error">{props.err}</span>
        <input type="text" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.email}/><span className="error">{props.err}</span>
        <input type="submit" disabled={!this.state.validInput}/>
      </form>
    )
  }

}

const ValidatedInput = (props) => {
  return (
    <div>
      
    </div>
  )
}

export default App;
