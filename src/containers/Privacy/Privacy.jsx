import React from 'react';

import Privacy from '../../pages/Privacy/Privacy'

import * as constants from '../../constants/constants';

export default () => {
    return (
        <div>
            <Privacy pages={constants.PAGES} logo={constants.LOGO} creator={constants.CREATOR} copyrightName={constants.COPYRIGHTNAME} year={constants.YEAR} />
        </div>
    )
}
