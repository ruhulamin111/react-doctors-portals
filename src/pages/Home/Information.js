import React from 'react';
import watch from '../../assets/icons/clock.svg';
import location from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Information = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 hero-content mx-auto mb-10'>
            <div className="hero-content flex-col lg:flex-row bg-primary rounded-xl">
                <img src={location} className="max-w-sm rounded-lg " alt='' />
                <div>
                    <h1 className="text-xl font-bold">Visit our location</h1>
                    <p className="py-6">Brooklyn, NY 10036, United States</p>
                </div>
            </div>

            <div className="hero-content flex-col lg:flex-row bg-primary rounded-xl">
                <img src={watch} className="max-w-sm rounded-lg " alt='' />
                <div>
                    <h1 className="text-xl font-bold">Opening Hours</h1>
                    <p className="py-6">24 hour services</p>
                </div>
            </div>

            <div className="hero-content flex-col lg:flex-row bg-primary rounded-xl">
                <img src={phone} className="max-w-sm  " alt='' />
                <div>
                    <h1 className="text-xl font-bold">Contact us now</h1>
                    <p className="py-6">+000 123 456789</p>
                </div>
            </div>

        </div>
    );
};

export default Information;