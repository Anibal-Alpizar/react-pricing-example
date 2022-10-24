import { FcGlobe, FcBiohazard } from "react-icons/fc";
import Card from "./Card";

function Plans() {
  return (
    <div className="text-gray-300 grid grid-cols-3 gap-8">
      <Card
        icon={<FcGlobe className="text-3xl my-6" />}
        plan="Personal"
        description="Perfect plan for starters"
        price="Free"
        for="For a Lifetime"
        details="lore ipsum dolor sit amet"
      />
      <Card
        icon={<FcBiohazard className="text-3xl my-6"  />}
      />
      <Card />
    </div>
  );
}

export default Plans;
