import { app } from "@/Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
 

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)
  const googleLogin = () => {
    signInWithPopup(auth, googleProvider);
  };
 const loginWithEmailPassword = async (email, password )=>{
 return  createUserWithEmailAndPassword(auth, email, password)
 
 }

 const login = (email, password)=>{

  return signInWithEmailAndPassword(auth, email, password)
 }
 
  const logOut = async () => {
  
    return signOut(auth);
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) { 
        // const userInfo = { email: currentUser?.email }; 
      //  todo access token
        setLoading(false);
       
      
      } else {
        // TODO: delete token 
        setLoading(false);

      }
    });
    return () => {
      unSubscribe();
    };
  }, [auth]);


  const authInfo = {
    loading,
    login,
    setLoading,
    user,
    googleLogin,
    logOut,
    loginWithEmailPassword, 
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
