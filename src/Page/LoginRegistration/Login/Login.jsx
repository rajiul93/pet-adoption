import useAuth from "@/Provider/useAuth";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
const Login = () => {
  const { login } = useAuth();
  const location = useLocation()
  const navigate = useNavigate() 
 
   
  const {
    register,
    handleSubmit, 
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
   
    login(email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
     if (user) {
      navigate(location?.state ? location.state : "/");
     }

    })
    .catch(( ) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
    });
    toast.success('Here is your toast.')
  
      
    console.log(data);
  };
  return (
    <>
     <Toaster />
      <div className="h-screen bg-gradient-to-br flex flex-col justify-center items-center w-full">
        <div className="shadow-xl rounded-xl p-4">
          <SocialLogin />

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white px-10 py-8 rounded-xl w-screen  max-w-sm">
              <div className="space-y-4">
                <h1 className="text-center text-2xl font-semibold text-gray-600">
                  Login
                </h1>
                <hr />
                <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                  <input
                    className="pl-2 outline-none border-none w-full"
                    type="email"
                    name="email"
                    placeholder="Email"
                    {...register("email")}
                    required
                  />
                </div>
                <div className="flex items-center border-2 py-2 px-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" />
                  </svg>
                  <input
                    className="pl-2 outline-none border-none w-full"
                    {...register("password")}
                    type="password"
                    name="password"
                    id=""
                    placeholder="Password"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center items-center mt-4">
                <p className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
                  <input
                    type="checkbox"
                    id="rememberMeCheckbox"
                    name="rememberMe"
                    className="mr-2"
                  />
                  <span className="text-xs font-semibold">Remember me?</span>
                </p>
              </div>

              <button
                type="submit" 
                id="login"
                className="mt-6 w-full shadow-xl bg-gradient-to-tr from-blue-600 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000"
              >
                Login
              </button>
              <hr />
              <div className="flex justify-center items-center mt-4">
                <p className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
                  <span className="ml-2">
                    You dont have an account?
                    <Link
                      to="/registration"
                      className="text-xs ml-2 text-blue-500 font-semibold"
                    >
                      Register now &rarr;
                    </Link>
                  </span>
                </p>
              </div>
            </div>
            <div className="py-6 text-center text-base font-semibold leading-7">
              <p className="font-sans text-red-500 text-md hover:text-red-800">
                <Link to="/" className="absolute">
                  &larr; Home
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
