import { RiLogoutCircleLine } from "react-icons/ri";

function Logout() {
  return (
    <div>
      <a
        href="#"
        className="flex items-center gap-4 text-gray-400 hover:text-gray-200 transition-colors"
      >
        <RiLogoutCircleLine /> Logout
      </a>
    </div>
  );
}

export default Logout;
