import { SidebarLink } from "./index-component";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImgComponent } from "./index-component";
import Dashboard from "../Assets/Dashboard.svg";
import Learn from "../Assets/Learn.svg";
import Forum from "../Assets/Forum.svg";
import upskil from "../Assets/upskil.svg";
import contest from "../Assets/contest.svg";
import leaderboard from "../Assets/leaderboard.svg";

const Sidebar = () => {
  return (
    <div className="ml-[70px] mt-[64px]">
      <div className="text-xl  font-bold flex justify-start gap-6 pl-[20px]  items-center">
        <GiHamburgerMenu className="text-2xl ml-4" />
        <h1 className="flex justify-start text-[#172B4D] text-3xl ">
          AlgoZenith
        </h1>
      </div>
      <nav className="text-[#172B4D] mt-[59px] flex flex-col gap-10 ">
        <SidebarLink
          icon={<ImgComponent src={Dashboard} alt="Dashboard Icon" />}
          label="Dashboard"
          className="flex items-center pl-[28px] text-base "
        />
        <SidebarLink
          icon={<ImgComponent src={Learn} alt="Learn Icon" />}
          label="Learn"
          className={` flex items-center  pl-[28px] text-base`}
        />
        <SidebarLink
          icon={<ImgComponent src={Forum} alt="Forum Icon" />}
          label="Forums"
          className={` flex items-center  pl-[28px] text-base`}
        />
        <SidebarLink
          icon={<ImgComponent src={upskil} alt="upskill Icon" />}
          label="Upskill"
          className={`bg-[#D6F4FF] rounded-lg p-3 text-[#172B4D] font-sans font-black  flex items-center  pl-[28px] text-base`}
        />
        <SidebarLink
          icon={<ImgComponent src={contest} alt="Contest Icon" />}
          label="Contest"
          className={`flex items-center  pl-[28px] text-base`}
        />
        <SidebarLink
          icon={<ImgComponent src={leaderboard} alt="Leaderboard Icon" />}
          label="Leaderboard"
          className={`flex items-center  pl-[28px] text-base`}
        />
      </nav>
    </div>
  );
};

export { Sidebar };
