import useAuth from "@/Provider/useAuth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function ProfileImage() {
  const { user ,logOut} = useAuth();
  const sinOut = async()=>{
    try {
      logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-row-reverse gap-4">
      {user && (
        <>
          <Button onClick={sinOut}> Sign Out</Button>
          <Avatar className="cursor-pointer">
            <AvatarImage src={user.photoURL} alt="@shadcn" />
            <AvatarFallback>CNd</AvatarFallback>
          </Avatar>
        </>
      )}
    </div>
  );
}
