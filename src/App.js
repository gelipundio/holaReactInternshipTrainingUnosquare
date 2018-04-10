import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './components/TestComponent'
import Table from './components/Table'

class App extends Component {

  render () {
    const personas = [
      {name: 'chole', age: 23},
      {name: 'chava', age: 10},
      {name: 'luis', age: 40}
    ]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          HOLA REACT!!!!
        </p>

        <p>
          <TestComponent name={'felipe'} />
        </p>

        <Table personas={personas} />

      </div>
    );
  }
}

export default App;
