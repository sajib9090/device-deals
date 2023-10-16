import { createContext, useContext, useState } from "react";

const NavbarContext = createContext();

// eslint-disable-next-line react/prop-types
const NavbarProvider = ({ children }) => {
  const [toggleOpen, setToggleOpen] = useState(false);

  const handleOpen = () => {
    setToggleOpen(!toggleOpen);
  };

  const [condition, setCondition] = useState(false);

  return (
    <NavbarContext.Provider
      value={{
        handleOpen,
        toggleOpen,
        setToggleOpen,
        setCondition,
        condition,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

const useNavbarContext = () => {
  return useContext(NavbarContext);
};

export { NavbarProvider, NavbarContext, useNavbarContext };
