
const ReviewCard = () => {
    return (
        <section className="relative isolate overflow-hidden border-b border-t bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20">
        </div>
        <div
          className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center">
        </div>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img className="mx-auto h-12 grayscale" src="https://www.svgrepo.com/show/443576/brand-xmpp.svg" alt="Zilla Digital Logo" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>“Your custom content goes here. Feel free to replace this text with your own message.”</p>
            </blockquote>
            <figcaption className="mt-10">
              <img className="mx-auto h-16 w-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxtYW58ZW58MHwwfHx8MTY5NzQ0MjkzOHww&ixlib=rb-4.0.3&q=80&w=1080" alt="" />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Your Name</div>
                <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                  <circle cx="1" cy="1" r="1"></circle>
                </svg>
                <div className="text-gray-600">Your Position</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    );
};

export default ReviewCard;