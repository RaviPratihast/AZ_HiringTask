import { Sidebar, TopBar } from "./Components/index-component";
const App = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-[#FFFFFF] to-[#F1FBFF]">
      {/* topbar */}
      <TopBar />
      {/* sidebar will come here */}
      <Sidebar />
    </div>
  );
};

export default App;
