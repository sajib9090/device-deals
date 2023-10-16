import Accordion from "../../Accordion/Accordion";

const DetailsMenu = () => {
  return (
    <>
      {/* big screen */}
      <div className="hidden md:mt-12 md:flex md:items-center md:justify-center md:w-full md:h-16">
        <ul className="flex items-center space-x-6 text-[#999999] text-xl font-semibold">
          <li className="cursor-pointer border-b-[3px] border-white hover:border-b-[3px] hover:border-d">
            Details
          </li>
          <li className="cursor-pointer border-b-[3px] border-white hover:border-b-[3px] hover:border-d">
            More Information
          </li>
          <li className="cursor-pointer border-b-[3px] border-white hover:border-b-[3px] hover:border-d">
            Reviews
          </li>
          <li className="cursor-pointer border-b-[3px] border-white hover:border-b-[3px] hover:border-d">
            Product Questions
          </li>
        </ul>
      </div>
      {/* small screen */}
      <div className="block md:hidden">
        <Accordion />
      </div>
    </>
  );
};

export default DetailsMenu;
