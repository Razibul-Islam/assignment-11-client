import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const Authentication = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false)

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth)
  }

  const Login = (email,password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

   const providerLogin = (provider) => {
     setLoading(true);
     return signInWithPopup(auth, provider);
   };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setUser(currentUser);
      setLoading(false)
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const AuthInfo = {
    loading,
    user,
    register,
    Login,
    logout,
    providerLogin,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default Authentication;
