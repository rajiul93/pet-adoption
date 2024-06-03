import { app } from "@/Firebase/firebase.config";
import useAxiosPublic from "@/Utils/Hook/useAxiosPublic";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleLogin = () => {
   return signInWithPopup(auth, googleProvider);
  };
  const loginWithEmailPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    await axiosPublic.get("/logout", {withCredentials:true})

    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
     
      if (currentUser) {
        const userInfo = { email: currentUser?.email };
        const userRole = {
          email: currentUser?.email,
          role: "user",
          status: "verified",
        };
        await axiosPublic.put(`/user`, userRole);
        try {
          const { data } = await axiosPublic.post(`/jwt`, userInfo,{withCredentials:true});
        
 
            setLoading(false);
           
        } catch (error) {
          console.log(error.message);
        }
      } else {
        // TODO: delete token
        setLoading(false);

      }
    });
    return () => {
      unSubscribe();
    };
  }, [auth,axiosPublic]);

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
