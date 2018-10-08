import React from 'react';

import Slideshow from '../../components/Slideshow/Slideshow';
import Slider from '../../components/Slider/Slider';
import {default as Banner} from '../../components/Banner/Banner';
import {default as Footer} from '../../components/Footer/Footer';

import './home.css'

export default (props) => {
    const {pages, logo, creator, copyrightName, year, sliders} = props;

    const sliderItems = sliders.map((slider) => {
        return <Slider tileData={slider.tileData} title={slider.title}/>
    })
    return (
        <div>
            <Banner image="https://i.imgur.com/JlZlrLv.jpg" title='KENDRA NGUYEN'/>
            <div className="home__body">
                <Slideshow title={"ROOM"} subtitle={"MAKEOVER"} interval={7000} images={["https://i.imgur.com/gLQejaA.jpg", "https://i.imgur.com/UfYuYbO.jpg"]} rightIcon={"https://i.imgur.com/iqzjxvY.png"}/>
                <div className='title'>MAKE DIYS.REPEAT.</div>
                <div className='text'>
                    We build DIY furniture and decor because we believe in saving money, 
                    being able to express creativity and taking advantage of customizable 
                    builds that suit anyone’s needs!
                </div>
                <div style={{display: 'flex'}}> 
                    {sliderItems}
                </div>
            </div>
            <Footer pages={pages} logo={logo} creator={creator} copyrightName={copyrightName} year={year}/>
        </div>
    )
}
