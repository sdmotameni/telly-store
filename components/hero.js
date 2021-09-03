import Image from "next/image";

import HeroTapVideo from "./common/heroTapVideo";
// import HeroListItems from "./common/heroListItems";

export default function Hero() {
  return (
    <section className="flex flex-col px-3 py-8 custombg rounded-3xl">
      <div className="flex flex-col">
        <div className="flex flex-col items-stretch w-full">
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-10">
              <Image
                alt="stars"
                src="/hero/stars.svg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h2 className="-mt-3 font-mono text-sm text-center opacity-90">
              Rated 5-Stars by hundreds of users
            </h2>
          </div>
          <h1 className="mt-1 text-4xl font-bold text-center">
            Share all your socials with a tap
          </h1>
          <HeroTapVideo />
          {/* <HeroListItems /> */}
          <a
            href="https://shop.gettelly.com/products/telly-gadget"
            className="py-2 mx-6 mt-3 text-lg font-medium text-center text-white rounded-md bg-violet-500"
          >
            Buy Now
          </a>
        </div>
      </div>
    </section>
  );
}
