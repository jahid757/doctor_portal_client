import React from 'react';


const BlogNews = ({blog}) => {
    return (
        <div className="col-md-4">
            <div style={{textAlign: 'start'}} className="card p-3 shadow">
                <div className="card-body">
                    <div className="user d-flex align-items-center my-2">
                        <img style={{width:'60px'}} src={blog.profile} alt=""/>
                        <div className="ms-3">
                            <h5 style={{color: '#1CC7C1'}}>{blog.name}</h5>
                            <small className="text-secondary fw-bold">{blog.date}</small>
                        </div>
                    </div>
                    <h4 style={{color:'#3A4256'}}>{blog.title}</h4>
                    <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, laborum dolor. Laudantium minima distinctio iure, magni ipsum dolore, officia inventore, provident ratione esse dolores doloremque expedita! Quasi quaerat quis ab!</p>
                </div>
            </div>
        </div>
    );
};

export default BlogNews;