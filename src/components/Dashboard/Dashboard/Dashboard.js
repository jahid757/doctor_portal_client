import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
const containerStyle = {
    height: '100%',
    backgroundColor:'#F4FDFB'
}

const Dashboard = () => {
    const [selectedDate,setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const handelDateChange = date => {
        setSelectedDate(date)
    }
        useEffect(() => {
            fetch('https://agile-thicket-24876.herokuapp.com/appointmentByDate',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({date:selectedDate, email:loggedInUser.email})
            })
            .then(response => response.json())
            .then(data => {
                setAppointments(data)
                console.log(data);
            })
        },[selectedDate,loggedInUser.email])

    return (
        <div style={containerStyle} className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-5">
            <Calendar
                        onChange={handelDateChange}
                        value={new Date()}
                    />
            </div>
            <div className="col-md-5">
                <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
            </div>
        </div>
    );
};

export default Dashboard;