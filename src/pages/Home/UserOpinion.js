import React from 'react';

const UserOpinion = ({ comment }) => {

    return (
        <div>
            <p>{comment.comments}</p>
            <div className='flex items-center justify-start gap-5 my-4'>
                <div>
                    <div className="avatar">
                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={comment.img} alt='' />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='font-medium text-lg '>{comment.name}</h1>
                    <h1 className='font-medium text-lg py-1'>{comment.address}</h1>

                </div>
            </div>

        </div>
    );
};

export default UserOpinion;