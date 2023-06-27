import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link, useLoaderData } from 'react-router-dom';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [perPageProducts, setPerPageProducts] = useState(12);
    const { totalProducts } = useLoaderData();

    const totalPages = Math.ceil(totalProducts / perPageProducts);
    const totalNumbers = [...Array(totalPages).keys()]
    const options = [6, 10, 20, 40]

    useEffect(() => {
        fetch(`https://ema-john-server-one.vercel.app/products?page=${currentPage}&limit=${perPageProducts}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [currentPage, perPageProducts])
    useEffect(() => {
        const storedData = getShoppingCart();
        const ids = Object.keys(storedData);
        fetch('https://ema-john-server-one.vercel.app/productsByIds', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(ids)
        })
            .then(res => res.json())
            .then(cartData => {
                console.log(cartData)
                const savedCart = [];
                for (const id in storedData) {
                    const addedProduct = cartData.find(product => product.id === id)
                    if (addedProduct) {
                        const quantity = storedData[id];
                        addedProduct.quantity = quantity;
                        savedCart.push(addedProduct);
                    }

                }
                setCart(savedCart);
            })

    }, [])
    const handleProductCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product._id);
    }
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    const handleSelectedChange = event => {
        setPerPageProducts(parseInt(event.target.value));
        setCurrentPage(0)
    }
    return (
        <>
            <div className='shop-container'>
                <div className='products-container'>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                            handleProductCart={handleProductCart}
                        ></Product>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart
                        cart={cart} handleClearCart={handleClearCart}
                    >
                        <Link to='/orders'><button className='btn-proceed'>Orders Review</button></Link>
                    </Cart>
                </div>
            </div>

            <div className="pagination">
                <p>Current page: {currentPage}</p>
                {
                    totalNumbers.map(number =>
                        <button
                            key={number}
                            className={currentPage === number ? 'selected' : ''}
                            onClick={() => setCurrentPage(number)}
                        >{number}</button>)
                }

                <select value={perPageProducts} onChange={handleSelectedChange}>
                    {
                        options.map(option =>
                            <option key={option} value={option}>
                                {option}
                            </option>)
                    }
                </select>

            </div>
        </>
    );
};

export default Shop;