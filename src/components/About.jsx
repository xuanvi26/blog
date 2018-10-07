import {connect} from 'react-redux';
import React from 'react'
import { bindActionCreators } from 'redux'
import { push } from 'connected-react-router'


import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

const About = (props) => {
  const {classes} = props;
  return (
    <div>
      <Button color="secondary" variant="contained" className={classes.button} onClick={() => props.changePage()}>Go to Home page via redux</Button>
    </div>
  )
}

const mapStateToProps = state => ({
  ...state
 });

 const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/')
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(About));
