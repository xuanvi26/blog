import React from 'react';

import Home from '../../pages/Home/Home'

import { pages } from '../../constants/contants';

export default () => {
    return (
        <div>
            <Home pages={pages} />
        </div>
    )
}
