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
                {
                    link.link1 && 
                    <li>
                        <Link to='/'>{link.link1}</Link>
                    </li>
                }
                {
                    link.link2 && 
                    <li>
                        <Link to='/'>{link.link2}</Link>
                    </li>
                }
                {
                    link.link3 && 
                    <li>
                        <Link to='/'>{link.link3}</Link>
                    </li>
                }
                {
                    link.link4 && 
                    <li>
                        <Link to='/'>{link.link4}</Link>
                    </li>
                }
                {
                    link.link5 && 
                    <li>
                        <Link to='/'>{link.link5}</Link>
                    </li>
                }
                {
                    link.link6 &&
                    <li>
                        <Link to='/'>{link.link6}</Link>
                    </li>
                }
                {
                    link.link7 &&
                    <li>
                        <Link to='/'>{link.link7}</Link>
                    </li>
                }
                {
                    link.link8 &&
                    <li>
                        <Link to='/'>{link.link8}</Link>
                    </li>
                }
            </ul>
            {
                link.fb &&
                <Link to='/'>
                    <FontAwesomeIcon icon={link.fb} className='icon' />
                </Link>
            }
            {
                link.google &&
                <Link to="/">
                    <FontAwesomeIcon icon={link.google} className='icon' />
                </Link>
            }
            {
                link.twitter &&
                <Link to="/">
                    <FontAwesomeIcon icon={link.twitter} className='icon' />
                </Link>
            }
            {
                link.callText && <p className="text-secondary mt-3 text-capitalize">{link.callText}</p>
            }
            {
                link.phone && <p style={{backgroundColor:'#1CC7C1',borderColor:'#1CC7C1',color:'#fff'}} className="btn">{link.phone}</p>
            }
        </div>
    );
};

export default FooterLink;