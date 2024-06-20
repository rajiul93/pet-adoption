import { useQuery } from "react-query";
import useAxiosSecure from "../useAxiosSecure";


const useCampaign = () => {
    const axiosSecure = useAxiosSecure();

   const {refetch,
    isPending, 
    data: campaign = [],
  } = useQuery({
    queryKey: ["campaign"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/donation-for-post`);
      return data;
    },
  });
      return [campaign,isPending,refetch]
};

export default useCampaign; 