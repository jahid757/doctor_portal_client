import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {

    const [selectedDate,setSelectedDate] = useState(new Date(new Date().setHours(0,0,0,0)));

     const handelDateChange = date => {
         console.log(date);
        setSelectedDate(date)
        console.log(selectedDate);
     }

    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handelDateChange={handelDateChange}></AppointmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
           <Footer></Footer>
        </div>
    );
};

export default Appointment;