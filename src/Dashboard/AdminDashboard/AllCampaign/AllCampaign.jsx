import useCampaign from "@/Utils/Hook/Campaign/useCampaign";
import useAxiosPublic from "@/Utils/Hook/useAxiosPublic";

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
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
 

const AllCampaign = () => {
    const [campaign,,refetch] =useCampaign()
const axiosPublic = useAxiosPublic()



    const handleDelete =async(id)=>{
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
           await axiosPublic.delete(`/delete-campaign-admin/${id}`)
           refetch()
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
    }




    return (
        <div> 
            <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader className="sticky">
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Max Donate</TableHead>
            <TableHead className="text-center">Last Date</TableHead>
            <TableHead className="text-center">Action</TableHead>
            <TableHead className="text-right">Donated</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {campaign.map((pet) => (
            <TableRow key={pet._id}>
              <TableCell className="font-medium">
                <img className="rounded-3xl" src={pet.photoURL} alt="" />
              </TableCell>
              <TableCell>{pet.petName}</TableCell>
              <TableCell>${pet.maxAmount} </TableCell>
              <TableCell className="text-xl flex justify-around items-center mt-4 gap-2 text-center">
                {pet.date}
              </TableCell>
              <TableCell className="text-center">
                <div className="space-x-1">
                  <Link  to={`/dashboard/campaign-update/${pet._id}`}>
                  
                  <Button>Update</Button>
                  </Link>
                  <Button onClick={()=>handleDelete(pet._id)} className="bg-red-600">Delete</Button>
                </div>
              </TableCell>
              <Link to={`/campaign-details/${pet._id}`}>
              
              <TableCell className="text-right">details</TableCell>
              </Link>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </div>
    );
};

export default AllCampaign;