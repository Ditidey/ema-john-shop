import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
export const ContextProvider = createContext(null);
 const auth = getAuth(app);

const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createSignUp = (email, password) =>{
    setLoading(true);
     return createUserWithEmailAndPassword(auth, email, password)
   }

   const userSignIn = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
   }
   const userLogOut = ()=>{
    return signOut(auth);
   }

   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser =>{
        setUser(currentUser);
        setLoading(false);
    }));
     return ()=>{unsubscribe}
   }, [])
    const AuthInfo = {
         user,
         loading,
         createSignUp,
         userSignIn,
         userLogOut,
    }
    return (
        <ContextProvider.Provider value={AuthInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthProvider;