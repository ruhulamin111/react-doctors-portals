import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/bookings/${id}`
    const { data: booking, isLoading } = useQuery(['bookings', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `${localStorage.getItem('token')}`,
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(booking);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Payment Method</h2>
                    <p>Service: {booking.serviceName}</p>
                    <p>Price: ${booking.price}</p>
                    <p>Email: {booking.email}</p>
                    <p>Patient: {booking.patientName}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;