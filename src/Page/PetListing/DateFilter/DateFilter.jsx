 
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
const DateFilter = () => {
 const   handleSelect=(date)=>{
        console.log(date); // native Date object
      }
    return (
        <div>
            <h1 className='text-white'>Find by Date</h1>
             <Calendar
        date={new Date()}
        onChange={handleSelect}
      />
        </div>
    );
};

export default DateFilter;