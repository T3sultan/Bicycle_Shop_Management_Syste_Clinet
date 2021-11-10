import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="container-fluid footer row row-cols-lg-3 row-cols-md-2 row-cols-12 d-flex justify-content-center mx-auto py-5">
            <div>
                <h4 className='title'><i className="fas fa-phone "></i> Contact Us</h4>
                <a className='title' href="tel:01869510882"><p>Phone: (+880) 1768175</p></a>
                <a className='title' href="mailto: nafiaiubian17@gmail.com"><p>Email: tipusultancse101@gmail.com</p></a>
            </div>
            <div>
                <h4 className='title'><i className="far fa-address-card"></i> About Me</h4>
                <p className='title'>Tipu Sultan</p>
                <p className='title'>Bsc in CSE</p>
                <p className='title'>Front End & React Native</p>
                <a className='title' href="https://github.com/T3sultan"><p>Website: T3sultan.com</p></a>
            </div>
            <div>
                <h4 className='title'><i className="far fa-building"></i> Organization</h4>
                <p className='title'>Comilla University, Bangladesh</p>

            </div>



        </footer>
    );
};

export default Footer;