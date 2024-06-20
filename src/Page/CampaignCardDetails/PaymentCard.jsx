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
import PaymentForm from "./PaymentForm";
const PaymentCard = () => {
  const [money, setMoney] = useState("");
  const getMoney = (taka) => {
    if (!taka) {
      setMoney("");
    }
    setMoney(taka);
  };

  const handlePayment = () => { 
    const enterAmount = parseInt(money)
    if (enterAmount<5) {
      return toast.error("Minimum amount $5")
      }
    console.log(enterAmount)
    // add stripe
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
          <PaymentForm getMoney={getMoney} />
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
