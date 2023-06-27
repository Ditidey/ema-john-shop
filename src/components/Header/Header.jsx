import React, { useContext } from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
import { Link } from 'react-router-dom';
import { ContextProvider } from '../../providers/AuthProvider';
const Header = () => {
    const {user, userLogOut} = useContext(ContextProvider)

    const handleSignOut =()=>{
        userLogOut()
        .then(()=>{

        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <nav className='header'>
           <img src={logo} alt="" /> 
           <div>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link>
             
             {
                user && <>
                <span className='user'>{user.email}</span> 
                <button onClick={handleSignOut}>Sign Out</button>
                </>
             }
            </div> 
        </nav>
    );
};

export default Header;