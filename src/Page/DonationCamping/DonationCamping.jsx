import Subscribe from "@/Share/Subscribe/Subscribe";
import useCampaign from "@/Utils/Hook/Campaign/useCampaign";
import CategoryDropdown from "../PetListing/CategoryDropdown/CategoryDropdown";
import CampaignCard from "./CampaignCard";

const DonationCamping = () => {
  const [campaign] = useCampaign()
  console.log(campaign)
  return (
    <div>
      <div className="grid grid-cols-6 gap-6">
      <div
        className=" col-span-4  w-full max-w-6xl p-8 md:min-h-96 md:flex flex-row-reverse justify-around items-center    my-14 rounded-xl object-cover bg-cover "
        style={{
          backgroundImage:
            "url(https://www.elegantthemes.com/layouts/wp-content/uploads/2020/08/pet-shop-61.jpg)",
        }}
      >
        <div>
          <h1>Pet Campaign</h1>
          <p>egin the process of welcoming a new furry friend into your home</p>
        </div>
        {/* <DateFilter /> */}
      </div>
<div className="col-span-2 my-14 ">
<img src="https://i.pinimg.com/originals/60/fe/24/60fe24c86f20a05998a8c34fd99ceec8.jpg" alt="" />

</div>
      </div>
      <div className="flex justify-between">
        <div></div>
        <div className="flex gap-4">
          <div></div>
          <div>
            <CategoryDropdown />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
        {
          campaign.map(item=> <CampaignCard key={item._id} item={item} />)
        }

      </div>
      <Subscribe />
    </div>
  );
};

export default DonationCamping;
