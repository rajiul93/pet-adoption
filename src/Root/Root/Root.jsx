import Footer from "@/Share/Footer/Footer";
import Navbar from "@/Share/Navbar/Navbar";
import { Outlet } from "react-router-dom";

 

const Root = () => {
    return (
       <div>
            <Navbar />
         <div className="max-w-6xl mx-auto">
            <Outlet />
            <Footer />
        </div>
       </div>
    );
};

export default Root;