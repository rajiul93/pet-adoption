import Subscribe from "@/Share/Subscribe/Subscribe";
import React, { useEffect, useRef } from "react";
import { useInfiniteQuery } from "react-query";
import CategoryDropdown from "../PetListing/CategoryDropdown/CategoryDropdown";
import CampaignCard from "./CampaignCard";
const DonationCamping = () => {
  // const [campaign] = useCampaign()

  const fetchProducts = async ({ pageParam = 0, } ) => { 
    const response = await fetch(
      `http://localhost:5000/donation-for-post?page=${pageParam}&limit=5`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return {
      products: data,
      nextCursor: pageParam + 1, // assuming pages are sequentially numbere
    };
  };
const {
data,
error,
fetchNextPage,
hasNextPage,
isFetching,
isFetchingNextPage,
status,
} = useInfiniteQuery(["campaign-pet" ], fetchProducts, {
getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
});
const observerElem = useRef();
useEffect(() => {
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  },
  { threshold: 1.0 }
);

if (observerElem.current) {
  observer.observe(observerElem.current);
}
return () => {
  if (observerElem.current) {
    observer.unobserve(observerElem.current);
  }
};
}, [observerElem, hasNextPage, fetchNextPage]);






















  // console.log(campaign)
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
      {status === "loading" ? (
            <p>Loading...</p>
          ) : status === "error" ? (
            <p>Error: {error.message}</p>
          ) : (
            <>
              {data.pages.map((group, i) => (
                <React.Fragment key={i}>
                  {group.products.map((item) => (
                    <CampaignCard key={item._id} item={item} />
                  ))}
                </React.Fragment>
              ))}
              <div ref={observerElem} style={{ height: "20px", margin: "10px" }}>
                {isFetchingNextPage
                  ? "Loading more..."
                  : hasNextPage
                  ? "Load More"
                  : "Nothing more to load"}
              </div>
              <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
            </>
          )}

      </div>
      <Subscribe />
    </div>
  );
};

export default DonationCamping;

// campaign.map(item=> <CampaignCard key={item._id} item={item} />)