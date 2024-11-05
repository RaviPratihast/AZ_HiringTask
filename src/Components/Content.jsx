import { IoMdTime } from "react-icons/io";
import { Tabs, CourseContent } from "./index-component";
const Content = () => {
  return (
    <div className="h-auto border border-[#99E4FF] ml-[55px] mt-10 mr-16 rounded-lg ">
      <Tabs />
      <div className="flex">
        <span className="border border-[#A4E6FF] flex-grow ml-10 mr-10"></span>
      </div>

      <div className="flex   mt-10 ml-10">
        <div className="flex flex-col ">
          <li className="flex justify-between items-center  bg-[#EFF5FF] rounded-lg w-[342px] h-[100px]">
            <a
              href="#chapter1"
              className=" flex font-bold text-2xl pl-4 py-8"
              aria-label="Go to Chapter 1"
            >
              Chapter 1
            </a>
            <div className="flex items-center gap-2 pr-4 py-6">
              <IoMdTime
                className=" text-blue-500 text-2xl"
                aria-hidden="true"
              />
              <span className=" text-blue-500">05:00:00</span>
            </div>
          </li>
          <li className="flex justify-between items-center text-2xl py-6 pl-4">
            <a href="#chapter1" className="" aria-label="Go to Chapter 1">
              Chapter 2
            </a>
          </li>
          <li className="flex justify-between items-center  mt-4  py-6 pl-4">
            <a
              href="#chapter1"
              className="text-2xl"
              aria-label="Go to Chapter 1"
            >
              Chapter 3
            </a>
          </li>
          <li className="flex justify-between items-center  mt-4  py-6 pl-4">
            <a
              href="#chapter1"
              className="text-2xl"
              aria-label="Go to Chapter 1"
            >
              Chapter 4
            </a>
          </li>
          <li className="flex justify-between items-center mt-4 py-6 pl-4">
            <a
              href="#chapter1"
              className="text-2xl"
              aria-label="Go to Chapter 1"
            >
              Chapter 5
            </a>
          </li>
        </div>

        <div className="h-auto w-full">
          <CourseContent />
        </div>
      </div>
    </div>
  );
};

export { Content };
