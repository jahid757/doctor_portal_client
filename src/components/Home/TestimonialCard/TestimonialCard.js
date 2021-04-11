import React from 'react';

const TestimonialCard = ({testimonial}) => {
    return (
        <div className="col-md-4">
            <div style={{textAlign: 'start'}} className="card shadow">
                <div className="card-body">
                    <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, perferendis, quos et distinctio tempore architecto ratione delectus sunt temporibus assumenda ipsam consectetur at vel asperiores soluta consequatur. Laborum, sit error!</p>
                    <div className="user d-flex align-items-center">
                        <img style={{width:'60px'}} src={testimonial.profile} alt=""/>
                        <div className="ms-3">
                            <h5 style={{color: '#1CC7C1'}}>{testimonial.name}</h5>
                            <small className="text-secondary fw-bold">{testimonial.country}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;