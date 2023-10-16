import { Link, useLocation } from "react-router-dom";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import product1 from "../../../assets/img/panasonic_steam_iron_ni-v100n_104092.jpg";
import product2 from "../../../assets/img/xiaomi-mi-hair-clipper-fast-charging-rechargeable-hair-trimmer-with-two-speed-ceramic-cutter-enchen-boost.jpg";
import product3 from "../../../assets/img/xiaomi-wifi-repeater-pro-dual-antenna-300m.jpg";
import product4 from "../../../assets/img/xiaomi_wifi_repeater_pro.jpg";
import { useNavbarContext } from "../../../GlobalContext/NavbarContext";
import { useEffect } from "react";

const Home = () => {
  const location = useLocation();
  const { setCondition } = useNavbarContext();
  useEffect(() => {
    if (location?.pathname) {
      setCondition(false);
    }
  }, [location, setCondition]);
  return (
    <div className="bg-white">
      <div className="p-2 lg:p-4">
        <input
          className="w-full py-2 px-4 bg-gray-200"
          type="search"
          placeholder="I'm looking for..."
        />
      </div>
      <div className="px-2 lg:px-4 rounded">
        <div className="h-[50px] bg-gray-200 flex justify-between items-center px-2 lg:px-4">
          <div>
            <p>266 products found</p>
          </div>
          <div>
            <label>Sort by:</label>
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
            </select>
          </div>
        </div>
      </div>
      <div className="px-2 lg:px-4 pt-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-4 lg:gap-2">
          <Link to={"product-details"}>
            <ProductCard
              img={product2}
              title={"Rode NT-USB Mini Studio-Quality USB Condenser microphone"}
              presentPrice={12000}
              previousPrice={15000}
              reviews={222}
              rating={4.7}
            />
          </Link>
          <ProductCard
            img={product3}
            title={"Rode NT-USB Mini Studio-Quality USB Condenser microphone"}
            presentPrice={12000}
            previousPrice={15000}
            reviews={222}
            rating={4.7}
          />
          <ProductCard
            img={product4}
            title={"Rode NT-USB Mini Studio-Quality USB Condenser microphone"}
            presentPrice={12000}
            previousPrice={15000}
            reviews={222}
            rating={4.7}
          />
          <ProductCard
            img={product1}
            title={"Rode NT-USB Mini Studio-Quality USB Condenser microphone"}
            presentPrice={12000}
            previousPrice={15000}
            reviews={222}
            rating={4.7}
          />
          <ProductCard
            img={product2}
            title={"Rode NT-USB Mini Studio-Quality USB Condenser microphone"}
            presentPrice={12000}
            previousPrice={15000}
            reviews={222}
            rating={4.7}
          />
          <ProductCard
            img={product3}
            title={"Rode NT-USB Mini Studio-Quality USB Condenser microphone"}
            presentPrice={12000}
            previousPrice={15000}
            reviews={222}
            rating={4.7}
          />
          <ProductCard
            img={product4}
            title={"Rode NT-USB Mini Studio-Quality USB Condenser microphone"}
            presentPrice={12000}
            previousPrice={15000}
            reviews={222}
            rating={4.7}
          />
          <ProductCard
            img={product1}
            title={"Rode NT-USB Mini Studio-Quality USB Condenser microphone"}
            presentPrice={12000}
            previousPrice={15000}
            reviews={222}
            rating={4.7}
          />
          <ProductCard
            img={product2}
            title={"Rode NT-USB Mini Studio-Quality USB Condenser microphone"}
            presentPrice={12000}
            previousPrice={15000}
            reviews={222}
            rating={4.7}
          />
          <ProductCard
            img={product3}
            title={"Rode NT-USB Mini Studio-Quality USB Condenser microphone"}
            presentPrice={12000}
            previousPrice={15000}
            reviews={222}
            rating={4.7}
          />
          <ProductCard
            img={product4}
            title={"Rode NT-USB Mini Studio-Quality USB Condenser microphone"}
            presentPrice={12000}
            previousPrice={15000}
            reviews={222}
            rating={4.7}
          />
          <ProductCard
            img={product1}
            title={"Rode NT-USB Mini Studio-Quality USB Condenser microphone"}
            presentPrice={12000}
            previousPrice={15000}
            reviews={222}
            rating={4.7}
          />
          <ProductCard
            img={product2}
            title={"Rode NT-USB Mini Studio-Quality USB Condenser microphone"}
            presentPrice={12000}
            previousPrice={15000}
            reviews={222}
            rating={4.7}
          />
          <ProductCard
            img={product3}
            title={"Rode NT-USB Mini Studio-Quality USB Condenser microphone"}
            presentPrice={12000}
            previousPrice={15000}
            reviews={222}
            rating={4.7}
          />
          <ProductCard
            img={product4}
            title={"Rode NT-USB Mini Studio-Quality USB Condenser microphone"}
            presentPrice={12000}
            previousPrice={15000}
            reviews={222}
            rating={4.7}
          />
          <ProductCard
            img={product1}
            title={"Rode NT-USB Mini Studio-Quality USB Condenser microphone"}
            presentPrice={12000}
            previousPrice={15000}
            reviews={222}
            rating={4.7}
          />
          <ProductCard
            img={product2}
            title={"Rode NT-USB Mini Studio-Quality USB Condenser microphone"}
            presentPrice={12000}
            previousPrice={15000}
            reviews={222}
            rating={4.7}
          />
          <ProductCard
            img={product3}
            title={"Rode NT-USB Mini Studio-Quality USB Condenser microphone"}
            presentPrice={12000}
            previousPrice={15000}
            reviews={222}
            rating={4.7}
          />
          <ProductCard
            img={product4}
            title={"Rode NT-USB Mini Studio-Quality USB Condenser microphone"}
            presentPrice={12000}
            previousPrice={15000}
            reviews={222}
            rating={4.7}
          />
          <ProductCard
            img={product1}
            title={"Rode NT-USB Mini Studio-Quality USB Condenser microphone"}
            presentPrice={12000}
            previousPrice={15000}
            reviews={222}
            rating={4.7}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
