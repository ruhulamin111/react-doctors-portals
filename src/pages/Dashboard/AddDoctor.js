import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const AddDoctor = () => {

    const { data: service, isLoading, prefetch } = useQuery('service', () => fetch('http://localhost:5000/services').then(res => res.json()));

    const handleSubmit = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const service = event.target.service.value;
        const file = event.target.file.value;
        console.log(name, email, service, file);
        event.target.reset();
    }
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl py-4">
                <div className="card-body items-center text-center">
                    <h2 className="card-title mb-4">Add a doctor</h2>
                    <form onSubmit={handleSubmit} className='w-full'>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Name </span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered w-full " required name='name' />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" required name='email' />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Service </span>
                            </label>
                            <select name='service' className="select select-bordered w-full max-w-xs">
                                {service.map((item, index) => <option
                                    key={index}
                                    value={item.name}
                                >{item.name}</option>)}
                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="file" className="input input-bordered w-full max-w-xs" required name='file' />
                        </div>

                        <input type='submit' value='Add' className="btn btn-accent w-full mt-4"></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;