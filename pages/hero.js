import Image from "next/image";

import HeroListItems from "./components/HeroListItems";

export default function Hero() {
  return (
    <section className="m-3 shadow md:mx-40 md:mt-9">
      <div className="flex flex-col rounded-3xl custombg md:px-40 md:py-24">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col items-stretch w-full md:py-3">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="relative w-4 h-4 mr-2 md:w-32 md:h-10">
                <Image
                  alt="navicon"
                  src="/stars.svg"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h2 className="font-mono text-sm text-center md:text-left opacity-90">
                Rated 5-Stars by hundreds of users
              </h2>
            </div>
            <h1 className="mt-3 text-3xl font-bold text-center md:text-6xl md:text-left md:mb-4">
              Share all your socials with a tap
            </h1>
            <HeroListItems />
            <a
              href="https://shop.gettelly.com/products/telly-gadget"
              className="py-1 text-lg text-center text-white bg-purple-500 rounded-md px-7 md:mt-5 md:self-start"
            >
              Buy Now
            </a>
          </div>
          {/* <video
            className="absolute top-0 right-0 w-full h-40 md:h-full md:w-auto"
            autoPlay
            loop
            muted
          >
            <source src="/tap.webm" type="video/webm" />
            <source src="/tap.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <video className="w-auto h-80" autoPlay loop muted>
            <source src="/tap.webm" type="video/webm" />
            <source src="/tap.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="mt-2 text-xs mx-9 md:mx-0 opacity-90 md:text-base">
          Free shipping & returns | 30-day money-back guarantee | No monthly
          fees
        </div>
      </div>
    </section>
  );
}
