import React from 'react';

import Slideshow from '../../components/Slideshow/Slideshow';
import Slider from '../../components/Slider/Slider';
import {default as Banner} from '../../components/Banner/Banner';
import {default as Footer} from '../../components/Footer/Footer';

export default (props) => {
    const {pages, logo, creator, copyrightName, year, sliders} = props;

    const sliderItems = sliders.map((tileData) => {
        return <Slider tileData={tileData} />
    })
    return (
        <div>
            <Banner image="https://i.imgur.com/JlZlrLv.jpg" title='KENDRA NGUYEN'/>
            <Slideshow title={"ROOM"} subtitle={"MAKEOVER"} interval={7000} images={["https://i.imgur.com/gLQejaA.jpg", "https://i.imgur.com/UfYuYbO.jpg"]} rightIcon={"https://i.imgur.com/iqzjxvY.png"}/>
            <div style={{display: 'flex'}}> 
                {sliderItems}
            </div>
            <Footer pages={pages} logo={logo} creator={creator} copyrightName={copyrightName} year={year}/>
        </div>
    )
}
