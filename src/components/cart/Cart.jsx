import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart)
    {
        totalPrice = product.price + totalPrice;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
             <h2>Order Summary</h2>
             <p>Selected Items: {cart.length}</p>
             <p>Total Price: ${totalPrice}</p>
             <p>Total Shipping charge: ${totalShipping}</p>
             <p>Tax: ${tax}</p>
              
             <h5>Grand Total: ${grandTotal}</h5>
             <button className='btn-clear-cart'>Clear Cart</button>
             <button className='btn-review'>Review Order</button>
        </div>
    );
};

export default Cart;