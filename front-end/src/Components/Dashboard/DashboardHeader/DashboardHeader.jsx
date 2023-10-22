import { HiMenuAlt2 } from "react-icons/hi";
import { ImCancelCircle } from "react-icons/im";
import { useNavbarContext } from "../../../GlobalContext/NavbarContext";
const DashboardHeader = () => {
  const { dashboardToggle, handleDashboardToggle } = useNavbarContext();

  return (
    <div className="h-[80px] flex items-center justify-between bg-gradient-to-r from-[#EEEEEE] to-white border-b border-r border-l border-gray-200 fixed left-0 z-[999] top-0 right-0 px-4">
      <div>
        <div className="block lg:hidden">
          {dashboardToggle ? (
            <ImCancelCircle
              onClick={handleDashboardToggle}
              className="h-8 w-8 cursor-pointer"
            />
          ) : (
            <HiMenuAlt2
              onClick={handleDashboardToggle}
              className="h-9 w-9 cursor-pointer"
            />
          )}
        </div>
      </div>
      <div className="flex items-center">
        <div className="h-[60px] w-[60px] border border-gray-400 rounded-full">
          <img
            className="h-[60px] w-[60px] rounded-full"
            src="https://img.freepik.com/premium-photo/photo-muslim-boy-standing-street-wearing-black-coat_455711-13.jpg?w=740"
            alt=""
          />
        </div>
        <div className="ml-2">
          <p className="text-lg font-bold">Rayan Ahmed</p>
          <p className="tracking-[3px] text-d">Admin</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
