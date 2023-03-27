import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name, id, img, seller, ratings, price} = props.product;
    return (
        <div className='product-div'>
             <img src={img} alt="" />
              <div className='product-info'>
              <h5>{name}</h5>
              <p>${price}</p>
              <p>Manufacture: {seller}</p>
              <p>{ratings}stars</p>
              </div>
              <button className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Product;