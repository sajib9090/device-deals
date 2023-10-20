import { useLocation } from "react-router-dom";
import { useNavbarContext } from "../../GlobalContext/NavbarContext";
import { useEffect } from "react";
import HeadlineInfo from "./Headline/HeadlineInfo";
import ProductImages from "./ProductImages/ProductImages";
import Info from "./Info/Info";
import Delivery from "./Delivery/Delivery";
import DetailsMenu from "./DetailsMenu/DetailsMenu";

const ProductDetails = () => {
  const location = useLocation();
  const { setCondition } = useNavbarContext();
  useEffect(() => {
    if (location?.pathname) {
      setCondition(true);
    }
  }, [location, setCondition]);
  return (
    <div className="pt-6 pb-6 px-2">
      <HeadlineInfo
        title={"ZKTeco FR1200 Fingerprint Access Control and RFID Reader"}
        ratingsValue={4.6}
        totalReviews={166}
      />
      <div className="border-t border-gray-300"></div>
      <div className="grid grid-cols-12 gap-2 mt-2">
        <div className="col-span-12 sm:col-span-5 lg:col-span-4">
          <ProductImages />
        </div>
        <div className="border-b border-gray-300 col-span-12 sm:col-span-7 lg:col-span-5">
          <Info price={16554} previousPrice={18999} stock={10} />
        </div>
        <div className="max-h-[100vh] sm:min-h-[250px] col-span-12 lg:min-h-[440px] sm:col-span-12 lg:col-span-3 my-4 lg:my-0">
          <Delivery />
        </div>
      </div>
      {/* details menu */}
      <div>
        <DetailsMenu />
      </div>
      <div className="border-t border-gray-300"></div>
    </div>
  );
};

export default ProductDetails;
