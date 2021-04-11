import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css'

const InfoCard = ({info}) => {
    return (
        <div className="col-md-4 text-white info-card">
            <div className={`justify-content-center info-container rounded d-flex info-${info.backgroundColor}`}>
                <div>
                    <FontAwesomeIcon className="info-icon" icon={info.icon} />
                </div>
                <div className="ms-3">
                    <h6>{info.title}</h6>
                    <p>{info.description}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;