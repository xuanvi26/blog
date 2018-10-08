import React from 'react';

import About from '../../pages/About/About'

import { pages } from '../../constants/contants';

export default () => {
    return (
        <div>
            <About pages={pages} />
        </div>
    )
}
