import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const DoctorDetail = ({doctor}) => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid" src={doctor.img} alt=""/>
            <h3 style={{color: '#3A4256'}}>{doctor.name}</h3>
            <p><FontAwesomeIcon style={{color: '#1cc7c1'}} icon={doctor.icon} /> {doctor.phone}</p>
        </div>
    );
};

export default DoctorDetail;