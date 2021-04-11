import React from 'react';
import chair from '../../../images/chair.png'

const HeaderMain = () => {
    return (
        <div className="container">
            <main style={{height:'600px'}} className="row d-flex align-items-center justify-content-between">
                <div className="col-md-4 offset-md-1">
                    <h1 style={{color:'#3A4256'}} className="text-capitalize">your new smile starts here</h1>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda magni aspernatur mollitia, accusamus sed obcaecati.</p>
                    <button style={{backgroundColor:'#1CC7C1',borderColor:'#1CC7C1',color:'#fff'}} className="btn">GET APPOINTMENT</button>
                </div>
                <div className="col-md-6">
                    <img src={chair} alt="" className="img-fluid"/>
                </div>
            </main>
        </div>
    );
};

export default HeaderMain;