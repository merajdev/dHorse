import React from 'react';
import '../assets/styles/LandingPage.css'
import logo from '../assets/images/logo.svg'

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="container">
                <div className="d-block text-center">
                    {/* <img src={logo} className='logo' alt="logo" /> */}
                    {/* <p>dHorses</p> */}
                    <h6>Discover</h6>
                    <h1 className='mb-3'>Your Perfect Horse <br/>Ride Experience</h1>
                    <button type="button">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
