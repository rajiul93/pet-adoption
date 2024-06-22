
const PaymentForm = ({ getMoney ,money}) => {
  return (
    <main id="content" role="main" className="w-full  max-w-md mx-auto p-6">
      <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Payment Now
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              This Pet is the Best Choice for You and Your New Furry Friend
            </p>
          </div>

          <div className="mt-5">
            <form>
              <div className="grid gap-y-4">
                <div>
                  <label className="block text-sm font-bold ml-1 mb-2 dark:text-white">
                    Enter Your Amount
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      onChange={(e) => getMoney(e.target.value)}
                      className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                      required
                      aria-describedby="email-error"
                    />
                  </div>
                </div>
              </div>
            </form>

          
          </div>
        </div>
      </div>
    </main>
  );
};

export default PaymentForm;
