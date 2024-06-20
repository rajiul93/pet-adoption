 
const CategoryDropdown = ({handleCategory}) => {
    return (
        <div>
            
        <div className="   ">  
            <select
            onClick={(e)=>handleCategory(e.target.value)}
            id="gender"
            name="gender"
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required>
                <option disabled>Select Category</option>
                <option value="DOG">Dog</option>
                <option value="CAT">Cat</option>
                <option value="BIRD">Bird</option>
                <option value="RABBIT">Rabbit</option>
            </select>
       </div>
        </div>
    );
};

export default CategoryDropdown;