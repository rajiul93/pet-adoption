import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
const Bars = ({setBars}) => {
    return (
        <div className="md:hidden">
           {setBars? <FaBarsStaggered className="text-2xl" /> :
            <RxCross2 className="text-2xl" />}
        </div>
    );
};

export default Bars;