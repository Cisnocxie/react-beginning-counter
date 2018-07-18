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
        <CounterGroup />
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
      <div className="App-intro">
        <button onClick = {() => { this.setState({ num : this.state.num + 1 }); this.props.operate(1); }}> + </button>
        <button onClick = {() => { this.setState({ num : this.state.num - 1 }); this.props.operate(-1); }}> - </button>
        <span> Counter: {this.state.num} </span>
      </div>
    );
  }
}

class CounterGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterNum : 0,
      counters : [],
      sum : 0
    }

    this.operate = this.operate.bind(this);
    this.setCounter = this.setCounter.bind(this);
  }

  operate(i) {
    this.setState({sum : this.state.sum + i});
  }

  generateUUID() {
    /*jshint bitwise:false */
    var i,
        random;
    var uuid = '';

    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            uuid += '-';
        }
        uuid += (i === 12
            ? 4
            : (i === 16
                ? (random & 3 | 8)
                : random)).toString(16);
    }
    return uuid;
  }

  setCounter() {
    let array = [];
    for (let i = 0; i < this.state.counterNum; i++) {
      array.push(<Counter key={this.generateUUID()} operate={this.operate}/>);
    }
    this.setState({counters : array, sum : 0});
  }

  render() {
    return (
      <div>
        <input type="text" onChange={ (event) => this.setState({counterNum: event.target.value}) }/>
        <button onClick={this.setCounter}> OK </button>
        {this.state.counters}
        <div> Sum: {this.state.sum} </div>
      </div>
    );
  }
}

export default App;
