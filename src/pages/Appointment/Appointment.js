import React, { useState } from 'react';
import BookAppointment from './BookAppointment';
import DateBanner from './DateBanner';

const Appointment = () => {
    const [date, setDate] = useState(new Date())

    return (
        <div>
            <DateBanner date={date} setDate={setDate}></DateBanner>
            <BookAppointment date={date}></BookAppointment>

        </div>
    );
};

export default Appointment;