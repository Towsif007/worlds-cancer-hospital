import React from 'react';
import banner from '../../../images/Banner/healthcare1.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="my-5">
            <h1 className="heading text-warning bg-dark p-2">Worlds Best Cancer Hospital</h1>
            <img src={banner} class="img-fluid" alt="..."/>
        </div>
    );
};

export default Banner;