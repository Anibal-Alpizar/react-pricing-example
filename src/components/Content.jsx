import {
  RiNotification3Line,
  RiArrowDropDownLine,
  RiCheckboxBlankCircleFill,
} from "react-icons/ri";

function Content() {
  return (
    <main className="pl-80">
      <header className="p-8 flex justify-end border-b border-gray-500">
        <ul className="flex items-center gap-4">
          <li>
            <a href="" className="relative text-white text-lg">
              <RiNotification3Line />
              <RiCheckboxBlankCircleFill className="text-orange-600 text-[8px] absolute -top-[2px] right-0" />
            </a>
          </li>
          <li>
            <a href="#" className="flex text-white items-center gap-2">
              <img
                src="https://img.freepik.com/fotos-premium/retrato-hermosa-mujer-afroamericana-positiva-estudio-amarillo_93675-144735.jpg"
                className="w-6 h-6 object-cover rounded-full ring-2 ring-gray-300"
              />
              Ferra Alexandra
              <RiArrowDropDownLine />
            </a>
          </li>
        </ul>
      </header>
    </main>
  );
}

export default Content;
