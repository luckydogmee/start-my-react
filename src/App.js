import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>router导航</h2>
        <ul>
          <li><link to="/ant">ant design demo</link></li>
          <li><link to="/comment">comment demo</link></li>
        </ul>
        { this.props.children }
      </div>
    );
  }
}

export default App;
