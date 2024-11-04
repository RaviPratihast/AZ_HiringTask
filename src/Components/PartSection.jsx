import { ResourceItem } from "./index-component";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";
import { BsBarChart } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
const PartSection = ({
  partNumber,
  title,
  duration,
  difficulty,
  items,
  completion,
}) => (
  <div className="bg-white shadow-md rounded-lg  mb-4 ">
    <div className="flex flex-col justify-between p-4 gap-3 pb-2 border">
      <div className="flex justify-between w-full">
        <div>
          <h2 className="text-gray-900 ">PART {partNumber}</h2>
          <p className="font-bold text-lg">{title}</p>
        </div>
        <div className="flex items-center gap-2 space-x-2 text-lg text-gray-500 border pr-3">
          <div className="flex items-center gap-2">
            <IoMdTime className="text-2xl" />
            {duration}
          </div>
          <div className="flex items-center gap-2">
            <BsBarChart className="text-2xl" />
            {difficulty}
          </div>
          <div className="flex items-center">
            <HiOutlineDocumentDuplicate className="text-2xl" />
            {items.length < 5 ? "12" : items.length}
          </div>
          <div className="">
            <IoIosArrowUp className="font-extrabold text-black text-2xl" />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex justify-center items-center text-md h-[2rem] w-[8.2rem]  bg-[#EFF5FF]  rounded-md">
          {completion}% Completed
        </div>
      </div>
    </div>

    <div className=" bg-gray-200 h-3 rounded-lg ">
      <div
        className="bg-[#172B4DD9] h-full rounded-bl-[3rem]  rounded-br-[3rem]"
        style={{ width: `${completion}%` }}
      ></div>
    </div>
    <div className="mt-4 ">
      {items.map((item, index) => (
        <ResourceItem
          key={index}
          icon={item.icon}
          title={item.title}
          time={item.time}
        />
      ))}
    </div>
  </div>
);

export { PartSection };
