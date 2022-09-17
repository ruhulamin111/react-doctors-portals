import React from 'react';
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Signin = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const handleSubmit = (event) => {
        event.preventDefault()
        const email = event.target.name.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
        event.target.reset()
    }

    return (
        <div className='flex justify-center h-screen items-center'>
            <div className="card w-96 bg-base-100 shadow-xl py-4">
                <div className="card-body items-center text-center">
                    <h2 className="card-title mb-4">Sign in</h2>
                    <form onSubmit={handleSubmit} className=' space-'>
                        <label className="label">Name</label>
                        <input name='name' type="text" placeholder="name" className="input input-bordered w-full max-w-xs" required />
                        <label className="label">Password</label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered w-full max-w-xs my-2" required />
                        <input type='submit' value='Sign in' className="btn btn-accent w-full mt-4"></input>
                    </form>
                    <p className='pt-2'>New to Doctors Portals? <Link className='text-secondary' to='/signup'>Create an account</Link></p>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline w-full" onClick={() => signInWithGoogle()} >Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Signin;