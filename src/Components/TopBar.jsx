import { GoBellFill } from "react-icons/go";
import { Avatar } from "./Avatar";

const TopBar = () => {
  return (
    <div className="flex justify-between  items-center  gap-[24.6px] mt-[58px] mr-[64px] ml-auto">
      <GoBellFill className="text-2xl h w-auto h-auto text-[#172B4D]  bg-[#E7F8FF] px-4 py-3 rounded-md" />
      <Avatar />
    </div>
  );
};

export { TopBar };
