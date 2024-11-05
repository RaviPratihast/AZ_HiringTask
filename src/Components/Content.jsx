import { IoMdTime } from "react-icons/io";
import { Tabs, CourseContent } from "./index-component";
const Content = () => {
  return (
    <div className="h-auto border border-[#99E4FF] rounded-mdh">
      <Tabs />
      <div className="border flex">
        <div className="ml-12 flex flex-col">
          <li className="flex justify-between items-center border p-4">
            <a
              href="#chapter1"
              className="font-bold"
              aria-label="Go to Chapter 1"
            >
              Chapter 1
            </a>
            <div className="flex items-center space-x-2">
              <IoMdTime
                className=" text-blue-500 text-2xl"
                aria-hidden="true"
              />
              <span className=" text-blue-500">05:00:00</span>
            </div>
          </li>
          <li className="flex justify-between items-center  border p-4">
            <a href="#chapter1" className="" aria-label="Go to Chapter 1">
              Chapter 2
            </a>
          </li>
          <li className="flex justify-between items-center  border h-14 p-4">
            <a href="#chapter1" className="" aria-label="Go to Chapter 1">
              Chapter 3
            </a>
          </li>
          <li className="flex justify-between items-center  border h-14 p-4">
            <a href="#chapter1" className="" aria-label="Go to Chapter 1">
              Chapter 4
            </a>
          </li>
          <li className="flex justify-between items-center  border h-14 p-4">
            <a href="#chapter1" className="" aria-label="Go to Chapter 1">
              Chapter 5
            </a>
          </li>
        </div>

        <div className="h-auto w-full border-green-500">
          <CourseContent />
        </div>
      </div>
    </div>
  );
};

export { Content };
