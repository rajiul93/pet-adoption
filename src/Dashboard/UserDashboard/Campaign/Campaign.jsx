import useAuth from "@/Provider/useAuth";
import useAxiosPublic from "@/Utils/Hook/useAxiosPublic";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
const api = import.meta.env.VITE_IMG_API;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${api}`;
const Campaign = () => {

  const {
    register,
    handleSubmit, 
    formState: { errors },
  } = useForm()
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [loader, setLoader] = useState(false)

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const petName =data.petName
    const title =data.title
    const category =data.category
    const sortDes =data.sortDes
    const date =data.date
    const maxAmount =parseInt(data.amount)
    const longDes =data.longDes
    const userEmail= user.email;
    const userName = user.displayName
    const totalDonation = user.totalDonation
    try {
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      const photoURL = res?.data?.data?.display_url;

      if (res.data.success) {
        const campaignInfo = {
          petName,
          title,
          sortDes,
          date,
          maxAmount,
          longDes,
          category,
          userEmail,
          photoURL,
          userName,
          totalDonation
        };
        console.log(campaignInfo)
        const res = await axiosPublic.post("/donation-for-post", campaignInfo) 
        if (res.data.acknowledged) {
          toast.success("successfully saved")
          setLoader(false)
        }
      }
    } catch (error) {
      //
    }
  }
  return (
    <div className=" mx-2 md:mx-14 mt-10 border-2 md:border-blue-400 rounded-lg">
    <Toaster />
      <div className="mt-10 text-center font-bold">Campaign</div>
      <div className="mt-3 text-center text-4xl font-bold">
        Make an Campaign
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="md:p-8">
        <div className="md:flex gap-4">
         <div className="w-full">
         <input
            type="Name"
            name="name"
            {...register("title", {required:true})}
            className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Title  *"
          />
          {errors.title && <span>This field is required</span>}
         </div>
        <div className="w-full">
        <input
            type="text" 
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
                {...register("category", { required: true })}
                name="category"
                className="border uppercase border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                required
              >
                <option className="uppercase" value="">
                  Select pet
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
            {...register("date", {required:true})}

            className="mt-1 block md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Title  *"
          />
          {errors.date && <span>This field is required</span>}
    </div>

   <div className="w-full">
   <input
            type="file"
            name="email"
            {...register("image", {required:true})}

            className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Pet Name *"
          />
          {errors.image && <span>This field is required</span>}

   </div>
        </div>
        <div className="flex w-full mb-6 gap-4">
          <input
            type="number"
            {...register("amount", {required:true})}
 
            className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Set your Max amount"
          />
          <br />
          {errors.amount && <span>This field is required price</span>}
        
        </div>
        <div className="">
          <textarea
            {...register("longDes", {required:true})}

            name="textarea"
            id="text"
            cols="30"
            rows="10"
            className="mb-10 h-40 w-full resize-none rounded-md border
             border-slate-300 p-5 font-semibold text-gray-300"
          >
            Message
          </textarea>
          <br />
          {errors.longDes && <span>This field is required</span>}

        </div>
        <div className="text-center">
          <button className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">
            Create an Campaign
          </button>
        </div>
      </form>
    </div>
  );
};

export default Campaign;
