import { useState } from "react";
import CurrencyFormatter from "../../CurrencyFormatter/CurrencyFormatter";

/* eslint-disable react/prop-types */
const Info = ({ price, previousPrice, stock }) => {
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");
  const handleIncrease = () => {
    if (quantity >= stock) {
      return setError(`${quantity} টি এর বেশি স্টক নেই, দুঃখিত।`);
    } else if (stock > 0) {
      setQuantity(quantity + 1);
      setError("");
    }
  };
  const handleDecrease = () => {
    if (quantity == 1) {
      return;
    } else {
      setQuantity(quantity - 1);
      setError("");
    }
  };
  return (
    <div className="flex flex-col justify-between max-h-[100vh] min-h-[440px]">
      <div className="pt-12 md:pt-[20%]">
        <div className="flex items-center space-x-4">
          <h2 className="text-red-500 font-bold text-xl">
            <CurrencyFormatter value={price} />
          </h2>
          <p className="text-gray-400 text-sm">
            <del>
              <CurrencyFormatter value={previousPrice} />
            </del>
          </p>
        </div>
        <div className="">
          {stock > 0 ? (
            <p className="text-green-500 font-semibold">In stock</p>
          ) : (
            <p className="text-red-500 font-semibold">Out of stock</p>
          )}
        </div>
      </div>
      <div className="ml-6">
        <ul className="list-disc">
          <li>Plug & Play USB Microphone</li>
          <li>Compatible with Windows & MacBooks</li>
          <li>Comes with the full setup as shown in the picture</li>
          <li>Can be used Type-C Supported Mobile converter</li>
          <li>6 months warranty.</li>
        </ul>
      </div>
      <div className="md:flex flex-col pb-4">
        <p className="text-red-500 py-2">{error}</p>
        <div className="flex items-center space-x-2">
          <p>Quantity</p>
          <div>
            <button
              onClick={handleIncrease}
              className="border-l border-t border-b border-gray-400 w-8 h-8 rounded-l font-extrabold bg-gray-200"
            >
              +
            </button>
            <button className="w-12 h-8 border-t border-b border-gray-400">
              {quantity}
            </button>
            <button
              onClick={handleDecrease}
              className="border-r border-t border-b border-gray-400 w-8 h-8 rounded-r font-extrabold bg-gray-200"
            >
              -
            </button>
          </div>
        </div>
        <div>
          <button className="h-10 w-[180px] bg-d text-white font-semibold rounded mt-2 border border-d hover:border hover:border-d hover:bg-white hover:text-black duration-500">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
