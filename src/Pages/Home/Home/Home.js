import React from 'react';
import Login from '../../Login/Login';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Servces/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;