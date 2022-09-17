import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <div className='py-8'>
            <footer className="footer p-10  ">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="/" className="link link-hover">Emergency Checkup</Link>
                    <Link to="/" className="link link-hover">Monthly Checkup</Link>
                    <Link to="/" className="link link-hover">Weekly Checkup</Link>
                    <Link to="/" className="link link-hover">Daily Checkup</Link>
                </div>
                <div>
                    <span className="footer-title">Oral Health</span>
                    <Link to="/" className="link link-hover">Fluoride </Link>
                    <Link to="/" className="link link-hover">Cavity Filling</Link>
                    <Link to="/" className="link link-hover">Teeth Whitening</Link>

                </div>
                <div>
                    <span className="footer-title">Address</span>
                    <Link to="/" className="link link-hover">Dhaka, Bangladesh </Link>
                    <Link to="/" className="link link-hover">New York, USA</Link>
                    <Link to="/" className="link link-hover">Berlin, Germany</Link>
                </div>
            </footer>
            <h2 className='text-center font-medium '>Doctors Portals all have &copy; copyrights {date}</h2>
        </div>
    );
};

export default Footer;