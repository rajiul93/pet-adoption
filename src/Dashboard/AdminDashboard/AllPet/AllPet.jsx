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
import { FaRegTrashCan } from "react-icons/fa6";
import { GiConfirmed } from "react-icons/gi";
import { useQuery } from "react-query";
const AllPet = () => {

    const axiosSecure = useAxiosSecure(); 

    const { data: AllPet = [] ,isLoading} = useQuery({
      queryKey: ["myPet"],
      queryFn: async () => {
        const res = await axiosSecure(`/all-pets`);
        return res.data;
      },
    });

    const handleRequestStatus = async (message, id)=>{
        const res = await axiosSecure.patch(`/handle-request-status?status=${message}&id=${id}`);
        console.log(res.data)
    
      }
    return (
        <div className=" overflow-x-auto"> 
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
            {AllPet.map((pet) => (
              <TableRow key={pet._id}>
                <TableCell className="font-medium"><img className="rounded-3xl" src={pet.photoURL} alt="" /></TableCell>
                <TableCell>{pet.name}</TableCell>
                <TableCell>{pet.age} Years</TableCell>
                <TableCell className='text-xl flex justify-around items-center mt-4 gap-2 text-center'>
                <FaRegTrashCan onClick={()=>handleRequestStatus("Cancel",pet._id)} />
                  {pet.status}
                  
                  <GiConfirmed onClick={()=>handleRequestStatus("Confirm",pet._id)} />
                  </TableCell>
                <TableCell className="text-center">
                <div className="space-x-1">
                    <Button>Update</Button>
                    <Button className='bg-red-600'>Delete</Button>
                    </div>
                </TableCell>
                <TableCell className="text-right">
                 details
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
};

export default AllPet;