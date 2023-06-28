import React from 'react';
import './About.css'
import { BiCurrentLocation, BiLogoFacebook } from 'react-icons/bi'
import { CiLocationArrow1 } from 'react-icons/ci'
import { AiOutlineClockCircle, AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai'
import { MdLocalPhone } from 'react-icons/md'
const About = () => {
    return (
        <div>
            <h2 className='headline'>Discover and Know us</h2>
            <section>
                <div className='about-div'>
                    <div className='div'>
                        <BiCurrentLocation style={{ fontSize: '30px', marginLeft: '100px', color: 'blue' }}></BiCurrentLocation>
                        <p>We are every where in the world</p>
                        <button style={{ backgroundColor: 'skyBlue', marginLeft: '10px', width: '200px' }}>See us</button>
                    </div>
                    <div className='div'>
                        <CiLocationArrow1 style={{ fontSize: '30px', marginLeft: '100px', color: 'green' }}></CiLocationArrow1>
                        <p>Delivery around the world</p>
                        <button style={{ backgroundColor: 'lightGreen', marginLeft: '10px', width: '200px' }}>Order Now</button>
                    </div>
                    <div className='div'>
                        <AiOutlineClockCircle style={{ fontSize: '30px', marginLeft: '100px', color: 'red' }}></AiOutlineClockCircle>
                        <p>24/7 open in any service</p>
                        <button style={{ backgroundColor: 'Red', marginLeft: '10px', width: '200px' }}>Pinch Us</button>
                    </div>
                    <div className='div'>
                        <MdLocalPhone style={{ fontSize: '30px', marginLeft: '100px', color: 'yellowGreen' }}></MdLocalPhone>
                        <p>+353 7800000 || ema@gmail.com</p>
                        <button style={{ backgroundColor: 'yellowGreen', marginLeft: '10px', width: '200px' }}>Talk with Us</button>
                    </div>

                </div>
            </section>
            <section className='sec'>
                <h2 className='question-line'>Question? We are here to help you</h2>
                <div className='about-div'>
                    <div>
                        <MdLocalPhone style={{ fontSize: '30px', marginLeft: '100px', color: 'white', backgroundColor: 'red', padding: '10px' }}></MdLocalPhone>
                        <p style={{ color: 'Red', marginLeft: '90px' }}>HotLine</p>
                        <p style={{marginLeft:'70px'}}>+353 7800000  </p>
                    </div>
                    <div>
                        <AiOutlineMail style={{ fontSize: '30px', marginLeft: '100px', color: 'white', backgroundColor: 'red', padding: '10px' }}></AiOutlineMail>
                        <p style={{ color: 'Red', marginLeft: '100px' }}>Email</p>
                        <p style={{marginLeft:'70px'}}>  ema@gmail.com</p>
                    </div>
                    <div>
                        <BiLogoFacebook style={{ fontSize: '30px', marginLeft: '100px', color: 'white', backgroundColor: 'red', padding: '10px' }}></BiLogoFacebook>
                        <p style={{ color: 'Red', marginLeft: '90px' }}>Facebook</p>
                        <p style={{marginLeft:'90px'}}>Ema John</p>
                    </div>
                    <div>
                        <AiOutlineInstagram style={{ fontSize: '30px', marginLeft: '100px', color: 'white', backgroundColor: 'red', padding: '10px' }}></AiOutlineInstagram>
                        <p style={{ color: 'Red', marginLeft: '90px' }}>Instagram</p>
                        <p style={{marginLeft:'70px'}}>Ema_John_22</p>
                    </div>
                </div>
                <button style={{marginLeft:'700px', marginBottom:'50px', padding:'20px', border:'20px', borderColor:'red', backgroundColor:'red', color:'white'}}>Or Contact Form</button>
            </section>
        </div>
    );
};

export default About;