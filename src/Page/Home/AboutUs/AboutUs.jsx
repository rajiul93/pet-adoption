const AboutUs = () => {
  return (
    <div>
      <div
        id="about"
        className="relative bg-white overflow-hidden mt-16 max-w-6xl mx-auto"
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div className="pt-1"></div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="my-6 uppercase text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                  About US
                </h2>
                <h2>Raise Awareness</h2>
                <p>
                  Inform the Public: A dedicated website provides information
                  about the importance of pet adoption, raising awareness about
                  the plight of animals in shelters.
                  <br />
                  <br />
                  Educational Resources: It can offer resources on responsible
                  pet ownership, the benefits of adopting, and how to care for
                  pets.
                </p>
                <h2 className="mt-5">Increase Adoptions</h2>
                Showcase Available Pets: A website can display profiles and
                pictures of animals available for adoption, making it easier for
                potential adopters to find a pet that fits their lifestyle.
                <br />
                <br />
                Streamlined Process: It simplifies the adoption process by
                providing online applications, FAQs, and contact information.
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://hunterdesignerhomes.com.au/wp-content/uploads/2022/09/Dog-lying-on-Bed.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
