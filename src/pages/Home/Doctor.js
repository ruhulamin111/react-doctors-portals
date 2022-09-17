import React from 'react';
import doctor from '../../assets/images/doctor.png'
import bgdoctor from '../../assets/images/appointment.png'

const Doctor = () => {
    return (
        <section className='my-20' style={{ background: `url(${bgdoctor})` }} >
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <img src={doctor} className="lg:max-w-lg max-w-sm rounded-lg shadow-xl mt-[-100px] mb-[-16px]" alt='' />
                    <div className='text-white'>
                        <h1 className="text-xl font-bold py-4">Specalist</h1>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </ section>
    );
};

export default Doctor;