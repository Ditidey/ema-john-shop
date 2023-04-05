import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data =>  setProducts(data));
    }, [])
    useEffect(()=>{
         const storedData = getShoppingCart();
         const savedCart = [];
         for(const id in storedData){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedData[id]; 
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
            
         }
         setCart(savedCart);
    }, [products])
    const handleProductCart = (product) =>
    {
         const newCart = [...cart, product];
         setCart(newCart);
         addToDb(product.id);
    }
    const handleClearCart = ()=>{
        setCart([]);
        deleteShoppingCart();
     }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                    key = {product.id}
                    product = {product}
                    handleProductCart = {handleProductCart}
                    ></Product>)
                } 
            </div>
            <div className='cart-container'>
               <Cart 
               cart = {cart}  handleClearCart={ handleClearCart}
               >
                <Link to='/orders'><button className='btn-proceed'>Orders Review</button></Link>
               </Cart>
            </div>           
        </div>
    );
};

export default Shop;