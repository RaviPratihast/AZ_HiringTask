import { ImgComponent } from "./ImgComponent";
import Mentorsession from "../Assets/Mentorsession.svg";
import LearningMaterial from "../Assets/LearningMaterial.svg";
import Howitworks from "../Assets/Howitworks.svg";

const Tabs = () => {
  return (
    <div className=" flex justify-between">
      <div className="flex justify-evenly gap-3 rounded-lg bg-gradient-to-b mt-10 ml-10 mb-10 from-[#EFF5FF] to-[#EFF5FF00]">
        <div className="flex gap-7  pt-3 pl-6 pr-3 pb-2">
          <button className="  flex justify-center items-center gap-3  ">
            <ImgComponent
              src={Mentorsession}
              alt="Mentorsession"
              className="ml-5"
            />
            <span className="pt-3 pr-5 pb-3 text-xl">Mentor Sessions</span>
          </button>
          <button className="gradient-border gradient-border-wrapper font-semibold  flex justify-center items-center gap-3 shadow-lg shadow-[#29539B4D]">
            <ImgComponent
              src={LearningMaterial}
              alt="LearningMaterial"
              className="ml-5"
            />
            <span className="pt-3 pr-5 pb-3 text-xl">Learning Material</span>
          </button>
        </div>
      </div>

      <div className="flex justify-evenly ml-12 mt-12 mr-12 mb-10 rounded-md">
        <button className="border border-[#99E4FF] flex justify-center items-center gap-3   rounded-md">
          <ImgComponent src={Howitworks} alt="Howitworks" className="ml-4" />
          <span className="text-xl pt-3 pr-4 pb-3 text-[#172B4D] font-bold ">
            How it works
          </span>
        </button>
      </div>
    </div>
  );
};

export { Tabs };
