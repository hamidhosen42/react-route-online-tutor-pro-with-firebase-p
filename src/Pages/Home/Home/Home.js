import React from 'react';
import Reviews from '../../Reviews/Reviews/Reviews';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
        </>
    );
};

export default Home;