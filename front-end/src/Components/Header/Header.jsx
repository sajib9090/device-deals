import { PiShoppingCartLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useNavbarContext } from "../../GlobalContext/NavbarContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { handleOpen, toggleOpen } = useNavbarContext();

  return (
    <>
      <div className="h-[80px] fixed left-0 z-[999] top-0 right-0 sm:h-[90px] md:h-[100px] bg-white flex items-center justify-between border-b border-x border-gray-200 max-w-[96rem] mx-auto">
        <div className="block lg:hidden pl-2 sm:pl-4">
          {toggleOpen ? (
            <MdClose
              onClick={handleOpen}
              className="h-9 w-9 sm:w-10  sm:h-10 cursor-pointer"
            />
          ) : (
            <HiMenuAlt2
              onClick={handleOpen}
              className="h-9 w-9 sm:w-10  sm:h-10 cursor-pointer"
            />
          )}
        </div>
        <div>
          {/* to do logo implement  */}
          <Link to={"/"}>
            <h1 className="text-4xl sm:text-5xl font-bold lg:pl-4">Logo</h1>
          </Link>
        </div>
        <div className="flex items-center space-x-3 sm:space-x-6 pr-2 sm:pr-4">
          <Link to={"cart"} className="relative">
            <PiShoppingCartLight
              title="Cart"
              className="h-7 w-7 sm:h-9 sm:w-9 cursor-pointer text-gray-600"
            />
            <div className="absolute w-6 h-6 bg-d rounded-full top-[-0.7rem] right-[-0.5rem] flex items-center justify-center">
              <p className="text-[.6rem] text-black">120</p>
            </div>
          </Link>
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
