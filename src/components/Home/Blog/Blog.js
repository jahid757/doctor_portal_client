import React from 'react';
import BlogNews from '../BlogNews/BlogNews';
import winson from '../../../images/winson.png'
import winson2 from '../../../images/winson2.png'
const blogNews = [
    {
        name: 'Dr. Caudi',
        title: '2 time of brush in a day can keep you healthy',
        profile: winson,
        date: '12 April 2020'
    },
    {
        name: 'Dr. Caudi',
        title: '2 time of brush in a day can keep you healthy',
        profile: winson2,
        date: '12 April 2020'
    },
    {
        name: 'Dr. Caudi',
        title: '2 time of brush in a day can keep you healthy',
        profile: winson,
        date: '12 April 2020'
    }
]

const Blog = () => {
    return (
        <div className="container mb-5 pb-5">
            <div className="text-center mb-5 pb-3">
                <h5 style={{color: '#1CC7C1'}} className="text-uppercase">our blog</h5>
                <h1 style={{color: '#3A4256'}}>From Our Blog News</h1>
            </div>
            <div className="row">
                {
                    blogNews.map(blog => <BlogNews blog={blog}></BlogNews>)
                }
            </div>
        </div>
    );
};

export default Blog;