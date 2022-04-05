import Background from "./components/Background";
import Header from "./components/Header";
import Setting from "./components/setting/Setting";
import SideBar from "./components/SideBar";


function App() {
  return (
    <div className='relative'>
      <Background />
      <Header />
      <div className="flex w-full max-width m-auto">
        <SideBar />
        <Setting />
      </div>
    </div>
  );
}

export default App;
