import React from 'react';
import featured from '../../../images/featured.png'

const FeaturedServices = () => {
    return (
            <div style={{marginBottom:'200px'}} className="container pt-5">
                <div style={{height: '500px'}}  className="row d-flex align-items-center justify-content-center mt-4">
                    <div className="col-md-6">
                        <img style={{height: '500px'}} className="img-fluid offset-4" src={featured} alt=""/>
                    </div>
                    <div className="col-md-5">
                        <h1 style={{color: '#3A4256'}}>Exceptional Dental Care, on Your Terms</h1>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, odio libero, nesciunt, aliquam repellat officia dolorem temporibus vero porro autem sunt voluptas et fugit. Aliquam, quisquam! Esse, cupiditate nobis iste quod eum officia velit asperiores soluta dicta praesentium distinctio architecto odio. Sed possimus fugiat a ipsa eaque voluptatibus earum facere.</p>
                        <button style={{backgroundColor:'#1CC7C1',borderColor:'#1CC7C1',color:'#fff'}} className="btn">Learn More</button>
                    </div>
                </div>
            </div>
    );
};

export default FeaturedServices;