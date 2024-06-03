import DashboardNav from "@/Share/Dashboard/DashboardNav";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <DashboardNav />
      <div className="flex flex-col flex-1 w-full overflow-y-auto overflow-x-hidden">
        <Outlet /> 
      </div>
    </div>
  );
};

export default Dashboard;
