import { useEffect, useState } from "react";
import { useNavbarContext } from "../../../GlobalContext/NavbarContext";

const Sidebar = () => {
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
      <div className="hidden lg:block w-[300px] bg-[#EEEEEE] min-h-screen">
        sidebar
      </div>
      {/* for small screen */}
      <div className="relative">
        <div
          className={
            dashboardToggle
              ? "w-[250px] bg-[#EEEEEE] min-h-screen block lg:hidden absolute duration-300 ease-in-out left-0"
              : "w-[250px] bg-[#EEEEEE] min-h-screen block lg:hidden absolute -left-[500px] duration-300 ease-in-out"
          }
        >
          small sidebar
        </div>
      </div>
    </>
  );
};

export default Sidebar;
