import { Link, useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const CampaignCard = ({item}) => {
    const {petName,photoURL,maxAmount,_id} = item;
    const navigate = useNavigate()
    const handleNavigate = ()=>{
      navigate(`/campaign-details/${_id}`)
    }
  return (
    <div>
      <a
        className="p-2 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col "
        href="#"
      >
        <img 
          src={photoURL}
          className="shadow h-96 object-cover rounded-lg overflow-hidden border"
        />
        <div className="mt-8 text-left  ">
          <h4 className="font-bold text-xl">Name:{petName}</h4>
          <div className="text-gray-700 flex justify-between my-2">
            <small>Max : ${maxAmount}</small>
            <small>Already Donated: ${item?.totalDonation && item.totalDonation} </small>
          </div>

          <div className="mt-5 text-right">
         {/* <div onClick={handleNavigate}> */}
         <Link to={`/campaign-details/${_id}`}>
         <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
            >
              Show Details
            </button>
         </Link>
         {/* <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
            >
              Show Details
            </button> */}
         {/* </div> */}
          </div>
        </div>
      </a>
    </div>
  );
};

export default CampaignCard;
