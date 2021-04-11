import React from 'react';
import fluried from '../../../images/fluried.png';
import cavity from '../../../images/cavity.png';
import whiten from '../../../images/teath_white.png'
import ServicesDetail from '../ServicesDetail/ServicesDetail';

const servicesData = [
    {
        title: 'Fluoride Treatment',
        img:fluried
    },
    {
        title: 'Cavity Filling',
        img:cavity
    },
    {
        title: 'Teath whitening',
        img:whiten
    }
];

const Services = () => {
    return (
            <section className="services-container pt-5">
               <div className="text-center mb-5">
                    <h4 style={{color: '#1CC7C1'}} className="text-uppercase">our services</h4>
                    <h2 style={{color: '#3A4256'}}>Services we Provide</h2>
               </div>
               <div className="d-flex justify-content-center pt-3">
                   <div className="w-75 row">
                       {
                           servicesData.map(service => <ServicesDetail service={service}></ServicesDetail>)
                       }
                   </div>
               </div>
            </section>
    );
};

export default Services;