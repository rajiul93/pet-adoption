import { BiDonateHeart } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaHouse } from "react-icons/fa6";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdDomain, MdOutlineCampaign, MdPets } from "react-icons/md";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
const DashboardNav = () => {
  return (
  
        <>
        
     <div className=" md:flex flex-col md:w-64 bg-gray-800">        <div className="flex items-center justify-center h-16 bg-gray-900">
          <span className="text-white font-bold uppercase">
             Dashboard
          </span>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-2 py-4 bg-gray-800">
            <NavLink
              to="/dashboard"
              className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
            >
            <CgProfile className="text-4xl md:text-xl mr-2"/>
              <span className="hidden md:block">Profile</span>
            </NavLink>
            <NavLink
              to="/dashboard/add-pet"
              className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
            >
            <IoMdAddCircleOutline  className="text-4xl md:text-xl mr-2"/>
              <span className="hidden md:block">Add Pet</span>
            </NavLink>
            <NavLink
              to="/dashboard/adoption-request"
              className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
            >
            <VscGitPullRequestGoToChanges className="text-4xl md:text-xl mr-2"/>
              <span className="hidden md:block">Adoption Request</span>
            </NavLink>
            <NavLink
              to="/dashboard/campaign"
              className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
            >
            <MdOutlineCampaign className="text-4xl md:text-xl mr-2"/>
             <span className="hidden md:block">Create Campaign</span>
            </NavLink>
            <NavLink
              to="/dashboard/my-donation"
              className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
            >
            <BiDonateHeart className="text-4xl md:text-xl mr-2"/>
             <span className="hidden md:block">My Donation</span>
            </NavLink>
            <NavLink
              to="/dashboard/my-pet"
              className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
            >
            <MdPets className="text-4xl md:text-xl mr-2"/>
              <span className="hidden md:block">My Added Pet</span>
            </NavLink>
          
            <NavLink
              to="/dashboard/my-create-campaign"
              className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
            >
            <MdPets className="text-4xl md:text-xl mr-2"/>
              <span className="hidden md:block">My Campaign</span>
            </NavLink>
         
            <NavLink
              to="/"
              className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
            >
            <FaHouse className="text-4xl md:text-xl mr-2"/>
              <span className="hidden md:block">Home</span>
            </NavLink>
            <hr />
            <NavLink
              to="/dashboard/admin-profile"
              className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
            >
            <MdDomain className="text-4xl md:text-xl mr-2"/>
              <span className="hidden md:block">Admin</span>
            </NavLink>
          </nav>
        </div>
      </div>

      
        </>
    
  );
};

export default DashboardNav;
