import { createContext, useContext, useState } from "react";

const NavbarContext = createContext();

// eslint-disable-next-line react/prop-types
const NavbarProvider = ({ children }) => {
  const [toggleOpen, setToggleOpen] = useState(false);

  const handleOpen = () => {
    setToggleOpen(!toggleOpen);
  };

  return (
    <NavbarContext.Provider value={{ handleOpen, toggleOpen, setToggleOpen }}>
      {children}
    </NavbarContext.Provider>
  );
};

const useNavbarContext = () => {
  return useContext(NavbarContext);
};

export { NavbarProvider, NavbarContext, useNavbarContext };
