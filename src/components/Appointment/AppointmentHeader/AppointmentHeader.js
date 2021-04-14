import React from 'react';
import Calendar from 'react-calendar';
import chair from '../../../images/chair.png';
import 'react-calendar/dist/Calendar.css';
import './AppointmentHeader.css'

const AppointmentHeader = ({handelDateChange}) => {

    return (
        <div className="container">
            <main style={{height:'600px'}} className="row d-flex align-items-center justify-content-between">
                <div className="col-md-4 offset-md-1">
                    <h1 style={{color:'#3A4256'}} className="text-capitalize mb-3">Appointment</h1>

                    <Calendar
                        onChange={handelDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-6">
                    <img src={chair} alt="" className="img-fluid"/>
                </div>
            </main>
        </div>
    );
};

export default AppointmentHeader;