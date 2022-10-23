import { RiMenu4Fill, RiCloseLine } from "react-icons/ri";

function BtnMenuMovil({ toggleMenu, showMenu }) {
  return (
    <div>
      <button
        onClick={toggleMenu}
        className="lg:hidden fixed right-4 bottom-4 bg-[#1E1F24] text-orange-600 text-xl p-3 rounded-full z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu4Fill />}
      </button>
    </div>
  );
}

export default BtnMenuMovil;
