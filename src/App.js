import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Home from './containers/Home/Home';
import About from './containers/About/About';
import Privacy from './containers/Privacy/Privacy';
import Contact from './containers/Contact/Contact';

class App extends Component {
  render() {
    return (
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/contact" component={Contact} />
      </main>
    );
  }
}

 export default App;
