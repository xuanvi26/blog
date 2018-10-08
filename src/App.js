import React, { Component } from 'react';

import './App.css';

import AutoSlideshow from './components/Slideshow/AutoSlideshow';

class App extends Component {
  render() {
    return (
      <div>
          <div className="banner">
            <img className="banner__img" alt="home-banner" src="https://i.imgur.com/JlZlrLv.jpg"/>
            <div className="banner__title">KENDRA NGUYEN</div>
          </div>
          <div>
            <AutoSlideshow title={"ROOM"} subtitle={"MAKEOVER"} interval={9000} images={["https://i.imgur.com/gLQejaA.jpg", "https://i.imgur.com/UfYuYbO.jpg"]} rightIcon={"https://i.imgur.com/iqzjxvY.png"}/>
          </div>
      </div>
    );
  }
}

 export default App;
