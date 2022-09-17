import React from 'react';
import Banner from './Banner';
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

        </div>
    );
};

export default Home;