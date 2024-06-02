 
const CategoryDropdown = () => {
    return (
        <div>
            
        <div className="mb-4   ">  <select id="gender" name="gender"
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required>
                <option value="">Select Category</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
       </div>
        </div>
    );
};

export default CategoryDropdown;