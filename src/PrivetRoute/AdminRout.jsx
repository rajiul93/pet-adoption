import useAuth from "@/Provider/useAuth";
import useAxiosSecure from "@/Utils/Hook/useAxiosSecure";
import { useQuery } from "react-query";
import { Navigate, useLocation } from "react-router-dom";

const AdminRout = ({ children }) => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const location = useLocation();

  const { data: isAdmin, isLoading } = useQuery({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/user-admin/?email=${user?.email}`
      );
      return data;
    },
  });
  if (isLoading) return <>load........................</>;
  if (isAdmin.role !== "Admin") {
    return <Navigate to="/" />;
  }

  if (user && isAdmin.role === "Admin") {
    return children;
  }
  return <Navigate state={location.pathname} replace={true} to="/login" />;
};

export default AdminRout;
