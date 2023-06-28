import React, { useEffect } from 'react';
import './Card.css';
import Rating from 'react-rating';

const Card = () => {
    useEffect(()=>{
        
    },[])
    return (
        <div>
            <h2 className='headline' >Popular Shops</h2>
        <div className='card'>
            <div>
                <img className='card-img' src="https://media.istockphoto.com/id/1296393834/photo/smiling-male-is-posing-with-purchases-near-shelves-in-supermarket.jpg?s=612x612&w=0&k=20&c=DxBfPJTd_RTZCOMe7FAMEp5lnKsfqLDoB2a8ic3x6og=" alt="" />
                <h2  >Healthy House</h2>
                <p>Available products: 211 <span></span></p>
                 <Rating className='rat' placeholderRating={3.5}               
                    readonly
                ></Rating> 
            </div>
            <div>
                <img className='card-img' src="https://images.unsplash.com/photo-1511317559916-56d5ddb62563?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <h2  >Beauty and Care</h2>
                <p>Available products: 220 <span></span></p>
                 <Rating className='rat' placeholderRating={4.5}               
                    readonly
                ></Rating> 
            </div>
            <div>
                <img className='card-img' src="https://images.unsplash.com/photo-1595991209266-5ff5a3a2f008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <h2  >Comfortable Dresses </h2>
                <p>Available products: 111 <span></span></p>
                 <Rating className='rat' placeholderRating={4.5}               
                    readonly
                ></Rating> 
            </div>
            <div>
                <img className='card-img' src="https://media.istockphoto.com/id/1477839719/photo/an-asian-mother-and-daughter-are-using-an-eco-friendly-tote-bag-to-shop-for-fresh-organic.webp?b=1&s=170667a&w=0&k=20&c=k13GmFY-x3m31BMkytJOe7PSQZAtK_rxVxho_kB5_gY=" alt="" />
                <h2 >Fruits House</h2>
                <p>Available products: 41 <span></span></p>
                 <Rating className='rat' placeholderRating={4.0}               
                    readonly
                ></Rating> 
            </div>
            <div>
                <img className='card-img' src="https://media.istockphoto.com/id/1477115369/photo/male-customer-holding-cycling-shoe.webp?b=1&s=170667a&w=0&k=20&c=FRf-VmFo3OGP9O7nPTxlROANVAbJWftx56tKKDLv4R8=" alt="" />
                <h2  >Sneakers Market</h2>
                <p >Available products: 101 <span></span></p>
                 <Rating className='rat' placeholderRating={4.5}               
                    readonly
                ></Rating> 
            </div>
            <div>
                <img className='card-img' src="https://media.istockphoto.com/id/1477450883/photo/men-trying-glasses-in-an-optician.webp?b=1&s=170667a&w=0&k=20&c=iCOKaxGIWAe71ML71yLph9ht3ngtNrhhou3aQCteJMk=" alt="" />
                <h2 >Glasses</h2>
                <p>Available products: 21 <span></span></p>
                 <Rating className='rat' placeholderRating={3.5}               
                    readonly
                ></Rating> 
            </div>
        </div>
        </div>
    );
};

export default Card;