import { ResourceItem } from "./index-component";
import { IoIosArrowUp } from "react-icons/io";
import { ImgComponent } from "./index-component";
import clockOutline from "../Assets/clockOutline.svg";
import ChartBarOutline from "../Assets/ChartBarOutline.svg";
import DocumentDuplicateOutline from "../Assets/DocumentDuplicateOutline.svg";
const PartSection = ({
  partNumber,
  title,
  duration,
  difficulty,
  items,
  completion,
}) => (
  <div className="bg-white shadow-md rounded-2xl border  mr-10 mb-4">
    <div className="flex flex-col justify-between mr-10">
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-4  mt-8 ml-8">
          <h2 className="text-gray-900 text-2xl ">PART {partNumber}</h2>
          <p className="font-bold text-2xl">{title}</p>
        </div>
        <div className="flex items-center gap-4 text-lg text-gray-500  mt-10 mr-7 pr-3">
          <div className="flex items-center gap-2">
            <ImgComponent src={clockOutline} className="text-2xl" />
            <span className="text-[#17384D]"> {duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <ImgComponent src={ChartBarOutline} className="text-2xl" />
            <span className="text-[#17384D]">{difficulty}</span>
          </div>
          <div className="flex items-center">
            <ImgComponent src={DocumentDuplicateOutline} className="text-2xl" />
            <span className="text-[#608AD2]">
              {items.length < 5 ? "12" : items.length}
            </span>
          </div>
          <div className="">
            <IoIosArrowUp className="font-black  text-[#17384D] text-2xl " />
          </div>
        </div>
      </div>
      <div className="flex justify-end  mb-4 mt-6  mr-7  ">
        <div className="flex justify-center items-center text-md border border-[#99E4FF] bg-[#EFF5FF] py-1 px-2 rounded-md">
          {completion}% Completed
        </div>
      </div>
    </div>
    <div className="bg-gray-200 h-3 rounded-bl-2xl  rounded-br-2xl">
      <div
        className="bg-[#172B4DD9] h-full rounded-bl-2xl"
        style={{ width: `${completion}%` }}
      ></div>
    </div>

    {items.length > 0 && (
      <div className="flex flex-col gap-10 mt-10 mr-10 ">
        {items.map((item, index) => (
          <ResourceItem
            key={index}
            icon={item.icon}
            title={item.title}
            time={item.time}
            isLastItem={index === items.length - 1}
          />
        ))}
      </div>
    )}
  </div>
);

export { PartSection };
