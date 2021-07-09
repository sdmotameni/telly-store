import Head from "next/head";
import Image from "next/image";
import Navbar from "./common/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Telly | Share all your socials with a tap</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen bg-gray-100">
        <Navbar />
        <div className="m-2 bg-white rounded-lg shadow">
          <div className="flex flex-col px-8 py-16 rounded-lg">
            <div className="flex flex-col">
              <Image src="/stars.svg" alt="" width={75} height={25} />
              <h2 className="font-mono text-sm text-center opacity-90">
                Rated 5-Stars by hundreds of users
              </h2>
            </div>
            <h1 className="mt-3 text-3xl font-bold text-center opacity-80">
              Share all your socials a tap
            </h1>
            <video className="w-full h-48" autoPlay={true} loop muted>
              <source src="tap.mp4" type="video/mp4" />
              <source src="tap.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <div className="flex text-center">
              <div className="flex flex-col items-center space-y-1">
                <div className="relative w-6 h-6">
                  <Image
                    alt="Mountains"
                    src="/phone.svg"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <p className="text-xs opacity-90">No App Needed</p>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <div className="relative w-6 h-6">
                  <Image
                    alt="phone"
                    src="/phone.svg"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <p className="text-xs opacity-90">For iPhones & Androids</p>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <div className="relative w-6 h-6">
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
              className="px-4 py-1 mt-3 text-lg text-center text-white bg-purple-500 rounded-md"
            >
              Buy Now
            </a>
            <div className="mt-2 text-xs opacity-90">
              Free shipping & returns | 30-day money-back guarantee | No monthly
              fees
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
