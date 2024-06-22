import AdminProfile from "@/Dashboard/AdminDashboard/AdminProfile";
import Dashboard from "@/Dashboard/Dashboard/Dashboard";
import MyCampaignUpdate from "@/Dashboard/MyCampaignUpdate/MyCampaignUpdate";
import AddPet from "@/Dashboard/UserDashboard/AddPet/AddPet";
import AdoptionRequest from "@/Dashboard/UserDashboard/AdoptionRequest/AdoptionRequest";
import Campaign from "@/Dashboard/UserDashboard/Campaign/Campaign";
import MyCreateCampaign from "@/Dashboard/UserDashboard/MyCreateCampaign/MyCreateCampaign";
import MyDonation from "@/Dashboard/UserDashboard/MyDonation/MyDonation";
import MyPet from "@/Dashboard/UserDashboard/MyPet/MyPet";
import Profile from "@/Dashboard/UserDashboard/Profile/Profile";
import Blog from "@/Page/Blog/Blog";
import CampaignCardDetails from "@/Page/CampaignCardDetails/CampaignCardDetails";
import CategoryPage from "@/Page/CategoryPage/CategoryPage";
import Details from "@/Page/Details/Details";
import DonationCamping from "@/Page/DonationCamping/DonationCamping";
import Error from "@/Page/Error/Error";
import Home from "@/Page/Home/Home";
import Login from "@/Page/LoginRegistration/Login/Login";
import Registration from "@/Page/LoginRegistration/Login/Registration/Registration";
import PaymentPage from "@/Page/PaymentPage/PaymentPage";
import PetListing from "@/Page/PetListing/PetListing";
import PetUpdate from "@/Page/PetUpdate/PetUpdate";
import AdminRout from "@/PrivetRoute/AdminRout";
import PrivetRout from "@/PrivetRoute/PrivetRout";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root/Root";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<Error />,
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
        element:<PrivetRout> <Details /></PrivetRout> ,
      },
      {
        path: "/category/:category",
        element: <CategoryPage />,
      },
    
      {
        path: "/campaign-details/:id",
        element: <CampaignCardDetails />,
      },
      {
        path: "/payment-now/:id",
        element:   <PrivetRout><PaymentPage /></PrivetRout> ,
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
        path:"/dashboard/pet-update/:id",
        element:<PetUpdate />
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
        path: "/dashboard/campaign-update/:id",
        element: <MyCampaignUpdate />,
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
        element:<AdminRout> <AdminProfile /> </AdminRout>  ,
      },
      {
        path: "/dashboard/my-create-campaign",
        element: <MyCreateCampaign />,
      },
    ]
  },
]);
