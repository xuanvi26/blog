import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import './App.css';
import About from './components/About';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Link to="/">Home </Link>
          <Link to="/about-us">About </Link>
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </main>
      </div>
    );
  }
}

 export default App;
