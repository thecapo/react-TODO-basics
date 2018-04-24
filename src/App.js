import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles';

class App extends Component {
  state = {
    todos: [],
    text: ''
  }

  handleSubmit = this.handleSubmit.bind(this);
  handleChange = this.handleChange.bind(this);
  handleRemove = this.handleRemove.bind(this);

  handleRemove(index) {
    this.setState({
      todos: this.state.todos.filter(function(e, i) {
        return i !== index
      })
    })
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return
    } else {
    this.setState({
      todos: [...this.state.todos, this.state.text],
      text: ''
    })}
  }

  render() {
    let todos = this.state.todos;
    return (
      <div>
        <Titles /> 
        <form onSubmit={this.handleSubmit}>
          <input  type="text" 
                  placeholder="Enter TODO"
                  value={this.state.text}
                  onChange={this.handleChange}
          />
          <button>Add</button>
        </form>
        {todos.map((todo, index) => 
          <li key={index}>
            {todo}
            <button onClick={this.handleRemove.bind(this, index)}>Remove</button>
          </li>
        )}
      </div>
    );
  }
}

export default App;
