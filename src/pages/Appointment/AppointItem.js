import React from 'react';

const AppointItem = ({ service }) => {

    return (
        <div>
            <h1 className='text-2xl font-semibold mb-5 '>{service.name}</h1>
            <h1 className='mb-5 font-medium'>Available time : </h1>
            <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary ">Book now</button>

        </div>
    );
};

export default AppointItem;