import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const ReviewItem = ({item, handleRemoveButton}) => {
    const {_id, name, img, price, quantity, shipping} = item;
    return (
        <div className='item-container'>
            <img src={img} alt="" />
            <div className='item-info'>
                <p>{name}</p>
                <p>Price: <span className='orange'>${price}</span> </p>
                <p> Order Quantity: <span className='orange'>{quantity}</span></p>
            </div>
            <div>
                <button onClick={()=>handleRemoveButton(_id)} className='btn-delete'><FontAwesomeIcon className='icon-delete' icon={faTrashAlt} /></button>
            </div>
        </div>
    );
};

export default ReviewItem;