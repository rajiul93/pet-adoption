import React, { useEffect, useRef } from "react";
import { useInfiniteQuery } from "react-query";
import PetCard from "../PetCard/PetCard";


const PetListingContainer = ({category,search}) => {
    const fetchProducts = async ({ pageParam = 0, } ) => { 
        const response = await fetch(
          `http://localhost:5000/pets-limit?page=${pageParam}&limit=5&category=${category}&search=${search}`
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
  } = useInfiniteQuery(["projects", category,search ], fetchProducts, {
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




    return (
        <div 
        className="pt-14 grid grid-cols-3 gap-4"
        > 
          {status === "loading" ? (
            <p>Loading...</p>
          ) : status === "error" ? (
            <p>Error: {error.message}</p>
          ) : (
            <>
              {data.pages.map((group, i) => (
                <React.Fragment key={i}>
                  {group.products.map((item) => (
                    <PetCard key={item._id} item={item} />
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
    );
};

export default PetListingContainer;