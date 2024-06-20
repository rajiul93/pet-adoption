import useCampaign from "@/Utils/Hook/Campaign/useCampaign";
import useAxiosSecure from "@/Utils/Hook/useAxiosSecure";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import PaymentCard from "./PaymentCard";
import RelatedCampaign from "./RelatedCampaign";

 

const CampaignCardDetails = () => {
    const {id} = useParams()
    const [campaign ] = useCampaign()
    const axiosSecure = useAxiosSecure();
    const {data={} , isLoading, refetch} = useQuery({
        queryKey:["campaign-details",id],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/donation-for-post/${id}`)
            return res.data
        }
    }) 
    if (isLoading) return <>Loading</> 
    return (
       <div>
         <article className="flex flex-col shadow mt-10"> 
    <a href="#" className="hover:opacity-75">
        <img src={data.photoURL} />
    </a>
    <div className="bg-white flex flex-col justify-start p-6">
        <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">{data.category}</a>
        <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">{data.petName}</a>
        <p href="#" className="text-sm pb-3">
             {data.sortDes}
        </p>
      
      <p>
        {data.longDes}
      </p>
      <div className=" flex flex-col md:flex-row justify-around  my-4 text-gray-600"><small>Email: {data.userEmail}</small><small>Max Donate: ${data.maxAmount}</small><small>Name: {data.userName}</small><small>Total Donated:{data.totalDonation && data.totalDonation}</small></div>
    </div>
<div className="flex justify-center">
<PaymentCard />
</div>
</article>
<RelatedCampaign />
       </div>
    );
};

export default CampaignCardDetails;