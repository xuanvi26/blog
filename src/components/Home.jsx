import {connect} from 'react-redux';
import React from 'react'
import { bindActionCreators } from 'redux'
import { push } from 'connected-react-router'

import { sampleAction } from '../actions/sampleAction';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

const Home = (props) => {
  const {classes} = props;
  return (
    <div>
      <div>
        {
          JSON.stringify(props.sampleReducer)
        }
      </div>
      <div>
        <Button color="primary" variant="outlined" className={classes.button} onClick={props.sampleAction}>Test redux action</Button>
        <Button color="secondary" variant="contained" onClick={() => props.changePage()}>Go to about page via redux</Button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  ...state
 });

 const mapDispatchToProps = dispatch => bindActionCreators({
  sampleAction: () => sampleAction(),
  changePage: () => push('/about-us')
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));
