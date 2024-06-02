const Subscribe = () => {
  return (
    <div>
      <div className=" py-12 sm:px-6 lg:py-16 ">
        <div
          className=" py-6 rounded-lg md:py-12 md:px-12 lg:py-16  xl:flex xl:items-center"
          style={{backgroundColor: "#483786"}}
        >
          <div className="xl:w-0 xl:flex-1">
            <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">
              Get the latest updates!
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
              Subscribe to our newsletter and stay updated on the latest
              developments.
            </p>
          </div>
          <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
            <div id="mc_embed_signup">
              <form className="sm:flex">
                <input
                  className="required rounded-md w-full px-4 py-2 email"
                  id="mce-EMAIL"
                  placeholder="Enter your email"
                  required=""
                  type="email" 
                  aria-required="true"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    className="w-full flex items-center justify-center px-5 py-3 text-base leading-6
                            font-medium rounded-md text-white bg-red-500 focus:ring
                            hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400
                            transition duration-150 ease-in-out"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
