import { AiOutlineYoutube } from "react-icons/ai";
import { CiMobile1 } from "react-icons/ci";
import { BsSmartwatch, BsHeadphones } from "react-icons/bs";
import { GiGreenPower } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { useNavbarContext } from "../../GlobalContext/NavbarContext";

const Navbar = () => {
  const items = [
    {
      id: 1,
      title: "Creators Gears",
      value: "creators-gears",
      icon: <AiOutlineYoutube />,
    },
    {
      id: 2,
      title: "Headphone & Earphone",
      value: "headphone-and-earphone",
      icon: <BsHeadphones />,
    },
    {
      id: 3,
      title: "Mobile Accessories",
      value: "mobile-accessories",
      icon: <CiMobile1 />,
    },
    {
      id: 4,
      title: "Watches Collection",
      value: "watches-collection",
      icon: <BsSmartwatch />,
    },
    {
      id: 5,
      title: "Consumer Electronics",
      value: "consumer-electronics",
      icon: <GiGreenPower />,
    },
  ];
  //navbar toggle option for small screen
  const { toggleOpen, setToggleOpen, condition } = useNavbarContext();

  return (
    <div className="relative">
      <>
        {condition ? null : (
          <nav className="w-[300px] hidden lg:block bg-[#EEEEEE] min-h-screen max-h-full space-y-4 pt-6 border-r border-l border-gray-200">
            {items?.map((item) => (
              <NavLink
                to={item?.value}
                title={item?.title}
                key={item?.id}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center text-d text-xl px-4 font-medium hover:text-d duration-500"
                    : "flex items-center text-black text-xl px-4 font-medium hover:text-d duration-500"
                }
              >
                <p>{item?.icon}</p>
                <li className="ml-2 list-none">{item?.title}</li>
              </NavLink>
            ))}
          </nav>
        )}
      </>
      {/* small screen */}
      <nav
        className={
          toggleOpen
            ? "w-[280px] block lg:hidden bg-white min-h-screen space-y-4 pt-6 border-r border-l border-gray-200 absolute left-0 duration-500 ease-in-out z-[999]"
            : "w-[280px] block lg:hidden bg-white min-h-screen space-y-4 pt-6 border-r border-l border-gray-200 absolute left-[-20rem] duration-500 ease-in-out z-[999]"
        }
      >
        {items?.map((item) => (
          <NavLink
            onClick={() => setToggleOpen(!toggleOpen)}
            to={item?.value}
            title={item?.title}
            key={item?.id}
            className={({ isActive }) =>
              isActive
                ? "flex items-center text-d text-xl px-4 font-medium hover:text-d duration-500"
                : "flex items-center text-black text-xl px-4 font-medium hover:text-d duration-500"
            }
          >
            <p>{item?.icon}</p>
            <li className="ml-2 list-none">{item?.title}</li>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;

// import { useState } from "react";
// import { AiOutlineYoutube } from "react-icons/ai";
// import { CiMobile1 } from "react-icons/ci";
// import { BsSmartwatch, BsHeadphones } from "react-icons/bs";
// import { GiGreenPower } from "react-icons/gi";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const items = [
//     {
//       id: 1,
//       title: "Creators Gears",
//       value: "creators-gears",
//       icon: <AiOutlineYoutube />,
//       subItems: [
//         {
//           id: 6,
//           title: "Sub Item 1",
//           value: "sub-item-1",
//         },
//         {
//           id: 7,
//           title: "Sub Item 2",
//           value: "sub-item-2",
//         },
//       ],
//     },
//     {
//       id: 2,
//       title: "Headphone & Earphone",
//       value: "headphone-and-earphone",
//       icon: <BsHeadphones />,
//     },
//     {
//       id: 3,
//       title: "Mobile Accessories",
//       value: "mobile-accessories",
//       icon: <CiMobile1 />,
//     },
//     {
//       id: 4,
//       title: "Watches Collection",
//       value: "watches-collection",
//       icon: <BsSmartwatch />,
//     },
//     {
//       id: 5,
//       title: "Consumer Electronics",
//       value: "consumer-electronics",
//       icon: <GiGreenPower />,
//     },
//   ];

//   const [openSubmenuItemId, setOpenSubmenuItemId] = useState(null);

//   return (
//     <nav className="w-[300px] bg-white min-h-screen space-y-4 pt-6 border-r border-l border-gray-200">
//       {items.map((item) => (
//         <div
//           key={item.id}
//           onMouseEnter={() => setOpenSubmenuItemId(item.id)}
//           onMouseLeave={() => setOpenSubmenuItemId(null)}
//         >
//           <NavLink
//             to={item?.value}
//             className="flex items-center text-xl px-4 font-medium hover:text-d duration-500"
//           >
//             <p>{item.icon}</p>
//             <li className="ml-2 list-none">{item.title}</li>
//           </NavLink>
//           {item?.subItems && item?.id === openSubmenuItemId && (
//             <ul className="pl-8">
//               {item?.subItems?.map((subItem) => (
//                 <NavLink
//                   to={`${item.value}/${subItem.value}`}
//                   key={subItem?.id}
//                   className="flex items-center text-xl px-4 font-medium hover:text-d duration-500"
//                 >
//                   <li className="ml-2 list-none">{subItem.title}</li>
//                 </NavLink>
//               ))}
//             </ul>
//           )}
//         </div>
//       ))}
//     </nav>
//   );
// };

// export default Navbar;
