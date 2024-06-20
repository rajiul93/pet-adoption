import useAuth from "@/Provider/useAuth";
import useAxiosPublic from "@/Utils/Hook/useAxiosPublic";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";


import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { ColorRing } from "react-loader-spinner";
























const api = import.meta.env.VITE_IMG_API;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${api}`;
const AddPet = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [loader, setLoader] = useState(false);
 
  const today = new Date();

  const [state, setState] = useState([
    {
      startDate: today,
      endDate: today,
      key: 'selection'
    }
  ]);
const date  = state[0].startDate

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  

  const onSubmit = async (data) => {
    setLoader(true);
    const imageFile = { image: data.image[0] };

    const email = user?.email;
    const name = data.name;
    const age = data.age;
    const phone = data.phone;
    const district = data.district;
    const division = data.division;
    const category = data.category;
    const message = data.message;
    const status = "waiting";

    try {
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      const photoURL = res?.data?.data?.display_url;

      if (res.data.success) {
        const petInfo = {
          email,
          name,
          age,
          phone,
          district,
          division,
          category,
          message,
          photoURL,
          status,
          date
        };
        const res = await axiosPublic.post("/adopt-post", petInfo);
        console.log(res.data);
        if (res.data.acknowledged) {
          toast.success("successfully saved");
          setLoader(false);
        }
      }
    } catch (error) {
      //
    }
  };
  return (
    <div>
      <Toaster />
      <div className="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
        <h2 className="text-2xl font-medium mb-4 uppercase">
          Add a New pet for adoption
        </h2>
      

        <DateRange
        editableDateInputs={false}
        onChange={item => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
        showDateDisplay={false}
      />


        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              id="name"
              name="name"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className="md:flex gap-6 w-full">
            <div className="mb-4 w-full">
              <label className="block text-gray-700 font-medium mb-2">
                Age
              </label>
              <input
                {...register("age", { required: true })}
                type="number"
                id="age"
                name="age"
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                required
              />
              {errors.age && <span>This field is required</span>}
            </div>
            <div className="mb-4 w-full">
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                {...register("phone", { required: true })}
                type="number"
                name="phone"
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                required
              />
              {errors.phone && <span>This field is required</span>}
            </div>
          </div>
          <div className="md:flex w-full gap-6">
            <div className="mb-4 w-full">
              <label className="block text-gray-700 font-medium mb-2">
                Location <small>District</small>
              </label>
              <input
                {...register("district", { required: true })}
                type="text"
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                required
              />
              {errors.district && <span>This field is required</span>}
            </div>
            <div className="mb-4 w-full">
              <label className="block text-gray-700 font-medium mb-2">
                Division
              </label>
              <input
                {...register("division", { required: true })}
                type="text"
                name="division"
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                required
              />
              {errors.division && <span>This field is required</span>}
            </div>
          </div>
          <div className="md:flex w-full gap-6">
            <div className="mb-4 w-full">
              <label className="block text-gray-700 font-medium mb-2">
                Pet Category
              </label>
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
            <div className="mb-4 w-full">
              <label className="block text-gray-700 font-medium mb-2">
                Image
              </label>
              <input
                {...register("image", { required: true })}
                type="file"
                name="image"
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                required
              />
              {errors.image && <span>This field is required</span>}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              {...register("message", { required: true })}
              id="message"
              name="message"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              rows="5"
            ></textarea>
            {errors.message && <span>This field is required</span>}
          </div>
          <div>
            <button
              type="submit"
              disabled={loader}
              className="bg-blue-500 flex justify-center items-center text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Submit{" "}
              {loader && (
                <ColorRing
                  visible={true}
                  height="40"
                  width="40"
                  ariaLabel="color-ring-loading"
                  wrapperStyle={{}}
                  wrapperClass="color-ring-wrapper"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPet;
