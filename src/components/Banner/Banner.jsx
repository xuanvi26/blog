import React from 'react';

import './banner.css';

export default (props) => {
    const {title, image} = props;
    return (
        <div className="banner">
            <img className="banner__img" alt="banner" src={image} />
            <div className="banner__title">{title}</div>
        </div>
    )
}
