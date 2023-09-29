import { PiShoppingCartLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useNavbarContext } from "../../GlobalContext/NavbarContext";

const Header = () => {
  const { handleOpen, toggleOpen } = useNavbarContext();

  return (
    <>
      <div className="h-[80px] sm:h-[100px] bg-white flex items-center justify-between border-b border-r border-gray-200">
        <div className="block lg:hidden pl-2 sm:pl-4">
          {toggleOpen ? (
            <MdClose
              onClick={handleOpen}
              className="h-7 w-7 sm:w-10  sm:h-10 cursor-pointer"
            />
          ) : (
            <HiMenuAlt2
              onClick={handleOpen}
              className="h-7 w-7 sm:w-10  sm:h-10 cursor-pointer"
            />
          )}
        </div>
        <div>
          {/* to do logo implement  */}
          <h1 className="text-4xl sm:text-5xl font-bold lg:pl-4">Logo</h1>
        </div>
        <div className="flex items-center space-x-3 sm:space-x-6 pr-2 sm:pr-4">
          <div className="relative">
            <PiShoppingCartLight
              title="Cart"
              className="h-7 w-7 sm:h-9 sm:w-9 cursor-pointer text-gray-600"
            />
            <div className="absolute w-6 h-6 bg-d rounded-full top-[-0.7rem] right-[-0.5rem] flex items-center justify-center">
              <p className="text-[.6rem] text-black">120</p>
            </div>
          </div>
          <div>
            <CiUser
              title="Account"
              className="h-7 w-7 sm:h-9 sm:w-9 cursor-pointer text-gray-600"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
