import React from 'react';
import { useForm } from 'react-hook-form';
import './ContactUs.css'

const ContactUs = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="contact_us_form">
            <div className="container ">
                <h5 className="text-uppercase text-center" style={{color:'#1cc7c1'}}>contact us</h5>
                <h1 className="text-center text-white text-capitalize mb-4">Always connect with us</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input placeholder="Enter Your Email*" {...register("email", { required: true })} />
                    {errors.email && <small>This field is required</small>}

                    <input placeholder="Enter Your Subject*" {...register("subject", { required: true })} />
                    {errors.subject && <small>This field is required</small>}

                    <textarea placeholder="Enter Your Message*" {...register("message", { required: true })}></textarea>
                    {errors.message && <small>This field is required</small>}
                    
                    <input className="input_btn" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default ContactUs;