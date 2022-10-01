import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const MyAppoint = () => {
    const [user] = useAuthState(auth)
    const [appointment, setAppointment] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`http://localhost:5000/booking?email=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    navigate('/home')
                }
                return res.json()
            })
            .then(data => setAppointment(data))
    }, [user.email, user, navigate])

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
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
                                    <td>{index + 1}</td>
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