import { IoMdTime } from "react-icons/io";
const ResourceItem = ({ icon, title, time }) => (
  <div className="flex items-center justify-between py-2 px-4 ">
    <div className="flex items-center space-x-2">
      <span>{icon}</span>
      <span className="text-gray-800">{title}</span>
    </div>
    <div className="flex justify-center items-center  text-xl gap-3">
      <IoMdTime className="text-3xl font-light" />
      {time}
    </div>
  </div>
);

export { ResourceItem };
