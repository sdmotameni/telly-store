import Image from "next/image";

import HeroListItems from "./components/HeroListItems";

export default function Hero() {
  return (
    <section className="mx-1 my-2 shadow">
      <div className="flex flex-col px-1 py-5 custombg rounded-3xl">
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
              <h2 className="font-mono text-sm text-center opacity-90">
                Rated 5-Stars by hundreds of users
              </h2>
            </div>
            <h1 className="mt-3 text-3xl font-bold text-center">
              Share all your socials with a tap
            </h1>
            <video className="w-auto h-80" autoPlay loop muted>
              <source src="/tap.webm" type="video/webm" />
              <source src="/tap.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <HeroListItems />
            <a
              href="https://shop.gettelly.com/products/telly-gadget"
              className="px-12 py-1 text-lg text-center text-white bg-purple-500 rounded-md "
            >
              Buy Now
            </a>
          </div>
        </div>

        <div className="mt-2 text-xs mx-9 opacity-90">
          Free shipping & returns | 30-day money-back guarantee | No monthly
          fees
        </div>
      </div>
    </section>
  );
}
