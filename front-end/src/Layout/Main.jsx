import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";

const Main = () => {
  return (
    <div className="max-w-[96rem] mx-auto">
      <div className="mb-[80px] sm:mb-[90px]  md:mb-[100px]">
        <Header />
      </div>
      <div className="lg:flex">
        <div>
          <Navbar />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
