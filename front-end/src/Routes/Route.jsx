/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import { Suspense, lazy } from "react";
const CreatorsGears = lazy(() =>
  import("../Pages/CreatorsGears/CreatorsGears")
);
const HeadphoneAndEarphone = lazy(() =>
  import("../Pages/HeadphoneAndEarphone/HeadphoneAndEarphone")
);
const MobileAccessories = lazy(() =>
  import("../Pages/MobileAccessories/MobileAccessories")
);
const WatchesCollection = lazy(() =>
  import("../Pages/WatchesCollection/WatchesCollection")
);
const ConsumerElectronics = lazy(() =>
  import("../Pages/ConsumerElectronics/ConsumerElectronics")
);
const ProductDetails = lazy(() =>
  import("../Components/ProductDetails/ProductDetails")
);
const Cart = lazy(() => import("../Pages/Cart/Cart"));
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
const ManageUsers = lazy(() =>
  import("../Pages/Dashboard/ManageUsers/ManageUsers")
);
const ManageProducts = lazy(() =>
  import("../Pages/Dashboard/ManageProducts/ManageProducts")
);
const ManageOrders = lazy(() =>
  import("../Pages/Dashboard/ManageOrders/ManageOrders")
);
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "creators-gears",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <CreatorsGears />
          </Suspense>
        ),
      },
      {
        path: "headphone-and-earphone",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <HeadphoneAndEarphone />
          </Suspense>
        ),
      },
      {
        path: "mobile-accessories",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <MobileAccessories />
          </Suspense>
        ),
      },
      {
        path: "watches-collection",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <WatchesCollection />
          </Suspense>
        ),
      },
      {
        path: "consumer-electronics",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <ConsumerElectronics />
          </Suspense>
        ),
      },
      {
        path: "product-details",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <ProductDetails />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <h1>Dashboard Error</h1>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "manage-users",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <ManageUsers />
          </Suspense>
        ),
      },
      {
        path: "manage-products",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <ManageProducts />
          </Suspense>
        ),
      },
      {
        path: "manage-orders",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <ManageOrders />
          </Suspense>
        ),
      },
    ],
  },
]);
