import React from 'react';

import About from '../../pages/About/About'

import * as constants from '../../constants/constants';

export default () => {
    return (
        <div>
            <About pages={constants.PAGES} logo={constants.LOGO} creator={constants.CREATOR} copyrightName={constants.COPYRIGHTNAME} year={constants.YEAR}/>
        </div>
    )
}
