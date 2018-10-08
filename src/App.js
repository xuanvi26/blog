import React, { Component } from 'react';

import './App.css';

import AutoSlideshow from './components/Slideshow/AutoSlideshow';
import {default as Banner} from './components/Banner/Banner';

class App extends Component {
  render() {
    return (
      <div>
          <Banner image="https://i.imgur.com/JlZlrLv.jpg" title='KENDRA NGUYEN'/>
          <AutoSlideshow title={"ROOM"} subtitle={"MAKEOVER"} interval={7000} images={["https://i.imgur.com/gLQejaA.jpg", "https://i.imgur.com/UfYuYbO.jpg"]} rightIcon={"https://i.imgur.com/iqzjxvY.png"}/>
      </div>
    );
  }
}

 export default App;
