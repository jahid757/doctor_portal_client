import React from 'react';
import './MakeAppointment.css'
import doctor from '../../../images/doctor.png'

const MakeAppointment = () => {
    return (
        <div className="doctor_container mt-5 mb-5">
            <div className="container">
                <div style={{height: '500px'}} className="row d-flex align-items-center">
                    <div style={{height: '500px'}} className="col-md-6">
                        <img className="img-fluid" src={doctor} alt=""/>
                    </div>
                    <div className="col-md-6">
                        <h5 style={{color: '#1CC7C1'}} className="text-uppercase">appointment</h5>
                        <h1 className="text-white">Make an Appointment Today</h1>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente animi quisquam numquam consequuntur tenetur consequatur, temporibus impedit sunt et placeat.</p>
                        <br/>
                        <button style={{backgroundColor:'#1CC7C1',borderColor:'#1CC7C1',color:'#fff'}} className="btn">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;