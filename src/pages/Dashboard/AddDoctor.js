import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddDoctor = () => {
    const { data: service, isLoading } = useQuery('service', () => fetch('https://vast-waters-48657.herokuapp.com/services').then(res => res.json()));

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imagekey = '79c13bff4cf174d3aee764506ad7de92';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imagekey}`
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        service: data.service,
                        img: img,
                    }
                    fetch('https://vast-waters-48657.herokuapp.com/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Successfully added')
                                reset()
                            } else {
                                toast.error('Something else')
                            }
                        })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl py-4">
                <div className="card-body items-center text-center">
                    <h2 className="card-title mb-4">Add a doctor</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Name </span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered w-full "
                                {...register("name", {
                                    required: { value: true, message: 'Name is required' }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: { value: true, message: 'Email is required' }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Service</span>
                            </label>
                            <select className="input input-bordered w-full max-w-xs"
                                {...register("service", {
                                    required: { value: true, message: 'File  is required' }
                                })}
                            >
                                {service.map((item, index) => <option
                                    key={index}
                                    value={item.name}
                                >{item.name}</option>)}
                            </select>
                            <label className="label">
                                {errors.service?.type === 'required' && <span className="label-text-alt">{errors.service.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="file" className="input input-bordered w-full max-w-xs"
                                {...register("image", {
                                    required: { value: true, message: 'File  is required' }
                                })}
                            />
                            <label className="label">
                                {errors.image?.type === 'required' && <span className="label-text-alt">{errors.image.message}</span>}
                            </label>
                        </div>

                        <input type='submit' value='Add' className="btn btn-accent w-full mt-4"></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;