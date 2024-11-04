import { Sidebar, TopBar, Content } from "./Components/index-component";
const App = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-[#FFFFFF] to-[#F1FBFF]">
      <TopBar />
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;
