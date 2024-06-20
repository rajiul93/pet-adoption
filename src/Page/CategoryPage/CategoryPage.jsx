import useAxiosPublic from "@/Utils/Hook/useAxiosPublic";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import PetCard from "../PetListing/PetCard/PetCard";
import CategoryBanner from "./CategoryBanner/CategoryBanner";

const CategoryPage = () => {
  const axiosPublic = useAxiosPublic();
  const { category } = useParams();
  const { data: categoryPet, isLoading } = useQuery({
    queryKey: ["category-data"],
    queryFn: async () => {
      const data = await axiosPublic.get(`/pet-category/${category}`);
      return data.data;
    },
  });
  if(isLoading) return <>Loading</>
  return (
    <div>
      <CategoryBanner category={category} />
      <div className="pt-14 grid grid-cols-3 gap-4">
        {categoryPet.map((item) => (
          <PetCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
