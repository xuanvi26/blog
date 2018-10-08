import React from 'react';

import Contact from '../../pages/Contact/Contact'

import { pages } from '../../constants/contants';

export default () => {
    return (
        <div>
            <Contact pages={pages} />
        </div>
    )
}
