import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const Authentication = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(false)

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
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
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default Authentication;
