import React from 'react';

import {default as Banner} from '../../components/Banner/Banner';
import {default as Footer} from '../../components/Footer/Footer';

export default (props) => {
    const {pages, logo, creator, copyrightName, year} = props;
    return (
        <div>
            <Banner image="https://i.imgur.com/JlZlrLv.jpg" title='ABOUT US'/>
            <Footer pages={pages} logo={logo} creator={creator} copyrightName={copyrightName} year={year}/>
        </div>
    )
}
