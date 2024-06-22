import { useQuery } from "react-query";
import useAxiosPublic from "../useAxiosPublic";


const useCampaign = () => {
    const axiosPublic = useAxiosPublic();

   const {refetch,
    isPending, 
    data: campaign = [],
  } = useQuery({
    queryKey: ["campaign"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/donation-for-post`);
      return data;
    },
  });
      return [campaign,isPending,refetch]
};

export default useCampaign; 