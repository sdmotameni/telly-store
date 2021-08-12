export default function Faq() {
  const handleClick = () => {
    document.getElementById("answer").classList.toggle("hidden");
    document.getElementById("icon").classList.toggle("-rotate-90");
  };

  return (
    <section className="py-12 bg-white customcolor sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl px-8 mx-auto lg:px-16">
        <h2 className="mb-2 text-2xl font-bold md:text-3xl">Got a Question?</h2>
        <p className="text-sm text-gray-600 sm:text-base md:text-lg">
          We may have an answer for you. Here are some of our common FAQ's:
        </p>
        <div className="relative mt-2">
          <div className="relative overflow-hidden border-b-2 border-black select-none">
            <h4
              onClick={handleClick}
              className="flex items-center justify-start text-lg font-medium text-gray-700 cursor-pointer sm:text-xl md:text-2xl py-7 hover:text-gray-900"
            >
              <svg
                id="icon"
                className="w-6 h-6 mr-3 transition-all duration-200 ease-out transform -rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
              <span>Where do I go to upgrade my account?</span>
            </h4>
            <p
              id="answer"
              className="hidden px-2 pt-0 -mt-2 text-sm text-gray-400 sm:text-base md:text-lg py-7"
              x-show="show"
              x-cloak=""
            >
              You can upgrade your account by visiting The Pro Upgrade Page. You
              will also gain access to many other applications and sections of
              the site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
