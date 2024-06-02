import Card from "./Card";
import { WhyAdopt } from "./WhyAdopt/WhyAdopt";

const AdoptPet = () => {
  return (

    <div className="max-w-6xl mx-auto p-2  " >
      <div className="text-center max-w-3xl mx-auto mt-14">
        <h1>Adopt a Pet - Give Them a Better Life</h1>
        <small>Pets Bring Joy and Love into Your Life</small>
      
      </div>

      <div className=" md:flex justify-around mt-10 items-center ">
        <div className="   border-red-500 border-4 w-2/3 max-w-[400px] shadow-xl rounded-full overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/45/0b/db/450bdb30d1c8f858b6635a1f5b23de3a.jpg"
            alt=""
          />
        </div>
        <div className="md:w-1/2 space-y-3">
          <h2>Why Adopt ?</h2>
          <WhyAdopt />
          <br />
        </div>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default AdoptPet;
