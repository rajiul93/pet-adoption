import useAuth from "@/Provider/useAuth";
import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Bars from "./Bars";
import { ProfileImage } from "./ProfileImage";
const Navbar = () => {
  const { user,logOut } = useAuth();

  const [setBars, setSetBars] = useState(false);



  const sinOut = async()=>{
    try {
      logOut()
    } catch (error) {
      console.log(error)
    }
  }
  // menu control start
  const menuItem = (
    <>
      <MenubarMenu>
        <NavLink>
          <li className="text-xl list-none font-bold cursor-pointer">Home</li>
        </NavLink>
      </MenubarMenu>

      <MenubarMenu className="bg-transparent">
        <NavLink to="/pet-listing">
          <li className="text-xl list-none ms-4  font-bold cursor-pointer bg-transparent ">
            Pet Listing
          </li>
        </NavLink>
      </MenubarMenu>
      <MenubarMenu>
        <NavLink to="/campaigns">
          <li className="text-xl list-none ms-4 font-bold cursor-pointer">
            Donation Campaigns{" "}
          </li>
        </NavLink>
      </MenubarMenu>

      <MenubarMenu>
        <NavLink to="/blog">
          <li className="text-xl list-none ms-4 font-bold cursor-pointer">
            Blog
          </li>
        </NavLink>
      </MenubarMenu>
    
    </>
  );
  const handleBars = () => {
    setSetBars(!setBars);
  };
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 768 && setSetBars(true)
    );
  }, []);
  // menu control end
  return (
    <div style={{ backgroundColor: "#483786" }}>
      <Menubar className="flex max-w-6xl mx-auto bg-transparent  py-8  justify-between border-0 text-white">
        <div>
          <div className="flex gap-3">
            <div onClick={handleBars} className="cursor-pointer">
              <Bars setBars={setBars} />
            </div>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/23/09/33/adopt-2167830_960_720.png"
              className="w-36"
              alt=""
            />
          </div>
          <div>
            <div
              className={`${
                setBars ? "hidden" : ""
              }   md:hidden absolute bg-slate-400 w-52 p-4 rounded-md top-24`}
            >
              {menuItem}
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:block ">{menuItem}</div>
        <div className="flex items-center gap-4">
          {!user && (
            <>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
              <Link to="/registration">
                <Button>Sign In</Button>
              </Link>
            </>
          )}
    {user &&  <div className="flex gap-4">
      <span className="p-3 bg-gray-800 rounded-lg cursor-pointer" onClick={sinOut}> Sign Out</span  >

    <MenubarMenu className="bg-blue-700">
            <MenubarTrigger>
              <ProfileImage />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value="benoit">
                <MenubarRadioItem value="andy"><Link to="/dashboard">Dashboard</Link></MenubarRadioItem>
                <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
              </MenubarRadioGroup>
              <MenubarSeparator />
              <MenubarItem inset>Edit...</MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Add Profile...</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
    </div>}
        </div>
      </Menubar>
    </div>
  );
};

export default Navbar;
