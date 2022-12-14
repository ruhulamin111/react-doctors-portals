import React from 'react';
import { format } from 'date-fns';
import { useState } from 'react';
import { useEffect } from 'react';
import AppointItem from './AppointItem';
import BookModal from './BookModal';

const BookAppointment = ({ date }) => {
    const [services, setServices] = useState([])
    const [book, setBook] = useState(null)
    const formattedDate = format(date, 'PP')

    useEffect(() => {
        fetch(`https://vast-waters-48657.herokuapp.com/available?date=${formattedDate}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [formattedDate, services])

    return (
        <div className='w-11/12 mx-auto'>
            <p className='font-medium text-center text-2xl text-accent'>Your selected date : {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-10 '>
                {
                    services.map((service, index) => <AppointItem
                        key={index}
                        service={service}
                        setBook={setBook}
                    ></AppointItem>)
                }
                {book && <BookModal date={date} book={book} setBook={setBook}></BookModal>}
            </div>

        </div>
    );
};

export default BookAppointment;