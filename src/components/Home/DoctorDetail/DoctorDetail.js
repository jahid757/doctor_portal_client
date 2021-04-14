import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const DoctorDetail = ({doctor,icon}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{ height:"200px"}} className="img-fluid" src={`data:image/jpeg;base64,${doctor.image.img}`} alt=""/>
            <h3 style={{color: '#3A4256'}}>{doctor.name}</h3>
            <p><FontAwesomeIcon style={{color: '#1cc7c1'}} icon={icon} /> {doctor.phone}</p>
        </div>
    );
};

export default DoctorDetail;