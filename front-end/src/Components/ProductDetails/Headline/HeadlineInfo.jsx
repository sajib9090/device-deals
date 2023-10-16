import StarRating from "../../StarRating/StarRating";

/* eslint-disable react/prop-types */
const Headline = ({ title, ratingsValue, totalReviews }) => {
  return (
    <div className="h-32 ">
      <h2 className="text-2xl py-4">{title}</h2>
      <div className="flex items-center space-x-10">
        <p className="flex items-center">
          <StarRating value={ratingsValue} size={24} /> ({ratingsValue})
        </p>
        <p className="text-blue-500">
          {totalReviews} <span>Reviews</span>
        </p>
      </div>
    </div>
  );
};

export default Headline;
