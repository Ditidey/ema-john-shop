import React, { useState } from 'react';
import Cart from '../cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const products = useLoaderData();
     const [cart, setCart] = useState(products);

     const handleRemoveButton = (id) =>{
            const remaining = cart.filter(pro => pro.id !== id)
            setCart(remaining);
            removeFromDb(id);
     }
     const handleClearCart = ()=>{
        setCart([]);
        deleteShoppingCart();
     }
    return (
        <div className='shop-container'> 
            <div className='review-container'>
               {
                cart.map(item => <ReviewItem key={item.id} item ={item} handleRemoveButton={handleRemoveButton}></ReviewItem>)
               }
            </div>
            <div className='cart-container'>
               <Cart cart={cart} handleClearCart={handleClearCart} >
                <Link to='/checkout'><button className='btn-proceed'>Proceed CheckOut</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;