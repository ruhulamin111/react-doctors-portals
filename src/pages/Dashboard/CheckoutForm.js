import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useEffect } from 'react';

const CheckoutForm = ({ booking }) => {
    const { price, email, patientName } = booking;
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [transectionId, setTransectionId] = useState('')
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

        const card = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setCardError(error?.message || '')
        }

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: email,
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message || '')

        } else {
            console.log(paymentMethod)
            setSuccess('Congrats! your payment done.')
            setTransectionId(paymentIntent.id)
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
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <p className='text-green-500'>{success}, {transectionId}</p>
            }
        </>
    );
};

export default CheckoutForm;