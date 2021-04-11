import React from 'react';
import doctor from '../../../images/doctor-sort.png'
import DoctorDetail from '../DoctorDetail/DoctorDetail';
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const doctors =[
    {
        img: doctor,
        name:'Dr. Caudi',
        icon:faPhone,
        phone: '+15737368367'
    },
    {
        img: doctor,
        name:'Dr. Caudi',
        icon:faPhone,
        phone: '+15737368367'
    },
    {
        img: doctor,
        name:'Dr. Caudi',
        icon:faPhone,
        phone: '+15737368367'
    }
]

const OurDoctor = () => {
    return (
        <div className="container mb-5 pb-5">
            <h5 style={{color:'#1cc7c1'}} className="text-center text-capitalize">our doctor</h5>
            <div className="row">
                {
                    doctors.map((doctor => <DoctorDetail doctor={doctor}></DoctorDetail>))
                }
            </div>
        </div>
    );
};

export default OurDoctor;