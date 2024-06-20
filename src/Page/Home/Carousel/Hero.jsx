import { Button } from "@/components/ui/button";
import Slider from "../Slider/Slider";

const Hero = () => {
  return (
    <div className="flex-row-reverse z-0 md:flex max-w-6xl px-2 mx-auto justify-around rounded-3xl min-h-[500px] md:p-10  mt-10 " style={{backgroundColor: "#483786"}}>
      
      <div>
        <Slider />
      </div>
      <div className="md:w-2/3 p-4 space-y-8 text-white">
        <h1 className=" font-bold w-1/2 uppercase ">
         Peat adopton 
        </h1>
        <p className="w-full md:w-2/3 text-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          perferendis hic sequi doloribus voluptas molestias asperiores soluta
          magni! 
        </p>

 
<Button className='bg-red-700 py-7 px-14'> Peat Listing</Button>
 
      </div>
     
    </div>
  );
};

export default Hero;
