import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route";
import { NavbarProvider } from "./GlobalContext/NavbarContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-[#EEEEEE]">
      <NavbarProvider>
        <RouterProvider router={router}></RouterProvider>
      </NavbarProvider>
    </div>
  </React.StrictMode>
);
