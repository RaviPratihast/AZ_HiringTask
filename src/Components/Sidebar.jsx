import { GiHamburgerMenu } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import { TbBulb } from "react-icons/tb";
import { MdPeopleOutline } from "react-icons/md";
import { FaRegClipboard } from "react-icons/fa";
import { HiOutlineChartBar } from "react-icons/hi2";
import { FaRegStar } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className=" fixed top-[4rem] left-[4.9rem]  h-[35.38rem] w-[16.7rem] ">
      <div className="text-xl  font-bold flex justify-start ml-[1.6rem] items-centerh">
        <GiHamburgerMenu className="" />
        <h1 className="flex justify-start w-[12.1875rem] ml-3 font-extrabold">
          AlgoZenith
        </h1>
      </div>
      <nav className="space-y-4 ">
        <SidebarLink
          icon={<RxDashboard />}
          label="Dashboard"
          className={`w-[10.5rem] mt-[3rem] flex items-center gap-3 ml-5 text-base`}
        />
        <SidebarLink
          icon={<TbBulb />}
          label="Learn"
          className={`w-[10.5rem] mt-[3rem] flex items-center gap-3 ml-5 text-base`}
        />
        <SidebarLink
          icon={<MdPeopleOutline />}
          label="Forum"
          className={`w-[10.5rem] mt-[3rem] flex items-center gap-3 ml-5 text-base`}
        />
        <SidebarLink
          icon={<FaRegClipboard />}
          label="Upskill"
          className={`w-[10.5rem] bg-[#D6F4FF] pl-2 py-1 text-[#172B4D] font-sans font-extrabold mt-[3rem] flex items-center gap-3 ml-5 text-base`}
        />
        <SidebarLink
          icon={<HiOutlineChartBar />}
          label="Contest"
          className={`w-[10.5rem]mt-[3rem] flex items-center gap-3 ml-5 text-base`}
        />
        <SidebarLink
          icon={<FaRegStar />}
          label="Leaderboard"
          className={`w-[10.5rem]  mt-[3rem] flex items-center gap-3 ml-5 text-base`}
        />
      </nav>
    </div>
  );
};

const SidebarLink = ({ icon, label, className }) => (
  <div
    className={`flex items-center pl-2 py-1 rounded-sm font-sans font-normal text-[#000000] cursor-pointer ${className}`}
  >
    <span className="text-lg">{icon}</span>
    <span>{label}</span>
  </div>
);

export { Sidebar };
