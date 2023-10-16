import { useState } from "react";
import img1 from "../../../assets/img/panasonic_steam_iron_ni-v100n_104092.jpg";
import img2 from "../../../assets/img/xiaomi-mi-hair-clipper-fast-charging-rechargeable-hair-trimmer-with-two-speed-ceramic-cutter-enchen-boost.jpg";
import img3 from "../../../assets/img/xiaomi-wifi-repeater-pro-dual-antenna-300m.jpg";
import img4 from "../../../assets/img/xiaomi_wifi_repeater_pro.jpg";
const ProductImages = () => {
  const images = [
    {
      id: 1,
      link: img1,
    },
    {
      id: 2,
      link: img2,
    },
    {
      id: 3,
      link: img3,
    },
    {
      id: 4,
      link: img4,
    },
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);
  const filteredImages = images?.length > 4 ? images?.slice(0, 4) : images;

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="max-h-[100vh] min-h-[440px] flex flex-col items-center ">
      <div className="h-full w-full">
        <img
          src={currentImage?.link}
          alt="Main Product"
          className="cursor-pointer"
        />
      </div>
      <div className="w-[22%] flex justify-center gap-2">
        {filteredImages.map((image, index) => (
          <img
            key={index}
            src={image?.link}
            alt={`Product ${index}`}
            onClick={() => handleImageClick(image)}
            className={
              currentImage?.id === image.id
                ? "border-2 border-d"
                : "border-2 border-gray-300 hover:border-2 hover:border-d hover:cursor-pointer"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
