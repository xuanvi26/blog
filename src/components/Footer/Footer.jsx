import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import './footer.css';

const Footer = (props) => {
    const {pages} = props;
    const linkItems = pages.map((page) => {
        return <div className='footer__links' onClick={() => props.changePage(page.redirectLink)}>{page.pageName}</div>;
    })

    return (
        <div className="footer">
            <div className='display-column'>
                {linkItems}
            </div>
            <div className='display-column'>
                <div onClick={() => props.changePage('/')} className='footer__logo'>{props.logo}</div>
            </div>
            <div className='display-column'> 
                <div className='footer__creator'>MADE BY {props.creator}</div>
                <div className='footer__copyrightName'>&copy; {props.copyrightName} {props.year}</div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: (redirectLink) => push(redirectLink),
}, dispatch);

export default connect(() => {}, mapDispatchToProps)(Footer);
