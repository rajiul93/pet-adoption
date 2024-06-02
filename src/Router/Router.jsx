 
import Blog from "@/Page/Blog/Blog";
import DonationCamping from "@/Page/DonationCamping/DonationCamping";
import Home from "@/Page/Home/Home";
import Login from "@/Page/LoginRegistration/Login/Login";
import Registration from "@/Page/LoginRegistration/Login/Registration/Registration";
import PetListing from "@/Page/PetListing/PetListing";
import PrivetRout from "@/PrivetRoute/PrivetRout";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root/Root";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children:[
        {
          path:'/',
          element:<Home />
        },
        {
          path:'/pet-listing',
          element:<PetListing />
        },
        {
          path:'/campaigns',
          element:<PrivetRout><DonationCamping /></PrivetRout> 
        },
        {
          path:'/blog',
          element:<Blog />
        },
       
      ]
    },
    {
      path:'/login',
      element:<Login  />
    },
    {
      path:'/registration',
      element:<Registration  />
    },
  ]);