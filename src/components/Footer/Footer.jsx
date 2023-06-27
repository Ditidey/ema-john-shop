import React from 'react';
import './Footer.css';
import logo from '../../../src/images/Logo.svg';
const Footer = () => {
    return (
         <div className='footer'>
            <div className='foot'>
            <div>
                 <img src={logo} alt="" style={{ width: '100px', marginTop: '50px', marginLeft: '50px' }} />
                <h2 style={{ marginLeft: '50px', fontSize: '16px' }}>Dublin 8, Ireland</h2>
                <h2 style={{ marginLeft: '50px', fontSize: '16px' }}>+353 87000000</h2>
            </div>
            <div> 
                 
                <h2 style={{ marginLeft: '50px', fontSize: '16px', marginTop:'60px'}}>About Us</h2>
                <h2 style={{ marginLeft: '50px', fontSize: '16px' }}>Features</h2>
                <h2 style={{ marginLeft: '50px', fontSize: '16px' }}>Sponsorship </h2>
            </div>
        </div>
        <p style={{marginLeft:'700px'}}>Ema-John &copy; 2023! All Protected</p>
         </div>
    );
};

export default Footer;