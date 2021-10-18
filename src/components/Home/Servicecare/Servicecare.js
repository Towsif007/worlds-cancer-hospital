import React from 'react';
import { Link } from 'react-router-dom';
import './Servicecare.css'

const Servicecare = ({servicecare}) => {

    const {id , name, description, img} = servicecare;

    return (
        <div>
            <div className="card servicecare-card mb-5 mx-5">
        <img src={img} class="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Name: {name}</h5>
            <p className="card-text fs-3">Details: {description}</p>
            <Link to="#" clasName="btn btn-primary">
                <button>Details</button>
            </Link>
        </div>
        </div>
        </div>
    );
};

export default Servicecare;