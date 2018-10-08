import React from 'react';

import Contact from '../../pages/Contact/Contact'

import * as constants from '../../constants/constants';

export default () => {
    return (
        <div>
            <Contact pages={constants.PAGES} logo={constants.LOGO} creator={constants.CREATOR} copyrightName={constants.COPYRIGHTNAME} year={constants.YEAR} />
        </div>
    )
}
