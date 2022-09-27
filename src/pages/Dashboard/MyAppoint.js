import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppoint = () => {
    const [user] = useAuthState(auth)
    const [appointment, setAppointment] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/booking?email=${user.email}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [user.email, user])
    console.log(appointment);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Slot</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointment.map((item, index) =>
                                <tr key={index}>
                                    <td>{item.patientName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.serviceName}</td>
                                    <td>{item.date}</td>
                                    <td>{item.slot}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoint;