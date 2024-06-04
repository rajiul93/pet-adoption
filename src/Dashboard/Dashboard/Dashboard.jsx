import DashboardNav from "@/Share/Dashboard/DashboardNav";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <DashboardNav />
      <div className="flex flex-col flex-1   overflow-y-auto overflow-x-scroll ">
        <Outlet /> 
      </div>
    </div>
  );
};

export default Dashboard;
