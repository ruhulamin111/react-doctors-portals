import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from "react-router-dom";
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth)

    return (
        <div className='navbar bg-primary h-20'>
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-lg">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/appointment'>Appointment</Link></li>
                        <li><Link to='/reviews'>Reviews</Link></li>
                        <li><Link to='/contactus'>Contact</Link></li>
                        {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
                        <li>{user ? <Link to='' onClick={() => signOut(auth)}>Sign Out</Link> : <Link to='/signin'>Sign in</Link>}</li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-2xl font-medium" to='/'>Doctors Portals</Link>
            </div>
            <div className="navbar-end hidden lg:flex ">
                <ul className="menu menu-horizontal p-0  ">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/appointment'>Appointment</Link></li>
                    <li><Link to='/reviews'>Reviews</Link></li>
                    <li><Link to='/contactus'>Contact </Link></li>
                    {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
                    <li>{user ? <Link to='' onClick={() => signOut(auth)}>Sign Out</Link> : <Link to='/signin'>Sign in</Link>}</li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;