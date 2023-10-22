import { useEffect, useState } from "react";
import { useNavbarContext } from "../../../GlobalContext/NavbarContext";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const options = [
    {
      id: 1,
      title: "Manage Products",
      link: "manage-products",
    },
    {
      id: 2,
      title: "Manage Orders",
      link: "manage-orders",
    },
    {
      id: 3,
      title: "Manage Users",
      link: "manage-users",
    },
  ];
  const { dashboardToggle, setDashboardToggle } = useNavbarContext();
  const [scroll, setScroll] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isScrolling = window.scrollY > 1;
      if (isScrolling) {
        setScroll(isScrolling);
        if (scroll) {
          setDashboardToggle(false);
        }
      }
    });
  }, [scroll, setDashboardToggle]);

  return (
    <>
      <div className="hidden lg:flex flex-col pb-24 justify-between w-[300px] bg-[#EEEEEE] min-h-[calc(100vh-80px)]">
        <ul className="px-4 pt-4 space-y-4">
          {options?.map((option, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-lg font-semibold text-d hover:text-d duration-300"
                    : "text-lg font-semibold text-black hover:text-d duration-300"
                }
                to={option.link}
              >
                {option?.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="px-4 flex flex-col space-y-2 text-base font-semibold">
          <Link className="hover:text-d text-black duration-500" to={"/"}>
            Home
          </Link>
          <Link className="hover:text-d text-black duration-500">Logout</Link>
        </div>
      </div>
      {/* for small screen */}
      <div className="relative">
        <div
          className={
            dashboardToggle
              ? "w-[250px] bg-[#EEEEEE] min-h-[calc(100vh-80px)] pb-16 flex flex-col justify-between lg:hidden absolute duration-300 ease-in-out left-0 z-[999]"
              : "w-[250px] bg-[#EEEEEE] min-h-[calc(100vh-80px)] pb-16 flex flex-col justify-between lg:hidden absolute -left-[500px] duration-300 ease-in-out z-[999]"
          }
        >
          <ul className="px-4 pt-4 space-y-4">
            {options?.map((option, index) => (
              <li key={index}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg font-semibold text-d hover:text-d duration-300"
                      : "text-lg font-semibold text-black hover:text-d duration-300"
                  }
                  to={option.link}
                >
                  {option?.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="px-4 flex flex-col space-y-2 text-base font-semibold">
            <Link className="hover:text-d text-black duration-500" to={"/"}>
              Home
            </Link>
            <Link className="hover:text-d text-black duration-500">Logout</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
