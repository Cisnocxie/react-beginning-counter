import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Counter />
      </div>
    );
  }
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num : 0
    }
  }

  render() {
    return (
      <p className="App-intro">
        <button onClick = {this.setState({ num : this.state.num + 1 })}> + </button>
        <button onClick = {this.setState({ num : this.state.num - 1 })}> - </button>
        <label> Counter: {this.state.num} </label>
      </p>
    );
  }
}

export default App;
