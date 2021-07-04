import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center	justify-between px-3 py-3">
          <Image src="/nexar.png" alt="" width={65} height={25} />
          <button className="bg-purple-400 px-4 py-1 text-white rounded-md text-sm">
            Buy Now
          </button>
        </nav>
        <div className="bg-grey-50 p-2">
          <div className="albert	 flex flex-col px-8 py-8 rounded-lg">
            <h1 className="text-white font-bold text-2xl text-center">
              Share all your socials with just a tap
            </h1>
            <video
              className="hero__video h-48"
              preload=""
              muted=""
              playsinline=""
              autoplay=""
              loop=""
            >
              <source
                src="https://cdn.shopify.com/s/files/1/0572/4058/4379/t/1/assets/tap.mp4"
                type="video/mp4"
              />
            </video>
            <div className="text-white text-center">Stuff goes here</div>
            <button className="bg-purple-400 px-4 py-1 text-white rounded-md text-lg">
              Buy Now
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
