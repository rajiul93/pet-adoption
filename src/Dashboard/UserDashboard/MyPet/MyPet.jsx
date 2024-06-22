import useAuth from "@/Provider/useAuth";
import useAxiosSecure from "@/Utils/Hook/useAxiosSecure";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Toaster } from "react-hot-toast";
import { FaRegTrashCan } from "react-icons/fa6";
import { GiConfirmed } from "react-icons/gi";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// const invoices = [
//   {
//     invoice: "INV001",
//     paymentStatus: "Paid",
//     totalAmount: "$250.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV002",
//     paymentStatus: "Pending",
//     totalAmount: "$150.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV003",
//     paymentStatus: "Unpaid",
//     totalAmount: "$350.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV004",
//     paymentStatus: "Paid",
//     totalAmount: "$450.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV005",
//     paymentStatus: "Paid",
//     totalAmount: "$550.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV006",
//     paymentStatus: "Pending",
//     totalAmount: "$200.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV007",
//     paymentStatus: "Unpaid",
//     totalAmount: "$300.00",
//     paymentMethod: "Credit Card",
//   },
// ];

const MyPet = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: myPet = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myPet"],
    queryFn: async () => {
      const res = await axiosSecure(`/my-adopt-pet/${user?.email}`);
      return res.data;
    },
  });

  const handleRequestStatus = async (message, id) => {
    const res = await axiosSecure.patch(
      `/handle-request-status?status=${message}&id=${id}`
    );
    console.log(res.data);
  };

  const handleDelete = async (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async(result) => {
      if (result.isConfirmed) {

const { data } = await axiosSecure.delete(`/adopt/${id}?email=${user?.email}`);
    if (data.deletedCount > 0) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
      refetch();
    }


      
      }
    });






    
  };
  if (isLoading) {
    return <>Loading..........</>;
  }
  return (
    <div className=" overflow-x-auto">
      <Toaster />
      <h2 className="text-center my-14">My Added Pet </h2>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader className="sticky">
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead className="text-center">status</TableHead>
            <TableHead className="text-center">Action</TableHead>
            <TableHead className="text-right">Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {myPet.map((pet) => (
            <TableRow key={pet._id}>
              <TableCell className="font-medium">
                <img className="rounded-3xl" src={pet.photoURL} alt="" />
              </TableCell>
              <TableCell>{pet.name}</TableCell>
              <TableCell>{pet.age} Years</TableCell>
              <TableCell className="text-xl flex justify-around items-center mt-4 gap-2 text-center">
                <FaRegTrashCan
                  onClick={() => handleRequestStatus("Cancel", pet._id)}
                />
                {pet.status}

                <GiConfirmed
                  onClick={() => handleRequestStatus("Confirm", pet._id)}
                />
              </TableCell>
              <TableCell className="text-center">
                <div className="space-x-1">
                  <Link to={`/dashboard/pet-update/${pet._id}`}>
                    <Button>Update</Button>
                  </Link>
                  <Button
                    onClick={() => handleDelete(pet._id)}
                    className="bg-red-600"
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
              <Link to={`/details/${pet._id}`}>
                <TableCell className="text-right">details</TableCell>
              </Link>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MyPet;
