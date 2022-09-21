import React from 'react';
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Loading/Loading';

const Signin = () => {
    const [signInWithGoogle, gUser, gLoadding] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    if (gLoadding || loading) {
        return <Loading></Loading>
    }

    const onSubmit = (data) => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     const email = event.target.email.value;
    //     const password = event.target.password.value;
    //     signInWithEmailAndPassword(email, password)
    //     event.target.reset()
    // }

    return (
        <div className='flex justify-center h-screen items-center'>
            <div className="card w-96 bg-base-100 shadow-xl py-4">
                <div className="card-body items-center text-center">
                    <h2 className="card-title mb-4">Sign in</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className=' w-full'>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Email </span>
                            </label>
                            <input type="text" placeholder="Email" className="input input-bordered w-full "
                                {...register("email", {
                                    required: { value: true, message: 'Email is required' },
                                    pattern: { value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, message: 'Provide a valid email' }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: { value: true, message: 'Password is required' },
                                    pattern: { value: /(?=.*[!@#$%^&*])/, message: 'Password is at least one speacial character' }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text-alt">{errors.password.message}</span>}
                            </label>
                        </div>

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