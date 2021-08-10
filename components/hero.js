import Image from "next/image";

import HeroListItems from "./HeroListItems";
import HeroTapVideo from "./HeroTapVideo";

export default function Hero() {
  return (
    <section className="m-2">
      <div className="flex flex-col px-3 py-8 custombg rounded-3xl">
        <div className="flex flex-col">
          <div className="flex flex-col items-stretch w-full">
            <div className="flex flex-col items-center">
              <div className="relative w-20 h-9">
                <Image
                  alt="stars"
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
            <HeroTapVideo />
            <HeroListItems />
            <a
              href="https://shop.gettelly.com/products/telly-gadget"
              className="py-1 mx-6 mt-3 text-center text-white rounded-md bg-violet-500 text-md"
            >
              Buy Now
            </a>
          </div>
        </div>
        <div className="mx-6 mt-3 text-xs font-base opacity-90">
          Fast shipping | 30-day money-back guarantee | No monthly fees
        </div>
      </div>
    </section>
  );
}
