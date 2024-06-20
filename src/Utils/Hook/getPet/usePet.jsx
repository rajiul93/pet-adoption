import { useQuery } from "react-query";
import useAxiosPublic from "../useAxiosPublic";


const usePet = () => {
    const axiosPublic = useAxiosPublic();

   const {refetch,
    isPending, 
    data: pet = [],
  } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/adopt`);
      return data;
    },
  });
      return [pet,isPending,refetch]
};

export default usePet;



