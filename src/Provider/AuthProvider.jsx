import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../fireBase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)

// sign up user
const signup=(email,password)=>{
    setLoading(true)
   return createUserWithEmailAndPassword(auth,email,password)
}
// login user

const signIn=(email,password)=>{
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
}

const logOut=()=>{
    signOut(auth)
}
// manage user
useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        console.log(currentUser)
        setUser(currentUser)
        setLoading(false)
    })
    return()=>{
        return unsubscribe()
    }
},[])
    const authInFo = {
        user,
        loading,
        signup,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInFo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;