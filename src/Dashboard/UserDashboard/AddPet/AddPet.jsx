const AddPet = () => {
  return (
    <div>
      <div className="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
        <h2 className="text-2xl font-medium mb-4 uppercase">Add a New pet for adoption</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
   <div className="md:flex gap-6 w-full">


   <div className="mb-4 w-full">
            <label className="block text-gray-700 font-medium mb-2">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input
              type="number"
              id="age"
              name="age"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>

   </div>
          <div className="md:flex w-full gap-6">
            <div className="mb-4 w-full">
              <label className="block text-gray-700 font-medium mb-2">
                Location <small>District</small>
              </label>
              <input
                type="text"  
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                required
              />
            </div> 
            <div className="mb-4 w-full">
              <label className="block text-gray-700 font-medium mb-2">
              Division
              </label>
              <input
                type="number"
                id="age"
                name="age"
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Pet Category
            </label>
            <select
              id="gender"
              name="gender"
              className="border uppercase border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            >
              <option className="uppercase" value="">
                Select gender
              </option>
              <option className="uppercase" value="BIRD">
                bird
              </option>
              <option className="uppercase" value="CAT">
                cat
              </option>
              <option className="uppercase" value="DOG">
                dog
              </option>
              <option className="uppercase" value="RABBIT">
                rabbit
              </option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              rows="5"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPet;
