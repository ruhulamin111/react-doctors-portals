import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LoW3nG78dkm507bwwaXMU9t4Joh5W7q19BYEvc6tL3QNU6Ur3pqx1eoNNyZPsaUthnelrwdmBK29mGMGBIO0dSx00EYKaEIyr');

const Payment = () => {
    const { id } = useParams();
    const url = `https://vast-waters-48657.herokuapp.com/bookings/${id}`
    const { data: booking, isLoading } = useQuery(['bookings', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `${localStorage.getItem('token')}`,
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Payment Method</h2>
                    <p>Service: {booking.serviceName}</p>
                    <p>Price: ${booking.price}</p>
                    <p>Email: {booking.email}</p>
                    <p>Patient: {booking.patientName}</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mt-5">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm booking={booking} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;