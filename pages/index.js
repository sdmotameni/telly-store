import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Telly - Share all your socials with a tap</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center	justify-between px-3 py-3">
          <a
            href="https://app.gettelly.com/me"
            rel="noreferrer"
            target="_blank"
            className="bg-blue-600 px-4 py-1 text-white rounded-md text-sm"
          >
            Login
          </a>
          <Image src="/nexar.png" alt="" width={68} height={25} />
          <a
            href="https://gettelly.com/products/telly-gadget"
            className="bg-purple-400  px-4 py-1 text-white rounded-md text-sm"
          >
            Buy Now
          </a>
        </nav>
        <div className="bg-grey-100 p-2">
          <div className="custombg flex flex-col px-8 py-8 rounded-lg">
            <div className="flex flex-col">
              <Image src="/stars.svg" alt="" width={75} height={25} />
              <h2 className="text-white text-center font-mono text-sm">
                Rated 5-Stars by hundreds of users
              </h2>
            </div>
            <h1 className="mt-3 text-white font-bold text-3xl text-center">
              Share all your socials a tap
            </h1>
            <video autoPlay="" playsinline="" loop="" muted="" className="h-48">
              <source
                src="https://cdn.shopify.com/s/files/1/0572/4058/4379/t/1/assets/tap.webm"
                type="video/webm"
              />
              <source src="https://cdn.shopify.com/s/files/1/0572/4058/4379/t/1/assets/tap.mp4" />
              <source src="https://cdn.shopify.com/s/files/1/0572/4058/4379/t/1/assets/tap.mp4" />
            </video>
            <div className="text-white text-center">Stuff goes here</div>
            <a
              href="https://gettelly.com/products/telly-gadget"
              className="bg-purple-400 px-4 py-1 text-white text-center rounded-md text-lg mt-3"
            >
              Buy Now
            </a>
            <div className="text-white text-sm mt-2">
              Free shipping & returns | 15-day money-back guarantee | No monthly
              fees
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
