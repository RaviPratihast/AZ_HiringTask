import { SlCalender } from "react-icons/sl";
import { BsBriefcase } from "react-icons/bs";
import { IoMdInformation } from "react-icons/io";

const Tabs = () => {
  return (
    <div className=" flex justify-between ">
      <div className="flex justify-evenly h-[3.9rem] w-[35rem] mb-6  ml-12 mt-[1rem] rounded-lg bg-gradient-to-b from-[#EFF5FF] to-[#EFF5FF00]">
        <button className=" h-[3.8rem] flex justify-center items-center gap-3 px-4">
          <SlCalender />
          Mentor Session
        </button>
        <button className="gradient-border gradient-border-wrapper flex justify-center items-center gap-3 px-6 my-2 rounded-lg shadow-lg shadow-[#29539B4D]">
          <BsBriefcase />
          Learning Material
        </button>
      </div>

      <div className="flex justify-evenly h-[3.9rem] w-[12.7rem] mb-6  ml-12 mt-[1rem] mr-12">
        <button className="border border-[#99E4FF] flex justify-center items-center gap-3 px-4 my-2 rounded-md">
          <IoMdInformation className="border border-black h-5 w-5 rounded-full" />
          How it works
        </button>
      </div>
    </div>
  );
};

export { Tabs };
