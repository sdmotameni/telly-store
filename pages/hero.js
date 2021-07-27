import Image from "next/image";

import HeroListItems from "./components/HeroListItems";

export default function Hero() {
  return (
    <section className="m-2 shadow">
      <div className="flex flex-col px-3 py-8 custombg rounded-3xl">
        <div className="flex flex-col">
          <div className="flex flex-col items-stretch w-full">
            <div className="flex flex-col items-center">
              <div className="relative w-20 h-9">
                <Image
                  alt="navicon"
                  src="/stars.svg"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h2 className="-mt-3 font-mono text-sm text-center opacity-90">
                Rated 5-Stars by hundreds of users
              </h2>
            </div>
            <h1 className="mt-1 text-3xl font-bold text-center">
              Share all your socials with a tap
            </h1>
            <video className="w-auto h-80" autoPlay autoplay loop muted>
              <source src="/tap-bluebg.webm" type="video/webm" />
              <source src="/tap-bluebg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <HeroListItems />
            <a
              href="https://shop.gettelly.com/products/telly-gadget"
              className="px-12 py-1 mt-3 text-lg text-center text-white bg-purple-500 rounded-md mx-7"
            >
              Buy Now
            </a>
          </div>
        </div>
        <div className="mt-3 text-xs font-semibold mx-7 opacity-90">
          Free shipping & returns | 30-day money-back guarantee | No monthly
          fees | 2-Year Warranty Included
        </div>
      </div>
    </section>
  );
}
