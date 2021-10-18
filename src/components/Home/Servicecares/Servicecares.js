import React, { useEffect, useState } from 'react';
import './Servicecares.css'
import Servicecare from './../Servicecare/Servicecare';

const Servicecares = () => {
    const [servicecares, setServicecares] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServicecares(data.doctors));
    }, [])


    return (
        <div>
            <h1>Our Services For You</h1>

            <div className="servicecares-container">
                {
                    servicecares.map(servicecare => <Servicecare
                        key={servicecare.id}
                        servicecare={servicecare}
                    ></Servicecare>)
                }
            </div>

        </div>
    );
};

export default Servicecares;