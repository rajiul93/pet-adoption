import useAuth from "@/Provider/useAuth";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PaymentForm from "./PaymentForm";

// payment process start hear






const PaymentCard = ({ id,image }) => {
  const navigate = useNavigate()
  const [money, setMoney] = useState("");
  const { user } = useAuth();
  const getMoney = (taka) => {
    if (!taka) {
      setMoney("");
    }
    setMoney(taka);
  };

  const handlePayment = async () => {
    const enterAmount = parseInt(money);
    if (enterAmount < 5) {
      return toast.error("Minimum amount $5");
    }
 
    const newAmount = enterAmount;
    const donarDetails = {
      userName: user.displayName,
      email: user.email,
      newAmount,
      image
    };
localStorage.setItem("donationDetails", JSON.stringify(donarDetails))
   navigate(`/payment-now/${id}`)
  };
  return (
    <AlertDialog>
      <Toaster />
      <AlertDialogTrigger asChild>
        <button className="bg-[#0369a1] py-2 px-3 my-4 text-white rounded-md">
          Do You Want Donation
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <PaymentForm getMoney={getMoney} money={money}/>



        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          {money ? (
            <AlertDialogAction onClick={handlePayment}>
              Confirm
            </AlertDialogAction>
          ) : (
            <Button
              onClick={() => {
                toast("enter amount");
              }}
            >
              Continue
            </Button>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PaymentCard;
