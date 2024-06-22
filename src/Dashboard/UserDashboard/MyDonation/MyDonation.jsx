import Loading from "@/Component/Loading";
import useAuth from "@/Provider/useAuth";
import useAxiosSecure from "@/Utils/Hook/useAxiosSecure";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { useQuery } from "react-query";
   
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]
   
const MyDonation = () => {
  const axiosSecure= useAxiosSecure()
  const {user} = useAuth()
  const {data:myDonationData=[], isLoading} = useQuery({
    queryKey:["my-donation"],
    queryFn:async()=>{
      const {data} = await axiosSecure.get(`/my-donation/${user?.email}`)
      return data;
    }
  })

 if (isLoading) {
  return <Loading />
 }
    return (
        <div className=" overflow-x-auto">
        <h2 className="text-center my-14">My Donation </h2>
        <Table>
       <TableCaption>A list of your recent invoices.</TableCaption>
       <TableHeader className="sticky">
         <TableRow>
           <TableHead className="w-[100px]">image</TableHead>
           <TableHead className="w-[100px]">Name</TableHead>
           <TableHead>Amount</TableHead>
           <TableHead>transactionId</TableHead>
           <TableHead className="text-right">campaignId</TableHead> 
           <TableHead className="text-right">Donar Email</TableHead> 
         </TableRow>
       </TableHeader>
       <TableBody>
         {myDonationData.map((invoice) => (
           <TableRow key={invoice._id}>
             <TableCell className="font-medium">
              <img src={invoice?.image} alt="" />
             </TableCell>
             <TableCell className="font-medium">{invoice.userName}</TableCell>
             <TableCell>${invoice.newAmount}</TableCell>
             <TableCell>{invoice.transactionId}</TableCell>
             <TableCell className="text-right">{invoice.campaignId}</TableCell> 
             <TableCell className="text-right">{invoice.email}</TableCell> 
           </TableRow>
         ))}
       </TableBody>
     
     </Table>
        </div>
    );
};

export default MyDonation;