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
import toast, { Toaster } from "react-hot-toast";
import { useQuery } from "react-query";

const AdoptionRequest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: myPetRequest = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myPetRequest"],
    queryFn: async () => {
      const res = await axiosSecure(`/adopt-request/${user?.email}`);
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    try {
      const res = await axiosSecure.delete(`/adopt-request/${id}`);
      if (res.data.deletedCount > 0) {
        toast.success("Delete successfully");
        refetch();
      }
    } catch (error) {
      toast.warning(error.message);
    }
  };
  if (isLoading) {
    return <>Loading..........</>;
  }
  return (
    <div className=" overflow-x-auto">
      <Toaster />
      <h2 className="text-center my-14">Adoption For Request </h2>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader className="sticky">
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>ID</TableHead>
            <TableHead className="text-center">Action</TableHead>
            <TableHead className="text-center">Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {myPetRequest.map((request) => (
            <TableRow key={request.invoice}>
              <TableCell className="font-medium">
                <img src={request.photoURL} alt="" />
              </TableCell>
              <TableCell>{request.name}</TableCell>
              <TableCell>{request.requestStatus}</TableCell>
              <TableCell>{request.petID}</TableCell>
              <TableCell className="text-center">
                <div className="space-x-1">
                  <Button>Update</Button>
                  <Button
                    onClick={() => handleDelete(request._id)}
                    className="bg-red-600"
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
              <TableCell className="text-center">Details</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdoptionRequest;
