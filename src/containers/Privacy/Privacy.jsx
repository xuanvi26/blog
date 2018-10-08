import React from 'react';

import Privacy from '../../pages/Privacy/Privacy'

import { pages } from '../../constants/contants';

export default () => {
    return (
        <div>
            <Privacy pages={pages} />
        </div>
    )
}
