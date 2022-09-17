import React from 'react';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import chair from '../../assets/images/chair.png'

const DateBanner = () => {
    const [date, setDate] = useState(new Date())

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:max-w-xl max-w-sm rounded-lg shadow-xl" alt='' />
                <div className=''>
                    <DayPicker className=''
                        mode='single'
                        selected={date}
                        onSelect={setDate}
                    ></DayPicker>
                    <p className='font-medium'>Your selected date : {format(date, 'PP')}</p>
                </div>
            </div>
        </div >
    );
};

export default DateBanner;