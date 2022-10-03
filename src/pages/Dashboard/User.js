import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

const User = () => {
    const { data: user, isLoading, refetch } = useQuery('user', () => fetch('https://vast-waters-48657.herokuapp.com/user', {
        method: 'GET',
        headers: {
            'authorization': `${localStorage.getItem('token')}`
        },
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    };

    const makeAdmin = (select) => {
        fetch(`https://vast-waters-48657.herokuapp.com/user/admin/${select.email}`, {
            method: 'PUT',
            headers: {
                'authorization': `${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('You are not selected admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {

                    refetch();
                    toast.success('Successfully make an admin');
                }

            })
    };

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
                                    <td>{item.role !== 'admin' && <button onClick={() => makeAdmin(item)} className="btn btn-xs">Admin</button>}</td>
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