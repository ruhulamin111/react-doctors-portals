import React from 'react';
import { format } from 'date-fns';
import { useState } from 'react';
import { useEffect } from 'react';
import AppointItem from './AppointItem';

const BookAppointment = ({ date }) => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='w-11/12 mx-auto'>
            <p className='font-medium text-center text-2xl text-accent'>Your selected date : {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-10 '>
                {
                    services.map((service, index) => <AppointItem
                        key={index}
                        service={service}
                    ></AppointItem>)
                }

            </div>

        </div>
    );
};

export default BookAppointment;