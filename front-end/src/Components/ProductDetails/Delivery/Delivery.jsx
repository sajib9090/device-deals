import { FaRocket, FaRegCreditCard } from "react-icons/fa";
import { GoSync } from "react-icons/go";
import { ImBubbles } from "react-icons/im";
const Delivery = () => {
  return (
    <div className="h-full rounded w-full grid grid-cols-1 gap-6 sm:gap-0 sm:grid-cols-2 lg:grid-cols-1 bg-[#F4F4F4]">
      <div className="flex items-center w-full lg:h-[110px] px-2 sm:px-6 md:px-4 ">
        <div className="w-[25%]">
          <FaRocket className="w-10 h-10 text-d" />
        </div>
        <div className="w-[75%] space-y-2 border-b-2 border-gray-300 pb-2">
          <div>
            <h3 className="font-bold text-[#B979B9]">Free Delivery</h3>
          </div>
          <div>
            <p>For order over 10,000Tk</p>
            <p>Standard: 60/120Tk</p>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full lg:h-[110px] px-2 sm:px-6 md:px-4 ">
        <div className="w-[25%]">
          <GoSync className="w-10 h-10 text-d" />
        </div>
        <div className="w-[75%] space-y-2 border-b-2 border-gray-300 pb-2">
          <div>
            <h3 className="font-bold text-[#B979B9]">7 Days Return</h3>
          </div>
          <div>
            <p>If goods have problems</p>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full lg:h-[110px] px-2 sm:px-6 md:px-4 ">
        <div className="w-[25%]">
          <FaRegCreditCard className="w-10 h-10 text-d" />
        </div>
        <div className="w-[75%] space-y-2 border-b-2 border-gray-300 pb-2">
          <div>
            <h3 className="font-bold text-[#B979B9]">Secure Payment</h3>
          </div>
          <div>
            <p>100% secure payment</p>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full lg:h-[110px] px-2 sm:px-6 md:px-4 ">
        <div className="w-[25%]">
          <ImBubbles className="w-10 h-10 text-d" />
        </div>
        <div className="w-[75%] space-y-2 border-b-2 border-transparent sm:border-gray-300 lg:border-transparent pb-2">
          <div>
            <h3 className="font-bold text-[#B979B9]">10am-11pm Support</h3>
          </div>
          <div>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
