import React from 'react';

const ServicesDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height:'50px',margin:'15px 0'}} src={service.img} alt=""/>
            <h5 style={{color:'#3A4256'}}>{service.title}</h5>
            <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, ea.</p>
        </div>
    );
};

export default ServicesDetail;