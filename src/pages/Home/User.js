import React from 'react';
import cotation from '../../assets/icons/quote.svg'
import UserOpinion from './UserOpinion';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'

const User = () => {
    const user = [
        {
            name: 'John knedy',
            address: 'California',
            comments: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, voluptates  sit amet consecte.',
            img: people1,
        },
        {
            name: 'John knedy',
            address: 'California',
            comments: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, voluptates orem ipsum dolor sit amet consectetur adipisicing elit. Repellat, voluptates.',
            img: people2,
        },
        {
            name: 'John knedy',
            address: 'California',
            comments: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, voluptates.',
            img: people3,
        }
    ]

    return (
        <div className='my-10 w-11/12 mx-auto'>
            <div className='flex justify-between '>
                <div>
                    <h2 className="font-bold text-xl text-secondary">Testimonials</h2>
                    <h2 className="font-bold text-3xl my-4">What our patents say</h2>
                </div>
                <div>
                    <img src={cotation} alt="" className='lg:w-48 w-24' />
                </div>
            </div>

            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-5 '>
                {
                    user.map((comment, index) => <UserOpinion
                        key={index}
                        comment={comment}
                    ></UserOpinion>)
                }
            </div>

        </div>
    );
};

export default User;