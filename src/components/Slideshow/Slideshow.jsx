import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { changeSlide } from '../../actions/changeSlide';
import './slideshow.css';

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

  componentWillReceiveProps(nextProps) {
    if (this.props.index !== nextProps.index) {
      requestAnimationFrame(() => {
        this.setState({
          fade: "slideshow__image--fade",
        });
      });
    }
  }

  render() {
    let title = "";
    let subtitle = "";
    let rightIcon = "";
    if(this.props.title) {
      title = <div className="title slideshow__title">{this.props.title}</div>
    }

    if(this.props.subtitle) {
      subtitle = <div className="subtitle slideshow__subtitle">{this.props.subtitle}</div>
    }

    if(this.props.rightIcon) {
      rightIcon = <img alt="right icon" className="slideshow__rightIcon" src={this.props.rightIcon} />
    }
    
    return (
      <div className="slideshow">
        <img onAnimationEnd={() => { this.setState({ fade: "" });}} className={["slideshow__img", this.state.fade].join(" ")} alt="auto slideshow" src={this.props.images[this.props.index]} />
        <div className='slideshow__titles'>
          {subtitle}
          {title}
        </div>
        {rightIcon}
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
