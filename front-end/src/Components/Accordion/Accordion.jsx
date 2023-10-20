import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const Accordion = () => {
  const items = [
    {
      id: 1,
      title: "Details",
      content: "Details content",
    },
    {
      id: 2,
      title: "More Information",
      content: "More information content",
    },
    {
      id: 3,
      title: "Reviews",
      content: "Reviews content",
    },
    {
      id: 4,
      title: "Product Questions",
      content: "Product question content",
    },
  ];
  return (
    <div className="w-full py-4">
      <div className="mx-auto w-full max-w-3xl rounded space-y-1 bg-white">
        {items?.map((item, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`${
                    open
                      ? "flex w-full justify-between rounded border border-d text-d bg-white px-4 py-2 text-left text-sm font-medium focus:outline-none"
                      : "flex w-full justify-between rounded border hover:border-d duration-700 bg-[#F4F4F4] px-4 py-2 text-left text-sm font-medium focus:outline-none"
                  }`}
                >
                  <span>{item?.title}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform text-d" : ""
                    } h-5 w-5 text-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  {item?.content}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
