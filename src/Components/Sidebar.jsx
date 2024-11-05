import { SidebarLink } from "./index-component";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import { TbBulb } from "react-icons/tb";
import { MdPeopleOutline } from "react-icons/md";
import { FaRegClipboard } from "react-icons/fa";
import { HiOutlineChartBar } from "react-icons/hi2";
import { FaRegStar } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="border border-red-500 ">
      <div className="text-xl  font-bold flex justify-start gap-1 pl-6  items-center">
        <GiHamburgerMenu className="text-2xl " />
        <h1 className="flex justify-start text-[#172B4D] text-2xl ">
          AlgoZenith
        </h1>
      </div>
      <nav className="space-y-4 text-[#172B4D] ">
        <SidebarLink
          icon={<RxDashboard />}
          label="Dashboard"
          className={` mt-[3rem] flex items-center gap-3 ml-5 text-base`}
        />
        <SidebarLink
          icon={<TbBulb />}
          label="Learn"
          className={`mt-[3rem] flex items-center gap-3 ml-5 text-base`}
        />
        <SidebarLink
          icon={<MdPeopleOutline />}
          label="Forum"
          className={`mt-[3rem] flex items-center gap-3 ml-5 text-base`}
        />
        <SidebarLink
          icon={<FaRegClipboard />}
          label="Upskill"
          className={`bg-[#D6F4FF] pl-2 py-1 text-[#172B4D] font-sans font-extrabold mt-[3rem] flex items-center gap-3 ml-5 text-base`}
        />
        <SidebarLink
          icon={<HiOutlineChartBar />}
          label="Contest"
          className={`t-[3rem] flex items-center gap-3 ml-5 text-base`}
        />
        <SidebarLink
          icon={<FaRegStar />}
          label="Leaderboard"
          className={` mt-[3rem] flex items-center gap-3 ml-5 text-base`}
        />
      </nav>
    </div>
  );
};

export { Sidebar };
