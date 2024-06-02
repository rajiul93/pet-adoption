import { FaCat, FaDog } from "react-icons/fa6";
import { LuBird } from "react-icons/lu";
import { PiRabbitLight } from "react-icons/pi";

const PetCategory = () => {
  return (
    <div className="max-w-3xl mt-14 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 align-middle gap-6 items-center content-center p-4 ">
      <div className="bg-white shadow-xl hover:shadow-2xl cursor-pointer gap-4 flex flex-col justify-center items-center p-5 max-w-36 h-36 ">
        <FaCat className="text-3xl " /> <h1 className="uppercase text-xl font-semibold">Cat</h1>
      </div>
      <div className="bg-white shadow-xl hover:shadow-2xl cursor-pointer gap-4 flex flex-col justify-center items-center p-5 max-w-36 h-36 ">
        <FaDog className="text-3xl " /> <h1 className="uppercase text-xl font-semibold">Dog</h1>
      </div>
      <div className="bg-white shadow-xl hover:shadow-2xl cursor-pointer gap-4 flex flex-col justify-center items-center p-5 max-w-36 h-36 ">
        <LuBird className="text-3xl " /> <h1 className="uppercase text-xl font-semibold">Bird</h1>
      </div>
      
      <div className="bg-white shadow-xl hover:shadow-2xl cursor-pointer gap-4 flex flex-col justify-center items-center p-5 max-w-36 h-36 ">
        <PiRabbitLight className="text-3xl " />
        <h1 className="uppercase text-xl font-semibold">Rabbit</h1>
      </div>
      
    </div>
  );
};

export default PetCategory;
