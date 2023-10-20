import { useEffect } from "react";
import { useNavbarContext } from "../../GlobalContext/NavbarContext";
import { useLocation } from "react-router-dom";
import CurrencyFormatter from "../../Components/CurrencyFormatter/CurrencyFormatter";
import { CiTrash } from "react-icons/ci";

const Cart = () => {
  const location = useLocation();
  const { setCondition } = useNavbarContext();

  useEffect(() => {
    if (location?.pathname) {
      setCondition(true);
    }
  }, [location, setCondition]);

  return (
    <div>
      <h1 className="text-end font-semibold text-2xl mr-4 mt-4">
        Shopping Cart
      </h1>
      <div className="mt-8 grid grid-cols-12 relative">
        <div className="col-span-12 sm:col-span-12 lg:col-span-9 px-2 order-2 lg:order-1">
          <div className="md:block hidden">
            <div className="h-[50px] w-full px-2 flex items-center justify-between border-b border-gray-300 font-semibold">
              <div className="w-[67%]">
                <p>Item</p>
              </div>
              <div className="w-[33%] flex items-center justify-between">
                <p>Price</p>
                <p>Qty</p>
                <p>Subtotal</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 w-full py-4 md:py-0 border-b border-gray-300 relative">
            <div className="md:h-[150px] col-span-12 md:col-span-8 flex items-center mt-4 md:mt-0">
              <div className="flex items-center justify-center">
                <div className="h-[120px] w-[120px]">
                  <img
                    className="w-full h-full"
                    src="https://images.unsplash.com/photo-1606904825846-647eb07f5be2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex items-center px-2">
                <p className="text-[#007bff] hover:text-d hover:underline text-lg font-semibold capitalize cursor-pointer duration-500">
                  Xiaomi WiFi Repeater Pro (Dual Antenna, 300M) Xiaomi WiFi
                  Repeater Pro (Dual Antenna, 300M) Xiaomi WiFi Repeater Pro
                  (Dual Antenna, 300M)
                </p>
              </div>
            </div>
            <div className="md:h-[150px] col-span-3 md:col-span-1 flex items-center justify-start font-medium mt-7 md:mt-0">
              <p>
                <CurrencyFormatter value={1299} />
              </p>
            </div>
            <div className="md:h-[150px] col-span-6 md:col-span-2 flex items-center justify-center mt-7 md:mt-0">
              <button className="px-2 py-1 border border-gray-300 rounded-l">
                +
              </button>
              <button className="px-2 py-1 border-y border-gray-300">
                120
              </button>
              <button className="px-2 py-1 border cursor-pointer border-gray-300 rounded-r">
                -
              </button>
            </div>
            <div className="md:h-[150px] col-span-3 md:col-span-1 flex flex-col justify-center md:relative mt-7 md:mt-0">
              <div className="absolute md:top-2 top-1 right-0">
                <CiTrash className="w-7 h-7 cursor-pointer text-black hover:text-d duration-500" />
              </div>
              <div className="font-semibold ">
                <p>
                  <CurrencyFormatter value={1299} />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[250px] lg:h-[300px] flex flex-col justify-between py-6 bg-[#f2f2f2] order-1 lg:order-2 col-span-12 lg:col-span-3 px-4 lg:px-6 sticky z-50 top-16 lg:top-24">
          <div className="border-b border-[#636363] pb-4">
            <h1 className="text-2xl font-semibold">Summary</h1>
          </div>
          <div className="border-b border-[#636363] flex items-center justify-between pb-4">
            <p>Subtotal</p>
            <p>
              <CurrencyFormatter value={1999999} />
            </p>
          </div>
          <div className="border-b border-[#636363] flex items-center justify-between text-lg font-bold pb-4">
            <p>Order Total</p>
            <p>
              <CurrencyFormatter value={1999999} />
            </p>
          </div>
          <div className="w-full text-center">
            <button className="h-10 rounded text-base font-semibold border border-d hover:border-d hover:bg-white duration-700 w-full bg-d">
              Proceed to Checkout
            </button>
          </div>
        </div>
        <div className="col-span-12 order-3 lg:order-3 px-2">
          <div className="flex flex-col lg:w-[72vw] lg:flex-row items-center justify-center lg:justify-between my-4 space-y-2 lg:space-y-0">
            <button className="h-[40px] rounded hover:bg-d text-d hover:text-black duration-500 w-[200px] border border-d">
              Continue shopping
            </button>
            <button className="h-[40px] rounded hover:bg-d text-d hover:text-black duration-500 w-[200px] border border-d">
              Clear cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
