import React from 'react';
import './contact.css';

export default function Contact() {
    return (
        <div>
            <h2 className='p-2'>Contact</h2>
            <form className='p-2'>
                <div className="mb-3">
                    <label htmlFor="formControlInput1" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="formControlInput1" placeholder="" />
                </div>
                <div className="mb-3">
                    <label htmlFor="formControlInput2" className="form-label">Email address:</label>
                    <input type="email" className="form-control" id="formControlInput2" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="formControlTextarea1" className="form-label">Message:</label>
                    <textarea className="form-control" id="formControlTextarea1" rows="3"></textarea>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>

        </div>
    );
}
