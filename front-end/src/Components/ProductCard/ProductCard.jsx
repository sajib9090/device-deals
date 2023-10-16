/* eslint-disable react/prop-types */
import StarRating from "../StarRating/StarRating";
import CurrencyFormatter from "../CurrencyFormatter/CurrencyFormatter";
const ProductCard = ({
  img,
  title,
  presentPrice,
  previousPrice,
  rating,
  reviews,
}) => {
  return (
    <div className="lg:h-[310px] bg-white">
      <div>
        <img
          className="object-cover max-h-[200px] rounded-[4px] cursor-pointer mx-auto"
          src={img}
          alt=""
        />
      </div>
      <div>
        <p className="pt-2 text-sm font-semibold hover:text-red-500 cursor-pointer text-blue-700">
          {title?.length > 45 ? title.slice(0, 45) + ".." : title}
        </p>
      </div>
      <div className="flex items-center">
        <StarRating value={rating} size={16} />
        <p className="text-blue-700 text-[10px] sm:text-sm ml-2">
          {reviews} <span>Reviews</span>
        </p>
      </div>
      <div className="flex items-center mt-2">
        <div className="flex items-center text-red-500">
          <p className="font-bold text-base">
            <CurrencyFormatter value={presentPrice} />
          </p>
        </div>
        <del className="text-gray-600 text-xs pl-2">
          <CurrencyFormatter value={previousPrice} />
        </del>
      </div>
    </div>
  );
};

export default ProductCard;
