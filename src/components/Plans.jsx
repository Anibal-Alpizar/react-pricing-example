import { FcGlobe, FcBiohazard, FcElectroDevices } from "react-icons/fc";
import Card from "./Card";

function Plans() {
  return (
    <div className="text-gray-300 grid grid-cols-3 gap-8">
      <Card
        icon={
          <FcGlobe className="text-7xl my-6 p-4 bg-purple-50 rounded-full " />
        }
        plan="Personal"
        description="Perfect plan for starters"
        price="Free"
        for="For a Lifetime"
        details="lore ipsum dolor sit amet"
        color="bg-[#1E1F24] "
        colorDesc="text-gray-500"
      />
      <Card
        icon={
          <FcBiohazard className="text-7xl my-6 p-4 bg-purple-50 rounded-full" />
        }
        plan="Personal"
        description="Perfect plan for starters"
        price="Free"
        for="For a Lifetime"
        details="lore ipsum dolor sit amet"
        color="bg-[#664EFA]"
        colorDesc="text-gray-300"
        colorWhite="text-white"
      />
      <Card
        icon={
          <FcElectroDevices className="text-7xl my-6 p-4 bg-purple-50 rounded-full" />
        }
        plan="Personal"
        description="Perfect plan for starters"
        price="Free"
        for="For a Lifetime"
        details="lore ipsum dolor sit amet"
        color="bg-[#1E1F24] "
        colorDesc="text-gray-500"
      />
    </div>
  );
}

export default Plans;
