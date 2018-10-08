import React from 'react';

import {default as Banner} from '../../components/Banner/Banner';
import {default as Footer} from '../../components/Footer/Footer';

export default ({pages}) => {
    return (
        <div>
            <Banner image="https://i.imgur.com/JlZlrLv.jpg" title='PRIVACY POLICY'/>
            <Footer pages={pages}/>
        </div>
    )
}
