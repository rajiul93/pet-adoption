import AdminProfile from "@/Dashboard/AdminDashboard/AdminProfile";
import Dashboard from "@/Dashboard/Dashboard/Dashboard";
import AddPet from "@/Dashboard/UserDashboard/AddPet/AddPet";
import AdoptionRequest from "@/Dashboard/UserDashboard/AdoptionRequest/AdoptionRequest";
import Campaign from "@/Dashboard/UserDashboard/Campaign/Campaign";
import MyDonation from "@/Dashboard/UserDashboard/MyDonation/MyDonation";
import MyPet from "@/Dashboard/UserDashboard/MyPet/MyPet";
import Profile from "@/Dashboard/UserDashboard/Profile/Profile";
import Blog from "@/Page/Blog/Blog";
import Details from "@/Page/Details/Details";
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
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pet-listing",
        element: <PetListing />,
      },
      {
        path: "/campaigns",
        element: (
          <PrivetRout>
            <DonationCamping />
          </PrivetRout>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/dashboard",
    element:<PrivetRout><Dashboard /></PrivetRout> ,
    children:[
      {
        index:true,
        element:<Profile />
      },
      {
        path: "/dashboard/add-pet",
        element: <AddPet />,
      },
      {
        path: "/dashboard/adoption-request",
        element: <AdoptionRequest />,
      },
      {
        path: "/dashboard/campaign",
        element: <Campaign />,
      },
      {
        path: "/dashboard/my-donation",
        element: <MyDonation />,
      },
      {
        path: "/dashboard/my-pet",
        element: <MyPet />,
      },
      {
        path: "/dashboard/admin-profile",
        element: <AdminProfile />,
      },
    ]
  },
]);
