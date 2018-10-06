import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { sampleAction } from './actions/sampleAction'

class App extends Component {

  sampleAction = () => {
    this.props.sampleAction();
   }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React + Redux
          </a>
            <pre>
              {
                JSON.stringify(this.props)
              }
            </pre>
            <button onClick={this.sampleAction}>Test redux action</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
 });

 const mapDispatchToProps = dispatch => ({
  sampleAction: () => dispatch(sampleAction())
 });

 export default connect(mapStateToProps, mapDispatchToProps)(App);
