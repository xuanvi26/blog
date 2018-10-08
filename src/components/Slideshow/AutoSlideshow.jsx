import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { changeSlide } from '../../actions/changeSlide';
import './auto-slideshow.css';

class AutoSlideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fade: ""
    }
  }

  componentWillMount() {
    setInterval(() => {
      if(this.props.index < this.props.images.length - 1) {
        this.props.changeSlide(this.props.index + 1);
      } else {
        this.props.changeSlide(0);
      }
    }, this.props.interval);
  }

  componentWillReceiveProps() {
    requestAnimationFrame(() => {
      this.setState({
        fade: "auto-slideshow__image--fade",
      });
    })
  }

  render() {
    return (
      <div className="auto-slideshow">
        <img onAnimationEnd={() => { this.setState({ fade: "" });}} className={["auto-slideshow__img", this.state.fade].join(" ")} alt="auto slideshow" src={this.props.images[this.props.index]} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  index: state.slideshow.index
 });

 const mapDispatchToProps = dispatch => bindActionCreators({
  changeSlide: (index) => changeSlide(index),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AutoSlideshow);