import React from 'react';
import { format } from 'date-fns';

const BookModal = ({ book, date }) => {

    return (
        <div>
            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="book-modal" className="btn btn-md btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg py-4 text-center">{book.name}</h3>
                    <form className=' flex flex-col items-center gap-4'>
                        <input type="text" value={format(date, 'PP')} readOnly className="input input-bordered w-full max-w-xs" />
                        <select className="select select-bordered w-full max-w-xs">
                            {book.slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)}
                        </select>
                        <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                        <input type="number" placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="input input-bordered w-full max-w-xs btn btn-primary" />
                    </form>


                </div>
            </div>
        </div>
    );
};

export default BookModal;