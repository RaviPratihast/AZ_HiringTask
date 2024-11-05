import { IoMdTime } from "react-icons/io";
const ResourceItem = ({ icon, title, time, isLastItem }) => {
  return (
    icon && (
      <div
        className={`flex items-center justify-between px-4  pb-10 relative  ${
          isLastItem ? "" : "border-gradient"
        }`}
      >
        <div className="flex items-center gap-2 ">
          <span className="pl-10">{icon}</span>
          <span className="text-[#000000] text-2xl font-light">{title}</span>
        </div>
        <div className="flex justify-center items-center text-xl gap-3 text-[#17384D] mr-8">
          <IoMdTime className="text-3xl font-light text-[#17384D]" />
          <span>{time}</span>
        </div>
      </div>
    )
  );
};

export { ResourceItem };
