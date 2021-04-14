import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking,date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    
    function closeModal(){
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5 mt-2">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p className="text-uppercase"><small>{booking.totalSpace} spaces available</small></p>
                    <button onClick={openModal} className="btn btn-brand text-uppercase">book appointment</button>
                    <AppointmentForm date={date} appointmentOn={booking.subject} closeModal={closeModal} modalIsOpen={modalIsOpen}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;