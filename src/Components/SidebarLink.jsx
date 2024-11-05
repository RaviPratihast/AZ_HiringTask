const SidebarLink = ({ icon, label, className }) => (
  <div
    className={`flex items-center  gap-5 font-normal text-[#000000] cursor-pointer ${className}`}
  >
    <span className="">{icon}</span>
    <span className="font-sans text-[24px]">{label}</span>
  </div>
);
export { SidebarLink };
