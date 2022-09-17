import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png'

const DateBanner = ({ date, setDate }) => {

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

                </div>
            </div>
        </div >
    );
};

export default DateBanner;