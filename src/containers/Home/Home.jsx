import React from 'react';

import Home from '../../pages/Home/Home'

import * as constants from '../../constants/constants';
import tileData from './Sliders/tileData';

export default () => {
    return (
        <div>
            <Home sliders={tileData} pages={constants.PAGES} logo={constants.LOGO} creator={constants.CREATOR} copyrightName={constants.COPYRIGHTNAME} year={constants.YEAR} />
        </div>
    )
}
