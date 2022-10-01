import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const User = () => {
    const { data: user, isLoading } = useQuery('user', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            'authorization': `${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((item, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.email}</td>
                                    <td><button className="btn btn-xs">Admin</button></td>
                                    <td><button className="btn btn-xs">Remove</button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default User;