import React from 'react';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useEffect } from 'react';

const CheckoutForm = ({ booking }) => {
    const { price } = booking;
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'authorization': `${localStorage.getItem('token')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        }).then(res => res.json()).then(data => {
            if (data?.clientSecret) {
                setClientSecret(data.clientSecret)
            }
        })
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
        if (error) {
            setCardError(error?.message || '')
        }
    };

    return (
        <>

            <form onSubmit={handleSubmit}>
                <CardElement />
                <button className='btn btn-sm mt-5' type="submit" disabled={!stripe || !elements || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p>{cardError}</p>
            }
        </>
    );
};

export default CheckoutForm;