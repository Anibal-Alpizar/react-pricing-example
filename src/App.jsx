import Logo from "./components/Logo";
import Logout from "./components/Logout";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="">
      <sidebar className="bg-[#1E1F24] fixed left-0 top-0 w-72 h-full p-8 flex flex-col justify-between">
        <div>
          <Logo />
          <Nav />
          <Logout />
        </div>
      </sidebar>
    </div>
  );
}

export default App;
