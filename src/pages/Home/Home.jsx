import React from 'react';

import AutoSlideshow from '../../components/Slideshow/AutoSlideshow';
import {default as Banner} from '../../components/Banner/Banner';
import {default as Footer} from '../../components/Footer/Footer';

export default (props) => {
    const {pages, logo, creator, copyrightName, year} = props;
    return (
        <div>
            <Banner image="https://i.imgur.com/JlZlrLv.jpg" title='KENDRA NGUYEN'/>
            <AutoSlideshow title={"ROOM"} subtitle={"MAKEOVER"} interval={7000} images={["https://i.imgur.com/gLQejaA.jpg", "https://i.imgur.com/UfYuYbO.jpg"]} rightIcon={"https://i.imgur.com/iqzjxvY.png"}/>
            <Footer pages={pages} logo={logo} creator={creator} copyrightName={copyrightName} year={year}/>
        </div>
    )
}
