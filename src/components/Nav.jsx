import {
  RiDashboard2Line,
  RiEarthFill,
  RiArrowDropDownLine,
  RiMessage3Line,
  RiCalendar2Line,
  RiCheckboxBlankCircleFill,
  RiSettings4Line,
  RiArrowDropUpFill,
} from "react-icons/ri";

function Nav() {
  return (
    <nav>
      <a
        href="#"
        className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
      >
        <RiDashboard2Line /> Analytic
      </a>
      <a
        href="#"
        className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
      >
        <RiEarthFill />
        <span className="flex-1 flex items-center justify-between gap-4">
          Social media <RiArrowDropDownLine />
        </span>
      </a>
      <a
        href="#"
        className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
      >
        <RiMessage3Line /> Message
      </a>
      <a
        href="#"
        className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
      >
        <RiCalendar2Line /> Schedule
      </a>
      <a
        href="#"
        className="flex flex-col gap-4 text-gray-200 py-2 hover:text-gray-200 transition-colors"
      >
        <span className="flex items-center gap-4">
          <RiSettings4Line className="text-orange-600" />
          <div className="flex-1 flex items-center justify-between">
            Settings
            <RiArrowDropUpFill />
          </div>
        </span>
        <nav className="border-l border-gray-600 flex flex-col ml-2">
          <a href="#" className="relative pl-8 py-2 text-gray-300">
            <RiCheckboxBlankCircleFill className="absolute -left-[7px] text-orange-600 text-sm top-[50%] -translate-y-[50%] p-[4px] bg-[#1E1F24] rounded-full" />
            Plan
          </a>
          <a href="#" className="relative pl-8 py-2 text-gray-400">
            <RiCheckboxBlankCircleFill className="absolute -left-[7px] text-gray-500 text-sm top-[50%] -translate-y-[50%] p-[4px] bg-[#1E1F24] rounded-full" />
            Security
          </a>
        </nav>
      </a>
    </nav>
  );
}

export default Nav;
