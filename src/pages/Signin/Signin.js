import React from 'react';
import { Link } from 'react-router-dom';


const Signin = () => {
    return (
        <div className='flex justify-center h-screen items-center'>
            <div className="card w-96 bg-base-100 shadow-xl py-4">
                <div className="card-body items-center text-center">
                    <h2 className="card-title mb-4">Sign in</h2>
                    <form className=' space-'>
                        <label className="label">Name</label>
                        <input type="text" placeholder="name" className="input input-bordered w-full max-w-xs" />
                        <label className="label">Password</label>
                        <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs my-2" />
                        <input type='submit' value='Sign in' className="btn btn-accent w-full mt-4"></input>
                    </form>
                    <p className='pt-2'>New to Doctors Portals? <Link className='text-secondary' to='/signup'>Create an account</Link></p>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline w-full">Continue with google</button>




                </div>
            </div>
        </div>
    );
};

export default Signin;