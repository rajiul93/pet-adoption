import useCampaign from "@/Utils/Hook/Campaign/useCampaign";
import CampaignCard from "../DonationCamping/CampaignCard";

const RelatedCampaign = () => {
    const [campaign] = useCampaign()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10 mt-24">
{
    campaign.slice(0,3).map(item =><CampaignCard key={item._id} item={item} />)
}
</div>
    );
};

export default RelatedCampaign;