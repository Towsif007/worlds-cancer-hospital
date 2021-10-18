import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Servicecares from '../Servicecares/Servicecares';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Servicecares></Servicecares>
            <About></About>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;