import React from 'react';

import {default as Banner} from '../../components/Banner/Banner';
import {default as Footer} from '../../components/Footer/Footer';
import '../../App.css'

export default (props) => {
    const {pages, logo, creator, copyrightName, year} = props;
    return (
        <div>
            <Banner image="https://i.imgur.com/JlZlrLv.jpg" title='PRIVACY POLICY'/>
            <div className='subtitle'>WE RESPECT YOUR PRIVACY.</div>
            <p className='text'>
                We are committed to protecting your privacy. For us, the protection 
                not only of personal but of all data that flows through our platform is the 
                top priority. As part of this effort, we process personal data in accordance 
                with the EU’s General Data Protection Regulation (“GDPR”), and in accordance 
                with the data protection regulations applicable to our website.
            </p>
            <Footer pages={pages} logo={logo} creator={creator} copyrightName={copyrightName} year={year}/>
        </div>
    )
}
