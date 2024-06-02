import { app } from "@/Firebase/firebase.config";
import useAuth from "@/Provider/useAuth";
import useAxiosPublic from "@/Utils/Hook/useAxiosPublic";
import { getAuth, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { ColorRing } from "react-loader-spinner";
import { Link, useLocation, useNavigate } from "react-router-dom";

const api = import.meta.env.VITE_IMG_API;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${api}`;
const Registration = () => {
  const location = useLocation()
  const navigate = useNavigate() 
  const auth = getAuth(app);
  const { loginWithEmailPassword } = useAuth();
  const [loading, setLoading] = useState(false);

  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const email = data.email;
    const password = data.password;
    const name = data.name;
    const imageFile = { image: data.image[0] };

    try {
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      }); 

      if (res.data.success) {
        const result = await loginWithEmailPassword(email, password);
        
        if (result) {
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: res?.data?.data?.display_url,
          })
            .then(() => {
    toast.success('Here is your toast.')

              setLoading(false);
             
      navigate(location?.state ? location.state : "/");
               
            })
            .catch(() => {
              // An error occurred
              // ...
              // console.log(error.message);
            });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen  dark:bg-gray-900">
     <Toaster />

      <div className="mx-auto max-w-6xl  overflow-hidden">
        <div className="flex justify-center px-6 py-12 ">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-xl rounded-xl">
            <div
              className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage:
                  "url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')",
              }}
            ></div>

            <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
              <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">
                Create an Account!
              </h3>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded"
              >
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      {...register("name")}
                      placeholder="First Name"
                    />
                    {errors.name && <span>This field is required</span>}
                  </div>
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="firstName"
                    >
                      Image
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      {...register("image")}
                      type="file"
                      placeholder="First Name"
                    />
                    {errors.image && <span>This field is required</span>}
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="Email"
                  />
                  {errors.email && <span>This field is required</span>}
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    htmlFor="email"
                  >
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    {...register("password")}
                    placeholder="Email"
                  />
                  {errors.password && <span>This field is required</span>}
                </div>

                <div className="mb-6 text-center">
                  <button
                    disabled={loading}
                    className="w-full flex justify-center items-center px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Registration
               {loading &&     <ColorRing
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
                    />}
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                    to="/login"
                  >
                    Already have an account? Login!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
