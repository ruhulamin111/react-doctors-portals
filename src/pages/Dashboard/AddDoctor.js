import React from 'react';

const AddDoctor = () => {


    return (
        <div className='flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl py-4">
                <div className="card-body items-center text-center">
                    <h2 className="card-title mb-4">Add a doctor</h2>
                    <form className='w-full'>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Name </span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Service </span>
                            </label>
                            <input type="text" placeholder="Service" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <input type='submit' value='Add' className="btn btn-accent w-full mt-4"></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;