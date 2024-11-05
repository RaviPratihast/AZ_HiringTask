import { SlCalender } from "react-icons/sl";
import { BsBriefcase } from "react-icons/bs";
import { IoMdInformation } from "react-icons/io";

const Tabs = () => {
  return (
    <div className=" flex justify-between ">
      <div className="flex justify-evenly border gap-3  rounded-lg mt-10 ml-10 bg-gradient-to-b from-[#EFF5FF] to-[#EFF5FF00]">
        <button className="  flex justify-center items-center gap-3 px-4">
          <SlCalender />
          Mentor Session
        </button>
        <button className="gradient-border gradient-border-wrapper font-semibold py-1 px-2 flex justify-center items-center gap-3 px-6 my-2 rounded-lg shadow-lg shadow-[#29539B4D]">
          <BsBriefcase />
          Learning Material
        </button>
      </div>

      <div className="flex justify-evenly mb-6  ml-12 mt-[1rem] mr-12">
        <button className="border border-[#99E4FF] flex justify-center items-center gap-3 px-4 my-2 rounded-md">
          <IoMdInformation className="border border-black h-5 w-5 rounded-full" />
          How it works
        </button>
      </div>
    </div>
  );
};

export { Tabs };
