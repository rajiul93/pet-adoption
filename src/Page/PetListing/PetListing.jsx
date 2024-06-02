import Subscribe from "@/Share/Subscribe/Subscribe";
import CategoryDropdown from "./CategoryDropdown/CategoryDropdown";
import DateFilter from "./DateFilter/DateFilter";
import PetCard from "./PetCard/PetCard";

const PetListing = () => {
  return (
    <div className="">
      <div
        className="  w-full max-w-6xl p-8 md:min-h-96 md:flex flex-row-reverse justify-around items-center    my-14 rounded-xl object-cover bg-cover "
        style={{
          backgroundImage:
            "url(https://www.elegantthemes.com/layouts/wp-content/uploads/2020/08/pet-shop-61.jpg)",
        }}
      >
        <div>
        <h1>Pet Listing</h1>
        <p>egin the process of welcoming a new furry friend into your home</p>

        </div>
        <DateFilter />

      </div>
      <div className="flex justify-between">
        <div></div>
        <div className="flex gap-4">
          <div>
          </div>
          <div>
            <CategoryDropdown />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
      </div>
      <Subscribe />
    </div>
  );
};

export default PetListing;
