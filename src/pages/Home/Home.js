import React from 'react';
import Banner from './Banner';
import Doctor from './Doctor';
import Highlights from './Highlights';
import Information from './Information';
import Special from './Special';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Information></Information>
            <Highlights></Highlights>
            <Special></Special>
            <Doctor></Doctor>

        </div>
    );
};

export default Home;