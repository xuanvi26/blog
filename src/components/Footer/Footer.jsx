import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import './footer.css';

const Footer = (props) => {
    const {pages} = props;
    const linkItems = pages.map((page) => {
        return <button onClick={() => props.changePage(page.redirectLink)}>{page.pageName}</button>;
    })

    return (
        <div className="footer">
            {linkItems}
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: (redirectLink) => push(redirectLink),
}, dispatch);

export default connect(() => {}, mapDispatchToProps)(Footer);
