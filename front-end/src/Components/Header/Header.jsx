import { PiShoppingCartLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
const Header = () => {
  return (
    <div className="h-[100px] bg-white flex items-center justify-between shadow-lg">
      <div>
        <h1 className="text-5xl font-bold pl-4">Logo</h1>
      </div>
      <div className="flex items-center space-x-6 pr-4">
        <div className="relative">
          <PiShoppingCartLight
            title="Cart"
            className="h-9 w-9 cursor-pointer text-gray-600"
          />
          <div className="absolute w-6 h-6 bg-[#FCB903] rounded-full top-[-0.7rem] right-[-0.5rem] flex items-center justify-center">
            <p className="text-xs text-black">120</p>
          </div>
        </div>
        <div>
          <CiUser
            title="Account"
            className="h-9 w-9 cursor-pointer text-gray-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
