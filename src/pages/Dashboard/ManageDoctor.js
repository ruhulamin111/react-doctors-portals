import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const ManageDoctor = () => {
    const { data: doctors, isLoading } = useQuery('doctors', () => fetch('http://localhost:5000/doctors', {
        headers: {
            'authorization': `${localStorage.getItem('token')}`,
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1>manage doctor {doctors.length}</h1>
        </div>
    );
};

export default ManageDoctor;