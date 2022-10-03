import React from 'react';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookModal = ({ date, book, setBook }) => {
    const [user] = useAuthState(auth)
    const handleSubmit = (event) => {
        event.preventDefault()
        const booking = {
            date: format(date, 'PP'),
            slot: event.target.slot.value,
            serviceName: book.name,
            bookingId: book._id,
            price: book.price,
            patientName: event.target.name.value,
            phone: event.target.phone.value,
            email: event.target.email.value
        }
        fetch('https://vast-waters-48657.herokuapp.com/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast('Your appintment is confirm for booked')
                } else {
                    toast.error('You have already booking an appointment')
                }
                setBook(null)
            })
    }

    return (
        <div>
            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="book-modal" className="btn btn-md btn-circle absolute right-4 top-4">✕</label>
                    <h3 className="font-bold text-lg py-4 text-center">{book.name}</h3>
                    <form onSubmit={handleSubmit} className=' flex flex-col items-center gap-4'>
                        <input type="text" name='date' value={format(date, 'PP')} readOnly className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {book.slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)}
                        </select>
                        <input name='name' type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" required />
                        <input name='phone' type="number" placeholder="Phone" className="input input-bordered w-full max-w-xs" required />
                        <input name='email' type="email" value={user.email} readOnly className="input input-bordered w-full max-w-xs" required />
                        <input name='price' type="number" value={book.price} readOnly className="input input-bordered w-full max-w-xs" required />
                        <input type="submit" value="Submit" className="input input-bordered w-full max-w-xs btn btn-primary" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookModal;