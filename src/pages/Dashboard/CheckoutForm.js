import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useEffect } from 'react';

const CheckoutForm = ({ booking }) => {
    const { _id, price, email, patientName } = booking;
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState('')

    useEffect(() => {
        fetch('https://vast-waters-48657.herokuapp.com/create-payment-intent', {
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
            setTransactionId(paymentIntent.id)
            const payment = {
                transactionId: paymentIntent.id,
                appointment: _id
            }
            fetch(`https://vast-waters-48657.herokuapp.com/bookings/${_id}`, {
                method: 'PATCH',
                headers: {
                    'authorization': `${localStorage.getItem('token')}`,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            }).then(res => res.json()).then(data => {
                console.log(data);
            })
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
                success && <p className='text-green-500'>{success} {transactionId}</p>
            }
        </>
    );
};

export default CheckoutForm;