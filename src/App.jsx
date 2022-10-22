import { useState } from "react";
import BtnMenuMovil from "./components/BtnMenuMovil";
import Logo from "./components/Logo";
import Logout from "./components/Logout";
import Nav from "./components/Nav";

function App() {
  const [showMenu, setshowMenu] = useState(false);
  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };
  return (
    <div className="">
      <sidebar
        className={`bg-[#1E1F24] fixed ${
          showMenu ? "-left-0" : "-left-full"
        } lg:left-0 w-72 h-full p-8 flex flex-col justify-between transition-all`}
      >
        <div>
          <Logo />
          <Nav />
        </div>
        <Logout />
      </sidebar>
      <BtnMenuMovil toggleMenu={toggleMenu} showMenu={showMenu} />
    </div>
  );
}

export default App;
