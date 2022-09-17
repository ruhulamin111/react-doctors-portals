import React from 'react';
import { format } from 'date-fns';

const BookModal = ({ date, book, setBook }) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const slot = event.target.slot.value;
        const name = event.target.name.value;
        const phone = event.target.phone.value;
        const email = event.target.email.value;
        const bookitem = book.name;
        setBook(null)
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
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" required />
                        <input type="submit" value="Submit" className="input input-bordered w-full max-w-xs btn btn-primary" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookModal;