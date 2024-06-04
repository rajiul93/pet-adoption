import Subscribe from "@/Share/Subscribe/Subscribe";
import useAxiosPublic from "@/Utils/Hook/useAxiosPublic";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Modal from "./Modal/Modal";

const Details = () => {
  const axiosPublic = useAxiosPublic();

  const { id } = useParams();
  const { data: pet = {}, isLoading } = useQuery({
    queryKey: ["singlePet"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`adopts/${id}`);
      return data;
    },
  });
  if (isLoading) {
    return <>Loading..........</>
  }
  const {
    photoURL,
    name,
    age,
    phone,
    message,
    category,
    email,
    division,
    district,
  } = pet;

  return (
    <main className="container mx-auto mt-8">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-8/12 px-4 mb-8">
          <img
            src={photoURL}
            alt="Featured Image"
            className="w-full  object-cover rounded"
          />
          <h2 className="text-4xl font-bold mt-4 mb-2">{name}</h2>
          <p className="text-gray-700 mb-4">{message}</p>
        </div>
        <div className="w-full md:w-4/12 px-4 mb-8">
          <div className="bg-gray-100 px-4 py-6 rounded">
            <h3 className="text-lg font-bold mb-2">Details</h3>
            <ul className="list-disc list-inside space-y-3 ">
              <li className="text-gray-700 hover:text-gray-900 list-none">
                Category: {category}
              </li>
              <hr />
              <li className="text-gray-700 hover:text-gray-900 list-none">
                Name: {name}
              </li>
              <hr />
              <li className="text-gray-700 hover:text-gray-900 list-none">
                Location:{division},{district}
              </li>
              <hr />
              <li className="text-gray-700 hover:text-gray-900 list-none">
                Email: {email}
              </li>
              <hr />
              <li className="text-gray-700 hover:text-gray-900 list-none">
                Phone: +88 {phone}
              </li>
              <hr />
              <li className="text-gray-700 hover:text-gray-900 list-none">
                Age:{age} Years
              </li>
              <hr />
           <Modal pet={pet} />
            </ul>
          </div>
        </div>
      </div>
      <Subscribe />
    </main>
  );
};

export default Details;
