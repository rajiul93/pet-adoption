import useAuth from "@/Provider/useAuth";
import useAxiosPublic from "@/Utils/Hook/useAxiosPublic";
import useAxiosSecure from "@/Utils/Hook/useAxiosSecure";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";



const MyCampaignUpdate = () => {
    const {id} = useParams()
    const axiosSecure = useAxiosSecure()
    const {data:singleCampaign={}} = useQuery({
        queryKey:["my-donation"],
        queryFn:async()=>{
          const {data} = await axiosSecure.get(`/single-campaign/${id}`)
          return data;
        }
      })
      console.log(singleCampaign)
    const {
        register,
        handleSubmit, 
        formState: { errors },
      } = useForm()
      const axiosPublic = useAxiosPublic();
      const { user } = useAuth();
      const [loader, setLoader] = useState(false)
    
      const onSubmit = async (data) => {
        const date =data.date;
        const specificDate = new Date(date)
    
    
    const todayDate = new Date()
     const otherDate = new Date(todayDate);
    
    
     const differenceInTime = specificDate.getTime() - otherDate.getTime();
    
     // Calculate the difference in days
     const differenceInDays = (differenceInTime / (1000 * 3600 * 24))+1;
    if (differenceInDays<2) {
      return toast.error("minimum 2 days campaign needed")
    }
    console.log(differenceInDays)
    
     
        const petName =data.petName
        const title =data.title
        const category =data.category
        const sortDes =data.sortDes
        const amount =[]
        const longDes =data.longDes
        const userEmail= user.email;
        const userName = user.displayName
        const totalDonation = user.totalDonation
        try {
        
    
     
            const campaignInfo = {
              petName,
              title,
              sortDes,
              date,
              amount,
              longDes,
              category,
              userEmail,
              userName,
              totalDonation
            };
            console.log(campaignInfo)
            const res = await axiosPublic.patch(`/donation-update/${id}`, campaignInfo) 
            if (res.data.acknowledged) {
              toast.success("successfully Update")
              setLoader(false)
            }
          
        } catch (error) {
          //
        }
      }


    return (
        <div className=" mx-2 md:mx-14 mt-10 border-2 md:border-blue-400 rounded-lg">
            <img src={singleCampaign.photoURL} className="w-24 text-center mx-auto mt-3" alt="" />
        <Toaster />
          <div className="mt-10 text-center font-bold">Campaign</div>
          <div className="mt-3 text-center text-4xl font-bold">
          Update Campaign

          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="md:p-8">
            <div className="md:flex gap-4">
             <div className="w-full">
             <input
                type="Name"
                name="name"
                defaultValue={singleCampaign.title}
                {...register("title", {required:true})}
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Title  *"
              />
              {errors.title && <span>This field is required</span>}
             </div>
            <div className="w-full">
            <input
                type="text" 
                defaultValue={singleCampaign.petName}

                {...register("petName", {required:true})}
    
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Pet Name *"
              />
              {errors.petName && <span>This field is required</span>}
    
            </div>
            </div>
            <div className="my-6 md:flex gap-4">
              <div className="w-full">
              <select
                defaultValue={singleCampaign.category}

                    {...register("category", { required: true })}
                    name="category"
                    className="border uppercase border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                    required
                  >
                    <option className="uppercase" value={singleCampaign.category}>
                    {singleCampaign.category}
                    </option>
                    <option className="uppercase" value="BIRD">
                      bird
                    </option>
                    <option className="uppercase" value="CAT">
                      cat
                    </option>
                    <option className="uppercase" value="DOG">
                      dog
                    </option>
                    <option className="uppercase" value="RABBIT">
                      rabbit
                    </option>
                  </select>
                  {errors.category && <span>This field is required</span>}
    
              </div>
            <div className="w-full">
            <input
                type="text"
                name="email"
                defaultValue={singleCampaign.sortDes}

                {...register("sortDes", {required:true})}
    
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Short description *"
              />
              {errors.sortDes && <span>This field is required</span>}
    
            </div>
            </div>
            <div className="md:flex mb-6 gap-4">
        <div className="w-full">
        <input
                type="date"
                name="name"
                defaultValue={singleCampaign.date}

                {...register("date", {required:true})}
    
                className="mt-1 block md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Title  *"
              />
              {errors.date && <span>This field is required</span>}
        </div>
    
     
            </div>
         
           
            <div className="text-center">
              <button className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">
               Update Campaign
              </button>
            </div>
          </form>
        </div>
    );
};

export default MyCampaignUpdate;