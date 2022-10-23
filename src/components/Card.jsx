import { RiCheckFill } from "react-icons/ri";

function Card(props) {
  return (
    <div>
      <div className="bg-[#1E1F24]">
        <div className="flex flex-col items-center">
          {props.icon}
          <h2 className="text-4xl">{props.plan}</h2>
          <p className="text-gray-500 mb-4">{props.description}</p>
          <h5 className="text-2xl uppercase tracking-[4px] font-bold">
            {props.price}
          </h5>
          <p className="text-gray-500 mb-8">{props.for}</p>
          <button className="bg-[#141517] py-2 px-8 rounded-lg hover:text-white transition-colors">
            Current plan
          </button>
        </div>
        <ul>
            {props.details.map((map)=>{
                
            })}

           


          
        </ul>
      </div>
    </div>
  );
}

export default Card;
