import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ContextProvider } from '../../providers/AuthProvider';

const Login = () => {
    const [show, setShow] = useState(true);

    const {userSignIn} = useContext(ContextProvider);
    const [error, setError] = useState('');
     const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const from = location.state?.from?.pathname || '/';
    console.log(from)

     const handleSignIn =(event)=>{
           event.preventDefault(); 
           const form = event.target; 
           const email = form.email.value;
           const password = form.password.value;
            console.log(email, password)

           userSignIn(email, password)
           .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from, {replace: true})
           })
           .catch(error =>{
            setError(error.messages)
           })
     }
    return (
        <div className='form-container'>
            <h3 className='title'> Sign In</h3>
            <form onSubmit={handleSignIn}>
               <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
               </div>
               <div className='form-control'>
                <label htmlFor="password">Password</label>
                <input type= {show ? "text" : "password"} name="password" id="password" />
                <p onClick={()=>setShow(!show)}><small>
                    {
                        show ? "Hide Password" : 'Show Password'
                    }
                    </small></p>
               </div>
                <input className='btn-submit' type="submit" value="Sign in" />
            </form>
            <p><small>New to Ema-John? <Link className='link' to='/signup'>Sign up</Link></small></p>
            <p className='error'>{error}</p>
        </div>
    );
};

export default Login;