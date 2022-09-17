import React from 'react';
import Banner from './Banner';
import Doctor from './Doctor';
import Form from './Form';
import Highlights from './Highlights';
import Information from './Information';
import Special from './Special';
import User from './User';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Information></Information>
            <Highlights></Highlights>
            <Special></Special>
            <Doctor></Doctor>
            <User></User>
            <Form></Form>

        </div>
    );
};

export default Home;