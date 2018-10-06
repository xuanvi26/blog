import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { sampleAction } from './actions/sampleAction'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class App extends Component {

  sampleAction = () => {
    this.props.sampleAction();
   }

  render() {
    const { classes } = this.props;
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
                JSON.stringify(this.props.sampleReducer)
              }
            </pre>
            <Button color="primary" variant="outlined" className={classes.button} onClick={this.sampleAction}>Test redux action</Button>
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

 export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
