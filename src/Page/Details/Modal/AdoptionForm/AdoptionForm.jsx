
const AdoptionForm = ({pet, user,inputRef}) => {
    const {  photoURL, name,   _id } = pet;

 
    return (
        <main id="content" role="main" className="w-full  max-w-md mx-auto p-6">
    <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
      <div className="p-4 sm:p-7">
        <div className="flex justify-center rounded-xl">
          <img className="w-24 rounded-xl shadow-xl text-center" src={photoURL} alt="" />
         
        </div>

        <div className="mt-5">
          <form>
            <div className="grid gap-y-4">
              <div>
                <label  className="block text-sm font-bold ml-1 mb-2 dark:text-white">Name</label>
                <div className="relative">
                  <input disabled defaultValue={name} className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error" />
                </div> 
              </div>
              <div>
                <label  className="block text-sm font-bold ml-1 mb-2 dark:text-white">Pet ID</label>
                <div className="relative">
                  <input defaultValue={_id} disabled className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error" />
                </div> </div>
              <div>
                <label  className="block text-sm font-bold ml-1 mb-2 dark:text-white">Email</label>
                <div className="relative">
                  <input defaultValue={user?.displayName} disabled className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error" />
                </div> </div>
              
              <div>
                <label  className="block text-sm font-bold ml-1 mb-2 dark:text-white">Phone Number</label>
                <div className="relative"> <input  ref={inputRef} type="number"  id="email" name="email" className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error" />
                </div>
                <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
              </div> </div>
          </form>
        </div>
      </div>
    </div>
 
  </main>
    );
};

export default AdoptionForm;