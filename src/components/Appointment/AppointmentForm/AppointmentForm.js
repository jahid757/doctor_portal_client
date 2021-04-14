import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
  Modal.setAppElement('#root')

const AppointmentForm = ({date, modalIsOpen,closeModal,appointmentOn}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        data.service = appointmentOn;
        data.date = date;
        data.created = new Date()

        fetch('https://agile-thicket-24876.herokuapp.com/addAppointment',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            if(result === true){
                closeModal()
                alert('Appointment Book Success')
            }
        })
        
    };


    return (
        <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 className="text-brand text-center">{appointmentOn}</h2>
          <small className="text-center text-secondary d-block">ON {date.toDateString()}</small>
          <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-3">
                        <input type="text" {...register("name", { required: true })}  placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group mb-3">
                        <input type="text" {...register("phone", { required: true })} placeholder="Phone Number" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <input type="text" {...register("email", { required: true })}  placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3 row">
                        <div className="col-4">

                            <select className="form-control" {...register("gender", { required: true })} >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="col-4">
                            <input {...register("age", { required: true })} className="form-control" placeholder="Your Age" type="number" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input {...register("weight", { required: true })} className="form-control"  placeholder="Weight" type="number" />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-group mb-3 text-right">
                        <button type="submit" className="btn btn-brand">Send</button>
                    </div>
            </form>
        </Modal>
        </div>
    );
};

export default AppointmentForm;