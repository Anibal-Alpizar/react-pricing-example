import { FcGlobe } from "react-icons/fc";
import Card from "./Card";

function Plans() {
  return (
    <div className="text-gray-300 grid grid-cols-3 gap-8">
      <Card
        icon={<FcGlobe className="text-3xl" />}
        plan="Personal"
        description="Perfect plan for starters"
        price="Free"
        for="For a Lifetime"
        details = {[
            "Unlimited access to all courses",
            "Unlimited access to all courses",
            "Unlimited access to all courses",
            "Unlimited access to all courses", 
        ]}
      />
      <Card />
      <Card />
    </div>
  );
}

export default Plans;
