import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faMapMarkerAlt,faPhone } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {
    const infoData = [
        {
            title: 'Opening Hour',
            description: 'We are open 24/7 days',
            icon: faClock,
            backgroundColor:'primary'
        },
        {
            title: 'Visit Our Location',
            description: '+15737368367',
            icon: faMapMarkerAlt,
            backgroundColor:'dark'
        },
        {
            title: 'Call us now',
            description: 'We are open 24/7 days',
            icon: faPhone,
            backgroundColor:'primary'
        }    
    ]
    return (
       <div className="d-flex justify-content-center">
            <section className="w-75 row">
                {
                    infoData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </section>
       </div>
    );
};

export default BusinessInfo;