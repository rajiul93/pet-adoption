import useCampaign from "@/Utils/Hook/Campaign/useCampaign";
import useAxiosPublic from "@/Utils/Hook/useAxiosPublic";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import PaymentCard from "./PaymentCard";
import RelatedCampaign from "./RelatedCampaign";

 

const CampaignCardDetails = () => {
    const {id} = useParams()
    const [campaign ] = useCampaign()
    const axiosPublic = useAxiosPublic();
    const {data={} , isLoading, refetch} = useQuery({
        queryKey:["campaign-details",id],
        queryFn:async()=>{
            const res = await axiosPublic.get(`/donation-for-post/${id}`)
            return res.data
        }
    }) 
    if (isLoading) return <>Loading</> 
    const totalDonation = data?.amount?.map(e=>e.newAmount) 
    const maxDonate = Math.max(...totalDonation) || 0
    const total = totalDonation?.reduce((prev, current)=>prev + current, 0)
  
     
    return (
       <div>
         <article className="flex flex-col shadow mt-10"> 
    <figure  className="hover:opacity-75">
        <img src={data.photoURL} />
    </figure>
    <div className="bg-white flex flex-col justify-start p-6">
        <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">{data.category}</a>
        <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">{data.petName}</a>
        <p href="#" className="text-sm pb-3">
             {data.sortDes}
        </p>
      
      <p>
        {data.longDes}
      </p>
      <div className=" flex flex-col md:flex-row justify-around  my-4 text-gray-600">
        <small>Email: {data.userEmail}</small>
        <small>Max Donate: ${data.amount.length>0 &&  maxDonate}</small>
        <small>Name: {data.userName}</small>
        <small>Total Donated:{data?.amount?.length>0 && total}</small>
        </div>
    </div>
<div className="flex justify-center">
<PaymentCard id={id} image={data.photoURL} refetch={refetch} />
</div>
</article>
<RelatedCampaign />
       </div>
    );
};

export default CampaignCardDetails;