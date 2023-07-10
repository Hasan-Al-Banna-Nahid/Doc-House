"use client";
import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleEmailPasswordSignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleEmailPasswordLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (user) {
        axios
          .post("https://dochouse.vercel.app/jwt", {
            email: user.email,
          })
          .then((res) => {
            localStorage.setItem("access-token", res.data.token);
            setLoading(false);
          })

          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
      setUser(currentUser);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    handleEmailPasswordSignUp,
    handleEmailPasswordLogin,
    handleGoogleLogin,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
