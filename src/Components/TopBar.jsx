import { GoBellFill } from "react-icons/go";
import { Avatar } from "./Avatar";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center gap-5 pt-[58px] ml-auto">
      <GoBellFill className="text-3xl h w-auto h-auto  bg-[#E7F8FF] px-4 py-3 rounded-md" />
      <Avatar />
    </div>
  );
};

export { TopBar };
