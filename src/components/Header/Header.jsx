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
            <Link to="/">Shop</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up</Link>
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