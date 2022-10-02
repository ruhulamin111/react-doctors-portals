import React from 'react';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }


    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button className='btn btn-sm mt-5' type="submit" disabled={!stripe || !elements}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;