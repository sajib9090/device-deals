import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Dashboard/Sidebar/Sidebar";
import DashboardHeader from "../Components/Dashboard/DashboardHeader/DashboardHeader";

const DashboardLayout = () => {
  return (
    <div className="max-w-[96rem] mx-auto">
      <div className="mb-[80px]">
        <DashboardHeader />
      </div>
      <div className="lg:flex">
        <div>
          <Sidebar />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
