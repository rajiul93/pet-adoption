import Subscribe from "@/Share/Subscribe/Subscribe";
import { useState } from "react";
import CategoryDropdown from "./CategoryDropdown/CategoryDropdown";
import PetListingContainer from "./PetListingContainer/PetListingContainer";

const PetListing = () => { 
  const [category, setCategory] = useState("")

  const handleCategory=(name)=>{
    setCategory(name)
 }
 console.log(category)
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
     

      </div>
      <div className="flex justify-between">
        <div></div>
        <div className="flex gap-4">
          <div>
          </div>
          <div>
            <CategoryDropdown handleCategory={handleCategory}/>
          </div>
        </div>
      </div>

      <div className="z-10">
        {/* {
          pet.map(item =><PetCard key={item._id} item={item}></PetCard>)
        } */}
        
     <PetListingContainer  category={category}/>
      </div>
      <Subscribe />
    </div>
  );
};

export default PetListing;
