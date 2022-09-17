import React from 'react';

const AppointItem = ({ service, setBook }) => {

    return (
        <div className="card shadow-lg text-primary-content">
            <div className="card-body">
                <h2 className="card-title">{service.name}</h2>
                <p>Available Space {service.slots.length}</p>
                <p>Visit 08:00 AM to 12:00 PM</p>
                <div className="card-actions justify-end">
                    <label htmlFor='book-modal'
                        disabled={service.slots.length === 0}
                        className="btn btn-primary"
                        onClick={() => setBook(service)}
                    >Buy Now</label>
                </div>
            </div>
        </div>
    );
};

export default AppointItem;