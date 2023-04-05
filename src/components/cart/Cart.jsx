import React from 'react';
import './Cart.css';
const Cart = ({cart, handleClearCart, children}) => {
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0
    for(const product of cart)
    {
        product.quantity = product.quantity || 1;
        totalPrice = product.price + totalPrice * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
             <h2>Order Summary</h2>
             <p>Selected Items: {cart.length}</p>
             <p>Quantity: {quantity}</p>
             <p>Total Price: ${totalPrice}</p>
             <p>Total Shipping charge: ${totalShipping}</p>
             <p>Tax: ${tax}</p>
             <h5>Grand Total: ${grandTotal}</h5>
             <button onClick={handleClearCart} className='btn-clear-cart'>Clear Cart</button>
             {children}
        </div>
    );
};

export default Cart;