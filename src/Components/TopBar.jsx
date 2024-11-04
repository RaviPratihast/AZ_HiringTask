import { GoBellFill } from "react-icons/go";
import { Avatar } from "./Avatar";

const TopBar = () => {
  return (
    <div className="fixed top-[3.7rem] right-[6rem] w-[9.3rem] h-[4.1rem] - flex justify-between items-center">
      <GoBellFill className="text-3xl h w-auto h-auto  bg-[#E7F8FF] px-4 py-3 rounded-md" />
      <Avatar />
    </div>
  );
};

export { TopBar };
