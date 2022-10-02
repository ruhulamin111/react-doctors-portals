import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams()


    return (
        <div>
            <h1>hello</h1>
            <p>{id}</p>

        </div>
    );
};

export default Payment;