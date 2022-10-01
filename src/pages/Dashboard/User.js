import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const User = () => {
    const { data: user, isLoading } = useQuery('user', () => fetch('http://localhost:5000/user').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-xl">All User {user.length}</h2>
        </div>
    );
};

export default User;