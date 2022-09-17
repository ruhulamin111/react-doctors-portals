import React from 'react';

const Form = () => {

    return (
        <div className='bg-accent  py-5'>
            <h1 className="text-2xl font-bold text-center my-2 text-white">Stay connect with us</h1>
            <div className="lg:w-5/12 sm:w-full mx-auto">
                <div className="card-body">
                    <div className="form-control mt-4">
                        <input type="text" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-4">
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-4 ">
                        <textarea type="text" placeholder="your message" className="input input-bordered h-40" />
                    </div>
                    <div className="form-control mt-5">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;