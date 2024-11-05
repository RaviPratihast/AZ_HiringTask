const SidebarLink = ({ icon, label, className }) => (
  <div
    className={`flex items-center pl-2 py-1 rounded-sm font-sans font-normal text-[#000000] cursor-pointer ${className}`}
  >
    <span className="text-lg">{icon}</span>
    <span>{label}</span>
  </div>
);
export { SidebarLink };
