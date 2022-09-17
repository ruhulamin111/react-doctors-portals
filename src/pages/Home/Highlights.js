import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';


const Highlights = () => {

    return (
        <div>
            <h1 className="text-4xl text-center font-bold">Services we provided</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 hero-content mx-auto mb-10 '>
                <div className="hero-content flex-col rounded-xl">
                    <img src={fluoride} className="max-w-sm rounded-lg " alt='' />
                    <div>
                        <h1 className="text-xl font-bold">Flouride Treatment</h1>
                        <p className="py-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ipsa facere, temporibus porro harum repudiandae aspernatur debitis alias vel </p>
                    </div>
                </div>

                <div className="hero-content flex-col  rounded-xl">
                    <img src={cavity} className="max-w-sm rounded-lg " alt='' />
                    <div>
                        <h1 className="text-xl font-bold">Cavity Filling </h1>
                        <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique minima quas exercitationem tenetur libero quod?</p>
                    </div>
                </div>

                <div className="hero-content flex-col  rounded-xl">
                    <img src={whitening} className="max-w-sm  " alt='' />
                    <div>
                        <h1 className="text-xl font-bold">Teeth Whitening </h1>
                        <p className="py-6">Lpsum dolor sit amet, consectetur adipisicing elit. Eius beatae cum odio incidunt recusandae vitae!</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Highlights;