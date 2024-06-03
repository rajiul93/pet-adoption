import useAuth from "@/Provider/useAuth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ProfileImage() {
  const { user , } = useAuth();
 

  return (
    <div className="flex flex-row-reverse gap-4">
      {user && (
        <> 
          
          <Avatar className="cursor-pointer">
            <AvatarImage src={user.photoURL} alt="" />
            <AvatarFallback>CNd</AvatarFallback>
          </Avatar>
        </>
      )}
    </div>
  );
}
