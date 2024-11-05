import { Sidebar, TopBar, Content } from "./Components/index-component";
const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <TopBar />
        <Content />
      </div>
    </div>
  );
};

export default App;
