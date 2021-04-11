import React from 'react';
import winson from '../../../images/winson.png'
import winson2 from '../../../images/winson2.png'
import winson3 from '../../../images/winson3.png'
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const testimonialData = [
    {
        profile: winson,
        name: 'Winson Herry',
        country:'Califonia'
    },
    {
        profile: winson2,
        name: 'Winson Herry',
        country:'Califonia'
    },
    {
        profile: winson3,
        name: 'Winson Herry',
        country:'Califonia'
    }
]

const Testimonial = () => {
    return (
        <div className="container mb-5 pb-5">
            <div className="title_part container">
                <h5 className="text-uppercase" style={{color: '#1CC7C1'}}>testimonial</h5>
                <h1 style={{color: '#3A4256'}}>Whats Your Patents Says</h1>
            </div>
            <div className="row pt-5">
                {
                    testimonialData.map(testimonial => <TestimonialCard testimonial={testimonial}></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default Testimonial;