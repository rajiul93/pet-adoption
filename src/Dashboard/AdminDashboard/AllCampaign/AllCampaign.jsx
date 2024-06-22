import useCampaign from "@/Utils/Hook/Campaign/useCampaign";

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
 

const AllCampaign = () => {
    const [campaign] =useCampaign()
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
                  <Button>Update</Button>
                  <Button className="bg-red-600">Delete</Button>
                </div>
              </TableCell>
              <TableCell className="text-right">details</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </div>
    );
};

export default AllCampaign;