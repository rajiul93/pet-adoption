import useAuth from "@/Provider/useAuth";
import { Navigate, useLocation } from "react-router-dom";

 

const PrivetRout = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()
    if (loading) {
        return <>Loading...............</>
    }
    if (user) {
        return children
    }
  return <Navigate state={location.pathname} replace={true} to="/login" />;
 
  
};

export default PrivetRout;