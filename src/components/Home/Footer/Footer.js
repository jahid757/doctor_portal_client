import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const footerLink = [
    {
        title: '',
        link1:'emergency dental care',
        link2:'check up',
        link3:'treatment of personal diseases',
        link4:'tooth extraction',
        link5:'check up'
    },
    {
        title: 'Services',
        link1:'emergency dental care',
        link2:'check up',
        link3:'treatment of personal diseases',
        link4:'tooth extraction',
        link5:'check up',
        link6:'check up',
        link7:'treatment of personal diseases',
        link8:'tooth extraction',
    },
    {
        title: 'Oral Health',
        link1:'emergency dental care',
        link2:'check up',
        link3:'treatment of personal diseases',
        link4:'tooth extraction',
        link5:'check up',
        link6:'check up',
        link7:'treatment of personal diseases',
        link8:'tooth extraction',
    },
    {
        title: 'Our Address',
        link1:'new york 101010 hudson',
        link2:'yeards',
        fb:faFacebookF,
        google:faGoogle,
        twitter:faTwitter,
        callText: 'call now',
        phone: '+15737368367'
    }
]


const Footer = () => {
    return (
        <div className="footer_wrapper">
            <div className="container">
                <div className="row pb-5 pt-5">
                    {
                        footerLink.map(link => <FooterLink link={link}></FooterLink>)
                    }
                </div>
                <p className="text-secondary text-center">Copy Right {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;