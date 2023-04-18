import React, { useContext, useState } from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';
import { ContextProvider } from '../../providers/AuthProvider';
const Signup = () => {
    const [error, setError] = useState(null);
     const {createSignUp} = useContext(ContextProvider);

    const handleSignUp =event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        setError('');
        console.log(email,password)
        if(password !== confirm){
            setError('Password does not match.');
            return;
        }else if(password.length < 6){
            setError('Password must have 6 characters or longer.')
        }
        createSignUp(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            setError('');
            form.reset();
        })
        .catch(error =>
            {
                setError(error.message)
            })
    }
    return (
        <div className='form-container'>
            <h3 className='title'> Sign up</h3>
            <form onSubmit={handleSignUp}>
               <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email"  required/>
               </div>
               <div className='form-control'>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required/>
               </div>
               <div className='form-control'>
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name="confirm" id="confirm" required/>
               </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p><small>Already have an account? <Link className='link' to='/login'>Login</Link></small></p>
            <p className='error'>{error}</p>
        </div>
    );
};

export default Signup;