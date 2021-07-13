import Image from "next/image";

export default function Hero() {
  return (
    <section className="m-3 bg-white rounded-lg shadow">
      <div className="flex flex-col py-5 rounded-lg">
        <div className="flex flex-col">
          <Image src="/stars.svg" alt="" width={75} height={25} />
          <h2 className="font-mono text-sm text-center opacity-90">
            Rated 5-Stars by hundreds of users
          </h2>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-center text-transparent bg-gradient-to-r bg-clip-text from-purple-500 to-pink-500">
          Share all your socials with a tap
        </h1>
        <video className="w-full h-48" autoPlay loop muted>
          <source src="/tap.webm" type="video/webm" />
          <source src="/tap.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex mt-1 text-center">
          <div className="flex flex-col items-center space-y-2">
            <div className="relative w-5 h-5">
              <Image
                alt="phone"
                src="/phone.svg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-xs opacity-90">No App Needed</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative w-5 h-5">
              <Image
                alt="phone"
                src="/phone.svg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-xs opacity-90">For iPhones & Androids</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative w-5 h-5">
              <Image
                alt="phone"
                src="/phone.svg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-xs opacity-90">Unlimited Taps</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative w-5 h-5">
              <Image
                alt="phone"
                src="/phone.svg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-xs opacity-90">Customizable Profiles</p>
          </div>
        </div>
        <a
          href="https://shop.gettelly.com/products/telly-gadget"
          className="px-4 py-1 mt-4 mb-2 text-lg text-center text-white bg-purple-500 rounded-md mx-9"
        >
          Buy Now
        </a>
        <div className="mt-2 text-xs mx-9 opacity-90">
          Free shipping & returns | 30-day money-back guarantee | No monthly
          fees
        </div>
      </div>
    </section>
  );
}
