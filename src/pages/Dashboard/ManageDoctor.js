import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

const ManageDoctor = () => {
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctors', {
        headers: {
            'authorization': `${localStorage.getItem('token')}`,
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    const deleteDoctor = (item) => {
        fetch(`http://localhost:5000/doctors/${item.email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `${localStorage.getItem('token')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('Remove doctor success')
                    refetch()
                }
            })

    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Avatar</th>
                            <th>Email</th>
                            <th>Specilization</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((item, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td><img src={item.img} className="h-16 w-16 rounded-full object-cover" alt="" /></td>
                                    <td>{item.email}</td>
                                    <td>{item.service}</td>
                                    <td><button onClick={() => deleteDoctor(item)} className="btn btn-xs btn-error">Remove</button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctor;