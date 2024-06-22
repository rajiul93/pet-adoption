import useAuth from "@/Provider/useAuth";
import useAxiosSecure from "@/Utils/Hook/useAxiosSecure";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import AdoptionForm from "./AdoptionForm/AdoptionForm";

const Modal = ({pet}) => {
    const axiosSecure = useAxiosSecure()
    const inputRef = useRef(null);
    const {user} = useAuth()
    const {  photoURL, name,   _id, email } = pet;
    console.log(email)
  
    const handleClick =async ()=>{
        const adoptersPhone =    inputRef.current.value ;
        const adoptersName = user.displayName;
        const adoptersEmail = user.email;
        const petID = _id;
        const requestStatus = "pending"
        const adoptersInfo = {
            adoptersPhone,
            petID,
            name,
            adoptersName,
            adoptersEmail,
            photoURL  ,
            requestStatus
        }
         const res = await axiosSecure.post("/adopt-request", adoptersInfo) 
         if (res.data.acknowledged) {
            toast.success("Your request successfully done")
         }
    }
    return (
     <>
     <Toaster />
     <AlertDialog>
        <AlertDialogTrigger asChild>
        {user.email !== email && <Button  variant="outline" className="bg-blue-700 text-white font-semibold">Adoption</Button>}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{pet.name}</AlertDialogTitle>
            <AlertDialogDescription>
        <AdoptionForm inputRef={inputRef}  pet={pet} user={user} />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleClick}>Adopt Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
     </>
    );
};

export default Modal;