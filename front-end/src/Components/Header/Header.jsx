import { PiShoppingCartLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useNavbarContext } from "../../GlobalContext/NavbarContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const { handleOpen, toggleOpen } = useNavbarContext();
  const [menu, setMenu] = useState(false);
  const [scroll, setScroll] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isScrolling = window.scrollY > 100;
      if (isScrolling) {
        setScroll(isScrolling);
        if (scroll) {
          setMenu(false);
        }
      }
    });
  }, [scroll]);

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
        <div className="flex items-center space-x-3 sm:space-x-6 pr-2 sm:pr-4 relative">
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
              onClick={() => setMenu(!menu)}
              title="Account"
              className="h-7 w-7 sm:h-9 sm:w-9 cursor-pointer text-gray-600"
            />
          </div>
          <div
            className={
              menu
                ? `h-[100px] w-[150px] z-[999] bg-gray-200 absolute top-12 lg:top-14 right-0 shadow-2xl rounded duration-500 ease-in-out`
                : "h-[100px] w-[150px] z-[999] bg-gray-200 absolute -top-[300px] right-0 shadow-2xl rounded duration-500 ease-in-out"
            }
          >
            <ul className="space-y-2 ml-4 mt-4">
              <li>
                <Link className="hover:text-d font-semibold duration-500">
                  Profile
                </Link>
              </li>
              <li>
                <Link className="hover:text-d font-semibold duration-500">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
