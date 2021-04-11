import React from 'react';
import { Link } from 'react-router-dom';
import './FooterLink.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const FooterLink = ({link}) => {
    return (
        <div className="col-md-3 text-left footer">
            {
                link.title ? <h5 style={{color: '#1CC7C1'}}>{link.title}</h5> : <div style={{height: '35px'}}></div>
            }
            <ul className="footerLink">
                <li>
                    <Link to='/'>{link.link1}</Link>
                </li>
                <li>
                    <Link to='/'>{link.link2}</Link>
                </li>
                <li>
                    <Link to='/'>{link.link3}</Link>
                </li>
                <li>
                    <Link to='/'>{link.link4}</Link>
                </li>
                <li>
                    <Link to='/'>{link.link5}</Link>
                </li>
                <li>
                    <Link to='/'>{link.link6}</Link>
                </li>
                <li>
                    <Link to='/'>{link.link7}</Link>
                </li>
                <li>
                    <Link to='/'>{link.link8}</Link>
                </li>
            </ul>
            <Link to='/'>
                <FontAwesomeIcon icon={link.fb} className='icon' />
            </Link>
            <Link to="/">
                <FontAwesomeIcon icon={link.google} className='icon' />
            </Link>
            <Link to="/">
                <FontAwesomeIcon icon={link.twitter} className='icon' />
            </Link>
            <p className="text-secondary mt-3 text-capitalize">{link.callText}</p>
            {
                link.phone && <p style={{backgroundColor:'#1CC7C1',borderColor:'#1CC7C1',color:'#fff'}} className="btn">{link.phone}</p>
            }
        </div>
    );
};

export default FooterLink;